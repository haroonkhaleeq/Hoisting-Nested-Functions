
/* 
* Test case for the anonymous functions.
* Our Analysis says that function c should be hoisted.
*/

var x = function (a, b) {

	var c = function(){
		return 4;
	}
	c();

	return a * b;
};

var z = x(4, 3);
