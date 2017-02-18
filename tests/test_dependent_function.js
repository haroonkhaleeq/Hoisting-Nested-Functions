/**
* Example test case: Parent variable used before nested child function
*/

var x = 23;

function f(a) {
	var y = x;
	function g(step) {
		var z = y;
		return x + y + step;
	}
	g(a);

}

f(1);