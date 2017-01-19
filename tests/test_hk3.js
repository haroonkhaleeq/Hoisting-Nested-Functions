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
}

f(1);
t(2);
