
var function_list = [];
var program_stack = [];

(function (sandbox) {
    function MyAnalysis() {

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            program_stack.push('invoke-fun-pre_' + f.name);
            function_list.push(functionIid);
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
			console.log(program_stack.pop());
            return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

        this.onReady = function (cb) {
            cb();
        };
    }

    sandbox.analysis = new MyAnalysis();
    console.log('Hello!');

})(J$);



