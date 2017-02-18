/**
* Example test case: Parent variable used before nested child function
Output: Analysis suggests that function g, s and p can be hoisted
*/

var x = 23;

function f(a) {
	function g(step) {
		return x + step;
	}
	g(a);
}

function t(a) {
	function s(viu) {
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
