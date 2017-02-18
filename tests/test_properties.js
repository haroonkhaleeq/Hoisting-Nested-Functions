
/**
* Example test case: Parent variable used before nested child function
Output Our analysis suggests that g cannot be hoisted although it can be.
*/

var x = 23;

function f(a) {
	var b = 2;
	b.step = 4;
	
	//Our Analysis has a limitation that it cannot differntiate between variables and properties

	function g(step) {
		return x + step;
	}
	g(a);
}

f(1);
