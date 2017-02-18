//recursive


function factorial(n) {

	function abc(){
    	return 5;
    }
    abc();

    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

factorial(3);
