/**
* Example test case: Parent variable used after nested child function
*/

var x = 23;

function f(a) {
	function g(step) {
		var z = y;
		return x + y + step;
	}
	g(a);
	var y = x;

}

f(1);