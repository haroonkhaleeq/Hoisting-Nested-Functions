
var function_list = [];

(function (sandbox) {
    function MyAnalysis() {

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            console.log(f);
            console.log(base.global);
            //console.log(J$.smap[1][121]);
            //console.log(J$.smap[1][65]); 
            function_list.push(functionIid);
            return {f: f, base: base, args: args, skip: false};
        };

        this.scriptExit = function (iid, wrappedExceptionVal) {
            console.log(function_list);
            return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };

  
        this.onReady = function (cb) {
            cb();
        };
    }

    sandbox.analysis = new MyAnalysis();
    console.log('Hello!');

})(J$);



