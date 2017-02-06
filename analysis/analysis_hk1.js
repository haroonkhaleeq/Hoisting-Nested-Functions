
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
			//console.log(iid + ' : ' + name);
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
		//console.log("starting loop with index: " + i);
				
		//console.log(program_stack[i].includes('declare_'));
		//console.log(function_list.includes(program_stack[i].split('_').splice(-1)[0]));

		if(program_stack[i].includes('invoke-fun-pre')){
			nnv = program_stack[i].split('_').splice(-1)[0];
			//console.log('1st');
			//console.log(nnv);
			nested_nested_flag = true;
			continue;
		}
		
		if(program_stack[i] === ('invoke-fun_'+nnv)){
			nested_nested_flag = false;
			//console.log('2nd');
			continue;
		}
		
		if(nested_nested_flag === true){
			//console.log('3rd');
			continue;
		}

		if(program_stack[i].includes('declare_') && function_list.includes(program_stack[i].split('_').splice(-1)[0])){
			//console.log(program_stack[i].includes('declare_'));
			//console.log(function_list.includes(program_stack[i].split('_').splice(-1)[0]));
			result.push(program_stack[i].split('_').splice(-1)[0]);
		}

	//program_stack[i].includes('invoke_' + f)
		
		//console.log(program_stack[i] === 'invoke-fun_'+f);
		if(program_stack[i] === 'invoke-fun_'+f){
			match = true;
			//console.log('match is true in index: ' + i);
		}

		//if(i == 8){match = true;}
	}	
	
	//console.log(result);
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
* @param f - Function where the variable belongs to
* @param parent_f - Parent function of the testing function
* @param v - Variable to be tested
* @returns - True, if the variable is coming from parent scope; False, if the variable is not coming from parent scope.
*/
function is_var_from_parent(nestedF_read_var_list, f_written_variables){
	var result = false;
	for (i=0; i<nestedF_read_var_list.length; i++){
		if(f_written_variables.indexOf(nestedF_read_var_list[i] > -1)){
			//Variable is from parent scope - Function not hoisted..
			result = true;
		}
	}
	return result;
}

function check_program_trace_for_nested_functions(){
	for(i=0; i<program_stack.length; i++){
		if(program_stack[i].includes('invoke-fun-pre')){
			var f = program_stack[i].split('_').splice(-1)[0];
			var f_nested_functions = get_nested_functions(f, i);
			var hoisted_functions = [];

			console.log(f + ' has these nested functions: ' + f_nested_functions);
		}
	}

}

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




				for (k=0; k<nestedF_read_var_list.length; k++){
					if(f_written_variables.indexOf(nestedF_read_var_list[k] > -1)){
						//Variable is from parent scope.. Not hoisted..
						console.log('Variable '+ nestedF_read_var_list[k] +' is coming from parent scope..');
						console.log('Function'+ f_nested_functions[j] +' is not a hoisted function.');
					}
				}
			}
		}
	}

}

