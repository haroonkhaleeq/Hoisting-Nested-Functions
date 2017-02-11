
var function_list = [];
var program_stack = [];

(function (sandbox) {
    function MyAnalysis() {

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            program_stack.push('invoke-fun-pre_' + f.name);
            function_list.push(f.name);			
            return {f: f, base: base, args: args, skip: false};
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
			program_stack.push('invoke-fun_' + f.name);
			return {result: result};
        };

		this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
			program_stack.push('declare_' + name);
			console.log(iid + ' : ' + name);
            return {result: val};
        };

        /* Variables declared in Parent scope should not be accessed in Child scope */

        /**
         * This callback is called before a property of an object is written.
         */
        this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
        	program_stack.push('put-field-pre_' + offset);
            return {base: base, offset: offset, val: val, skip: false};
        };

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
        this.getFieldPre = function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
        	program_stack.push('get-field-pre_' + offset);
            return {base: base, offset: offset, skip: false};
        };

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
        	console.log("Function List: ");
            console.log(function_list);
            console.log("Program Stack: ");
			console.log(program_stack);
			
			check_program_trace_for_nested_functions();
			get_nf_not_globally_declared();
			//check_program_trace_for_dependencies();
			return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

        this.onReady = function (cb) {
            cb();
        };
    }
    
	sandbox.analysis = new MyAnalysis();
})(J$);

function get_nested_functions(f, i){
	var match = false;
	var result = [];
	var nested_nested_flag = false;
	var nnv = '';

	while(match == false){
		i++;

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
function get_var_write_list(f){
	var var_write_list = [];
	
	//Getting the scope of function in program stack
	for(i=0; i<program_stack.length; i++){
		//If any variable is written in the scope, push it in var_write_list array
		if(program_stack[i].includes('write-var_')){
			var_write_list.push(program_stack[i].split('_').splice(-1)[0]);
		}
		//Ignore all write in nested function scope
		if(program_stack[i].includes('invoke-fun-pre')){
			break;
		}
		//At then end of function scope, stop checking for variables
		if(program_stack[i] === 'invoke-fun_'+f){
			break;
		}
	} 
	return var_write_list;

}

/**
* Gets a list of variables that is read from, in the function scope
* @param f - Function whose scope is being considered - Child functions scope ignored
* @returns var_read_list - Array of all variables read in the function scope
*/
function get_var_read_list(f){
	var var_read_list = [];
	
	//Getting the scope of functionin program stack
	for(i=0; i<program_stack.length; i++){
		//If any variable is read in the scope, push it in var_read_list array
		if(program_stack[i].includes('read-var_')){
			var_read_list.push(program_stack[i].split('_').splice(-1)[0]);
		}
		//Ignore all write in nested function scope
		if(program_stack[i].includes('invoke-fun-pre')){
			break;
		}
		//At then end of function scope, stop checking for variables
		if(program_stack[i] === 'invoke-fun_'+f){
			break;
		}
	}
	return var_read_list;
}

/**
* Checks if the variable is from the parent function scope or not
* @param f - Function where the variable belongs to
* @param parent_f - Parent function of the testing function
* @param v - Variable to be tested
* @returns - True, if the variable is coming from parent scope; False, if the variable is not coming from parent scope.
*/
function is_var_from_parent(nestedF_read_var_list, f_written_variables){
	var result = false;
	for (i=0; i<nestedF_read_var_list.length; i++){
		//Check if the read variable is already there in written variables list
		if(f_written_variables.indexOf(nestedF_read_var_list[i] > -1)){
			//Variable is from parent scope - Function not hoisted..
			result = true;
		}
	}
	return result;
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
			//console.log(f + ' has these nested functions: ' + f_nested_functions);
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
**/
function get_nf_not_globally_declared(){

	//Getting all the global function
	var global_fun = [];
	var i = 0;
	var result = [];

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

		for (var k = 0; k < nf.length; k++) {
			if(global_fun.indexOf(nf[k]) == -1){
				result.push(nf[k]);
			}
		};

	};

	console.log("These Nested Functions can be hoisted based on second condition: [ " + result + " ]");
	return result;
}

/**
* 
*/
function check_program_trace_for_dependencies(){
	for(i=0; i<program_stack.length; i++){
		if(program_stack[i].includes('invoke-fun-pre')){
			var f = program_stack[i].split('_').splice(-1)[0];
			var f_nested_functions = get_nested_functions(f, i);
			var hoisted_functions = [];

			console.log(f + ' has these nested functions: ' + f_nested_functions);
			
			//List of variables written by Parent Function
			var f_written_variables = get_var_write_list(f);
			console.log(f + ' writes to: ' + f_written_variables);

			//List of variables read by child functions
			for (j=0; j<f_nested_functions.length; j++){
				
				//Array of all read varables in child scope
				var nestedF_read_var_list = get_var_read_list(f_nested_functions[j]);
				
				//Check if the read variable is written in parent scope
				var result = is_var_from_parent(nestedF_read_var_list, f_written_variables);
				if (result == true){
					//Variable is from parent scope.. Not hoisted..
					console.log('Variable '+ nestedF_read_var_list[k] +' is coming from parent scope..');
					console.log('Function'+ f_nested_functions[j] +' is not a hoisted function.');
					
				}
				else{
					hoisted_functions.push(f_nested_functions[j]);
				}
				console.log(f + 'has hoisted functions:' + hoisted_functions);
			}
		}
	}

}

