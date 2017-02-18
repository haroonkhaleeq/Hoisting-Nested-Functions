
/**
* Example test case: Parent variable used before nested child function
Output: Analysis suggests that function s and p can be hoisted
*/

var x = 23;

function f(a) {
	function g(step) {
		return x + step;
	}
	g(a);
}

function g(){}
g();

function t(a) {
	var c = 3;

	function s(viu) {
		var z = 5;
		var str = 'abc';

		function r(ert) {
			return x + ert;
		}
		r(viu);
	}
	s(a);

	function p(){
		return 3;
	}
	p();
}

f(1);
t(2);
