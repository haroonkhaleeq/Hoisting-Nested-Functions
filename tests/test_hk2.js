var x = 23;
x.a = 43;

function f(a) {
	var a = 3;
	function g(step) {
		return x + step;
	}
	g(a);
}

f(1);
