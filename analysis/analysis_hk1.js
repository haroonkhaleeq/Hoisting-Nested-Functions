
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

        this.scriptExit = function (iid, wrappedExceptionVal) {
            console.log(function_list);
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

