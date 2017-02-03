
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
			program_stack.push('read_var_' + name);
            return {result: val};
        };

        /**
         * This callback is called before a variable is written.
         */
        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
        	program_stack.push('write_var_' + name);
            return {result: val};
        };

        


        this.scriptExit = function (iid, wrappedExceptionVal) {
        	console.log("Function List: ");
            console.log(function_list);
            console.log("Program Stack: ");
			console.log(program_stack);
			check_program_trace();
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
<<<<<<< HEAD

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
=======
>>>>>>> cc2240a3db56e41874feac73df70f0b1421c79b4

		//console.log('4th');

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

function check_program_trace(){
	for(i=0; i<program_stack.length; i++){
		if(program_stack[i].includes('invoke-fun-pre')){
			var f = program_stack[i].split('_').splice(-1)[0];
			var f_nested_functions = get_nested_functions(f, i);
			console.log(f + ' has these nested functions: ' + f_nested_functions);
		}
	}

}

