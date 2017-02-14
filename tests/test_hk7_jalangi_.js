J$.iids = {"8":[2,7,2,18],"9":[2,7,2,13],"10":[2,7,2,18],"17":[2,17,2,18],"18":[5,32,5,42],"25":[3,12,3,13],"26":[5,13,5,43],"33":[3,12,3,13],"41":[3,5,3,14],"49":[5,13,5,19],"57":[5,22,5,31],"65":[5,32,5,38],"73":[5,41,5,42],"81":[5,22,5,43],"89":[5,13,5,43],"97":[5,5,5,45],"105":[1,17,7,2],"113":[1,17,7,2],"121":[1,17,7,2],"129":[1,17,7,2],"137":[1,17,7,2],"145":[1,17,7,2],"153":[8,1,8,8],"161":[8,13,8,22],"169":[8,23,8,24],"177":[8,13,8,25],"185":[8,1,8,26],"187":[8,1,8,12],"193":[8,1,8,27],"201":[1,1,9,7],"209":[1,1,9,7],"217":[2,3,6,4],"225":[1,17,7,2],"233":[1,17,7,2],"241":[1,1,9,7],"249":[1,1,9,7],"nBranches":2,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk7.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk7_jalangi_.js","code":"var factorial = function(number) {\n  if (number <= 0) { // terminal case\n    return 1;\n  } else { // block to execute\n    return (number * factorial(number - 1));\n  }\n};\nconsole.log(factorial(6));\n// 720"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(201, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk7_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk7.js');
            J$.N(209, 'factorial', factorial, 0);
            var factorial = J$.X1(145, J$.W(137, 'factorial', J$.T(129, function (number) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            number = J$.N(121, 'number', number, 4);
                            if (J$.X1(217, J$.C(8, J$.B(10, '<=', J$.R(9, 'number', number, 0), J$.T(17, 0, 22, false), 0)))) {
                                return J$.X1(41, J$.Rt(33, J$.T(25, 1, 22, false)));
                            } else {
                                return J$.X1(97, J$.Rt(89, J$.B(26, '*', J$.R(49, 'number', number, 0), J$.F(81, J$.R(57, 'factorial', factorial, 1), 0)(J$.B(18, '-', J$.R(65, 'number', number, 0), J$.T(73, 1, 22, false), 0)), 0)));
                            }
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 105), factorial, 3));
            J$.X1(193, J$.M(185, J$.R(153, 'console', console, 2), 'log', 0)(J$.F(177, J$.R(161, 'factorial', factorial, 1), 0)(J$.T(169, 6, 22, false))));
        } catch (J$e) {
            J$.Ex(241, J$e);
        } finally {
            if (J$.Sr(249)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
