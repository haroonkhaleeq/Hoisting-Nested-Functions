var x = 23;

function f(a) {
	var b = 2;
	b.a = 4;

	// Doesn't cover this scenario
	//var c = 5;
	//c.a = 4;

	function g(step) {
		return x + step + b.a;
	}
	g(a);
}

f(1);
