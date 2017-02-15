J$.iids = {"8":[9,8,9,14],"9":[5,13,5,14],"10":[9,8,9,14],"17":[5,13,5,14],"18":[12,30,12,35],"25":[5,6,5,15],"26":[12,16,12,36],"33":[4,2,6,6],"41":[4,2,6,6],"49":[7,5,7,8],"57":[7,5,7,10],"65":[7,5,7,11],"73":[9,8,9,9],"81":[9,13,9,14],"89":[10,16,10,17],"97":[10,16,10,17],"105":[10,9,10,17],"113":[12,16,12,17],"121":[12,20,12,29],"129":[12,30,12,31],"137":[12,34,12,35],"145":[12,20,12,36],"153":[12,16,12,36],"161":[12,9,12,37],"169":[2,1,14,2],"177":[2,1,14,2],"185":[2,1,14,2],"193":[4,2,6,6],"201":[2,1,14,2],"209":[16,1,16,10],"217":[16,11,16,12],"225":[16,1,16,13],"233":[16,1,16,14],"241":[1,1,17,1],"249":[2,1,14,2],"257":[1,1,17,1],"265":[4,2,6,6],"273":[4,2,6,6],"281":[9,5,13,6],"289":[2,1,14,2],"297":[2,1,14,2],"305":[1,1,17,1],"313":[1,1,17,1],"nBranches":2,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_recursive.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_recursive_jalangi_.js","code":"//recursive\nfunction factorial(n) {\n\n\tfunction abc(){\n    \treturn 5;\n    }\n    abc();\n\n    if(n == 0) {\n        return 1\n    } else {\n        return n * factorial(n - 1);\n    }\n}\n\nfactorial(3);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(241, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_recursive_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_recursive.js');
            function factorial(n) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(169, arguments.callee, this, arguments);
                            function abc() {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, 5, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(177, 'arguments', arguments, 4);
                            n = J$.N(185, 'n', n, 4);
                            abc = J$.N(201, 'abc', J$.T(193, abc, 12, false, 33), 0);
                            J$.X1(65, J$.F(57, J$.R(49, 'abc', abc, 0), 0)());
                            if (J$.X1(281, J$.C(8, J$.B(10, '==', J$.R(73, 'n', n, 0), J$.T(81, 0, 22, false), 0)))) {
                                return J$.X1(105, J$.Rt(97, J$.T(89, 1, 22, false)));
                            } else {
                                return J$.X1(161, J$.Rt(153, J$.B(26, '*', J$.R(113, 'n', n, 0), J$.F(145, J$.R(121, 'factorial', factorial, 1), 0)(J$.B(18, '-', J$.R(129, 'n', n, 0), J$.T(137, 1, 22, false), 0)), 0)));
                            }
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            factorial = J$.N(257, 'factorial', J$.T(249, factorial, 12, false, 169), 0);
            J$.X1(233, J$.F(225, J$.R(209, 'factorial', factorial, 1), 0)(J$.T(217, 3, 22, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
