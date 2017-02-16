/**
* Nested functions with different branch execution
* There can be 3 cases: 1. Both Branch executes, 2. Only addB() executes, 3. Only add5() executes
*/
function add(a, b) {
    function addB(x) {
        return x + b;
    }
    function add5(x) {
        return x + 5;
    }
    if (b === 5) {
        return add5(a);
    } else {
        return addB(a);
    }
}


// Case 1 :: both brach executes
//add(3,4);
//add(3,5);

// Case 2 :: only addB executes
//add(3,4);

// Case 3 :: only add5 executes
add(3,5);
