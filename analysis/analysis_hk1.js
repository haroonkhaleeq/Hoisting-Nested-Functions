
// function_list is responsible for storing all the function names in the program
var function_list = [];

// program_stack is responsible for storing all the call-back records executed by the jalangi
var program_stack = [];

// function_ids is responsible for storing all the function ids in the test program (It is being used for detecting the recursive function)
var function_ids = [];

(function (sandbox) {
    function MyAnalysis() {

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            
            //pushing the call-back with the function name to the program stack
            program_stack.push('invoke-fun-pre_' + f.name);
            
            //
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
        	
        	/*console.log("Function IDS");
        	console.log(function_ids);
        	console.log("Function List: ");
            console.log(function_list);
            console.log("Program Stack: ");
			console.log(program_stack);*/
			//return;

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
			
			if(i == 0){
				func_stack.push("anonymous");
				program_stack[i] = program_stack[i] + "anonymous";
				function_list.push("anonymous");
				continue;
			}

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

function get_nested_functions(f, i){
	var match = false;
	var result = [];
	var nested_nested_flag = false;
	var nnv = '';

	while(match == false){
		i++;

		if(program_stack.length == i)
			break;

		if(program_stack[i].includes('invoke-fun-pre')){
			nnv = program_stack[i].split('_').splice(-1)[0];
			nested_nested_flag = true;
			continue;
		}
		
		if(program_stack[i] === ('invoke-fun_'+nnv)){
			nested_nested_flag = false;
			continue;
		}
		
		if(nested_nested_flag === true){
			continue;
		}

		if(program_stack[i].includes('declare_') && function_list.includes(program_stack[i].split('_').splice(-1)[0])){
			result.push(program_stack[i].split('_').splice(-1)[0]);
		}

		if(program_stack[i] === 'invoke-fun_'+f){
			match = true;
		}
	}	
	
	return result;
}

/**
* Gets a list of variables that is being written to, in the function scope
* 
* @param f - Function whose scope is being considered - Child functions scope ignored
* @returns var_write_list - Array of all variables written in the function scope
*/
function get_write_list(f){
	var var_write_list = [];
	var match = false;
	var nested_nested_flag = false;
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

			if((nested_nested_flag === false) && (program_stack[i].includes('write-var_') || program_stack[i].includes('put-field_'))){
				var_write_list.push(program_stack[i].split('_').splice(-1)[0]);
			}
		}

	};

	return var_write_list;
}

/**
* Gets a list of variables that is read from, in the function scope
* @param f - Function whose scope is being considered - Child functions scope ignored
* @returns var_read_list - Array of all variables read in the function scope
*/
function get_read_list(f){
	var var_read_list = [];	
	var match = false;
	var nested_nested_flag = false;
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

		if(program_stack.length == i)
			break;

		if(program_stack[i].includes('invoke-fun-pre_'+f)){
			match = true;
		}

		if(match == true){
			if(program_stack[i].includes('declare_') && (function_list.indexOf(program_stack[i].split('_').splice(-1)[0]) > -1) ){
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
**/
function get_nf_not_globally_declared(){

	//Getting all the global function
	var global_fun = [];
	var i = 0;
	var result = [];

	while(true){
		if(program_stack.length == i){
			break;
		}

		if(!program_stack[i].includes('declare_')){
			break;
		}

		if(function_list.indexOf(program_stack[i].split('_').splice(-1)[0]) > -1){
			global_fun.push(program_stack[i].split('_').splice(-1)[0]);
			i++;
			continue;
		}

		if(program_stack[i].split('_').splice(-1)[0] == ""){
			i++;
			global_fun.push("anonymous");
			continue;
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
			
			var dependent_flag = false;
			for (var k = 0; k < nf.length; k++) {

				dependent_flag = false;
				var read_list = get_read_list(nf[k]);
				
				for (var l = 0; l < read_list.length; l++) {
					if(write_list.indexOf(read_list[l]) > -1){
						dependent_flag = true;
					}
				};

				if(dependent_flag === false){
					result.push(nf[k]);
				}
			};
		}
	}

	//console.log("These Nested Functions can be hoisted based on first condition: [ " + result + " ]");
	return result;
}

