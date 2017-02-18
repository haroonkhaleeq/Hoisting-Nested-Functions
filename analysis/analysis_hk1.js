
var function_list = [];
var program_stack = [];
var function_ids = [];

(function (sandbox) {
    function MyAnalysis() {

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            
            program_stack.push('invoke-fun-pre_' + f.name);
            
            if(f.name.length > 0){            	
            	if(function_ids.indexOf(functionIid) == -1){
            		function_list.push(f.name);
            		function_ids.push(functionIid);	
            	}            	
            }

            return {f: f, base: base, args: args, skip: false};
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
			program_stack.push('invoke-fun_' + f.name);
			return {result: result};
        };

		this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
			program_stack.push('declare_' + name);			
            return {result: val};
        };

        /* Variables declared in Parent scope should not be accessed in Child scope */

        /**
         * This callback is called before a property of an object is written.
         */
        /*this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
        	program_stack.push('put-field-pre_' + offset);
            return {base: base, offset: offset, val: val, skip: false};
        };*/

        /**
         * This callback is called after a property of an object is written.
         */
        this.putField = function (iid, base, offset, val, isComputed, isOpAssign) {
        	program_stack.push('put-field_' + offset);
            return {result: val};
        };

        /**
         * This callback is called before a property of an object is accessed.
         */
        /*this.getFieldPre = function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
        	program_stack.push('get-field-pre_' + offset);
            return {base: base, offset: offset, skip: false};
        };*/

        /**
         * This callback is called after a property of an object is accessed.
         */
        this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
        	program_stack.push('get-field_' + offset);
            return {result: val};
        };

        /**
         * This callback is called after a variable is read.
         */
        this.read = function (iid, name, val, isGlobal, isScriptLocal) {
			program_stack.push('read-var_' + name);
            return {result: val};
        };

        /**
         * This callback is called before a variable is written.
         */
        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
        	program_stack.push('write-var_' + name);
            return {result: val};
        };

        


        this.scriptExit = function (iid, wrappedExceptionVal) {
        	
        	check_for_anonymous_functions();

        	console.log("Function IDS");
        	console.log(function_ids);
        	console.log("Function List: ");
            console.log(function_list);
            console.log("Program Stack: ");
			console.log(program_stack);
			return;

			console.log();
			console.log("********************************************");
			console.log();

			//check_program_trace_for_nested_functions();
			var result1 = check_program_trace_for_dependencies();
			var result2 = get_nf_not_globally_declared();
			
			// Removing Duplicates for recursive functions
			result1 = result1.filter(function(elem, index, self) {
			    return index == self.indexOf(elem);
			})

			var final_result = result1.filter(function(n) {
			  return result2.indexOf(n) > -1;
			});

			console.log("Analysis suggests that the following functions should be hoisted!");
			console.log(final_result);

			console.log();
			console.log("********************************************");
			console.log();

			return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

        this.onReady = function (cb) {
            cb();
        };
    }
    
	sandbox.analysis = new MyAnalysis();
})(J$);

function check_for_anonymous_functions(){
	
	// For completing the starting block
	func_name = '';
	func_stack = [];

	for (var i = 0; i < program_stack.length; i++) {
		if(program_stack[i] == 'invoke-fun-pre_'){
			
			if(i == 0)
				continue;

			func_name = program_stack[i-1].split('_').splice(-1)[0];
			program_stack[i] = program_stack[i] + func_name;
			function_list.push(func_name);
			func_stack.push(func_name);		
		}

		if(program_stack[i] == 'invoke-fun_'){
			program_stack[i] = program_stack[i] + func_stack.pop();
		}
	};		

}
/**
* Gets a list of nested functions inside the specified function
* 
* @param f - Function whose scope is being considered for fincing the child function
* @param i - Index of program stack from where the search for nested function begins (scope of the function starts there)
* @returns result - Array of all nested functions
*/

function get_nested_functions(f, i){
	var match = false;
	//Array to store all nested functions
	var result = [];
	//Flag for nesting tester
	var nested_nested_flag = false;
	//Variable to store nested function name(s)
	var nnv = '';

	while(match == false){
		i++;
		// If the program stack if fully iterated, stop iteration.
		if(program_stack.length == i)
			break;
		// If the program stack have invokeFunPre() calls, then there is a nested function
		if(program_stack[i].includes('invoke-fun-pre')){
			nnv = program_stack[i].split('_').splice(-1)[0];
			nested_nested_flag = true;
			continue;
		}
		// If the program stack have invokeFun() then the nested child function scope ends there
		if(program_stack[i] === ('invoke-fun_'+nnv)){
			nested_nested_flag = false;
			continue;
		}
		
		if(nested_nested_flag === true){
			continue;
		}
		// If any function is declared in the scope, push the name of the function in the 'result' array
		if(program_stack[i].includes('declare_') && function_list.includes(program_stack[i].split('_').splice(-1)[0])){
			result.push(program_stack[i].split('_').splice(-1)[0]);
		}
		// End the function if the end of the scope for the specfied function is found in the program stack
		if(program_stack[i] === 'invoke-fun_'+f){
			match = true;
		}
	}	
	//Return the list of all nested function in the specified function scope
	return result;
}

/**
* Gets a list of variables that is being written to, in the function scope
* 
* @param f - Function whose scope is being considered - Child functions scope ignored
* @returns var_write_list - Array of all variables written in the function scope
*/
function get_write_list(f){
	// Array to store the list of written variables
	var var_write_list = [];
	// Flag for matching function scope
	var match = false;
	// Flag used for moere than one level of nesting in the functions
	var nested_nested_flag = false;
	// Variable to store nested function name(s)
	var nnv = '';
	
	for (var i = 0; i < program_stack.length; i++) {
		// Start from the begining of th scpoe of the function i.e. invokeFunPre()
		if(program_stack[i] === 'invoke-fun-pre_'+f){
			match = true;
			continue;
		}
		// If there is any occurance of invokeFun() for the function the scpoe ends, finish this function execution
		if(program_stack[i] === 'invoke-fun_'+f){
			break;
		}
		// When inside the function scope search for more than 1 level of nesting
		if(match){
			// More than 1 level of nesting exists
			if(program_stack[i].includes('invoke-fun-pre')){
				nested_nested_flag = true;
				nnv = program_stack[i].split('_').splice(-1)[0];
				continue;
			}
			// More than 1 level of nesting scope ends
			if(program_stack[i] === ('invoke-fun_'+nnv)){
				nested_nested_flag = false;
				continue;
			}
			// If write() is occured in the scope, push the variable name to the resuing array which will be returned
			if((nested_nested_flag === false) && (program_stack[i].includes('write-var_') || program_stack[i].includes('put-field_'))){
				var_write_list.push(program_stack[i].split('_').splice(-1)[0]);
			}
		}

	};
	//Return the list of variable on which write() operation is performed
	return var_write_list;
}

/**
* Gets a list of variables that is read from, in the function scope
* @param f - Function whose scope is being considered - Child functions scope ignored
* @returns var_read_list - Array of all variables read in the function scope
*/
function get_read_list(f){
	// Array to store the list of read variables
	var var_read_list = [];	
	// Flag for matching function scope
	var match = false;
	// Flag used for moere than one level of nesting in the functions
	var nested_nested_flag = false;
	// Variable to store nested function name(s)
	var nnv = '';
	
	for (var i = 0; i < program_stack.length; i++) {
		
		if(program_stack[i] === 'invoke-fun-pre_'+f){
			match = true;
			continue;
		}

		if(program_stack[i] === 'invoke-fun_'+f){
			break;
		}

		if(match){
			if(program_stack[i].includes('invoke-fun-pre')){
				nested_nested_flag = true;
				nnv = program_stack[i].split('_').splice(-1)[0];
				continue;
			}

			if(program_stack[i] === ('invoke-fun_'+nnv)){
				nested_nested_flag = false;
				continue;
			}

			if((nested_nested_flag === false) && (program_stack[i].includes('read-var_') || program_stack[i].includes('get-field_'))){
				var_read_list.push(program_stack[i].split('_').splice(-1)[0]);
			}
		}

	};
	//Return the list of variable on which read() operation is performed
	return var_read_list;
}

/**
* Checks program trace for nested functions for all included functions
* @returns - 
*/
function check_program_trace_for_nested_functions(){
	for(i=0; i<program_stack.length; i++){
		if(program_stack[i].includes('invoke-fun-pre')){
			var f = program_stack[i].split('_').splice(-1)[0];
			var f_nested_functions = get_nested_functions(f, i);
			console.log(f + ' has these nested functions: ' + f_nested_functions);
		}
	}

}

/**
 Returns all the nested functions of a global function f

**/
function get_nf_of_global_fun_f(f){
	var result = [];
	var match = false;
	var nested_flag = false;
	var i = 0;

	while(true){

		if(program_stack[i].includes('invoke-fun-pre_'+f)){
			match = true;
		}

		if(match == true){
			if(program_stack[i].includes('declare_') && (function_list.indexOf(program_stack[i].split('_').splice(-1)[0]) > -1) ){
				//console.log(program_stack[i].split('_').splice(-1)[0]);
				result.push(program_stack[i].split('_').splice(-1)[0]);
				nested_flag = true;
			}
			else{				
				if(nested_flag == true){					
					break;
				}
			}

		}

		if(program_stack[i].includes('invoke-fun_'+f)){
			break;
		}

		i++;
	}
	return result;
}


/**
 Returns all those nested functions which doesn't exist globally with the same function name
 @returns - Array of global function names which are not declared in global scope. 
**/
function get_nf_not_globally_declared(){

	//Getting all the global function
	var global_fun = [];
	var i = 0;
	var result = [];

	while(true){

		if(program_stack.length == 0)
			break;

		if(!program_stack[i].includes('declare_')){
			break;
		}

		if(function_list.indexOf(program_stack[i].split('_').splice(-1)[0]) > -1){
			global_fun.push(program_stack[i].split('_').splice(-1)[0]);
		}

		i++;
	}

	for (var j = 0; j < global_fun.length; j++) {
		var nf = get_nf_of_global_fun_f(global_fun[j]);

		for (var k = 0; k < nf.length; k++) {
			if(global_fun.indexOf(nf[k]) == -1){
				result.push(nf[k]);
			}
		};

	};

	//console.log("These Nested Functions can be hoisted based on second condition: [ " + result + " ]");
	return result;
}

/**
* 
*/
function check_program_trace_for_dependencies(){
	
	var result = [];

	// Works for global level hoisting
	//Getting all the global function
	/*var global_fun = [];
	var i = 0;

	while(true){

		if(!program_stack[i].includes('declare_')){
			break;
		}

		if(function_list.indexOf(program_stack[i].split('_').splice(-1)[0]) > -1){
			global_fun.push(program_stack[i].split('_').splice(-1)[0]);
		}

		i++;
	}

	for (var j = 0; j < global_fun.length; j++) {
		var nf = get_nf_of_global_fun_f(global_fun[j]);

		var write_list = get_write_list(global_fun[j]);
		//console.log(global_fun[j] + " writes to: " + write_list);

		var dependent_flag = false;
		for (var k = 0; k < nf.length; k++) {

			dependent_flag = false;
			var read_list = get_read_list(nf[k]);
			//console.log(nf[k] + " reads from: " + read_list);

			for (var l = 0; l < read_list.length; l++) {
				//console.log(read_list[l]);
				if(write_list.indexOf(read_list[l]) > -1){
					dependent_flag = true;
				}
			};

			//console.log(dependent_flag);

			if(dependent_flag === false){
				result.push(nf[k]);
			}
		};

	};*/

	// Works for multi level hoisting
	for(i=0; i<program_stack.length; i++){
		if(program_stack[i].includes('invoke-fun-pre')){
			var f = program_stack[i].split('_').splice(-1)[0];
			var nf = get_nested_functions(f, i);
			
			var write_list = get_write_list(f);
			//console.log(f + " writes to: " + write_list);

			var dependent_flag = false;
			for (var k = 0; k < nf.length; k++) {

				dependent_flag = false;
				var read_list = get_read_list(nf[k]);
				//console.log(nf[k] + " reads from: " + read_list);

				for (var l = 0; l < read_list.length; l++) {
					//console.log(read_list[l]);
					if(write_list.indexOf(read_list[l]) > -1){
						dependent_flag = true;
					}
				};

				//console.log(dependent_flag);

				if(dependent_flag === false){
					result.push(nf[k]);
				}
			};
		}
	}

	//console.log("These Nested Functions can be hoisted based on first condition: [ " + result + " ]");
	return result;
}

