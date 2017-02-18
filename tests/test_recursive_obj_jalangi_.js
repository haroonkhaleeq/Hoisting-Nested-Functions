J$.iids = {"8":[13,6,13,22],"9":[7,10,7,16],"10":[13,6,13,12],"16":[13,6,13,22],"17":[7,10,7,22],"18":[13,16,13,22],"25":[7,10,7,22],"26":[16,21,16,26],"33":[7,10,7,22],"34":[16,41,16,46],"41":[8,2,8,12],"42":[16,10,16,47],"49":[8,13,8,14],"57":[8,2,8,15],"65":[8,2,8,16],"73":[6,1,10,2],"81":[6,1,10,2],"89":[6,1,10,2],"97":[6,1,10,2],"105":[13,6,13,7],"113":[13,11,13,12],"121":[13,16,13,17],"129":[13,21,13,22],"137":[14,10,14,11],"145":[14,10,14,11],"153":[14,3,14,12],"161":[16,10,16,20],"169":[16,21,16,22],"177":[16,25,16,26],"185":[16,10,16,27],"193":[16,30,16,40],"201":[16,41,16,42],"209":[16,45,16,46],"217":[16,30,16,47],"225":[16,10,16,47],"233":[16,3,16,48],"241":[12,1,18,2],"249":[12,1,18,2],"257":[12,1,18,2],"265":[20,1,20,13],"273":[20,21,20,22],"281":[20,14,20,23],"289":[20,1,20,24],"297":[20,1,20,25],"305":[1,1,21,1],"313":[6,1,10,2],"321":[1,1,21,1],"329":[12,1,18,2],"337":[1,1,21,1],"345":[6,1,10,2],"353":[6,1,10,2],"361":[13,2,16,48],"369":[12,1,18,2],"377":[12,1,18,2],"385":[1,1,21,1],"393":[1,1,21,1],"nBranches":4,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_recursive_obj.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_recursive_obj_jalangi_.js","code":"/* \n* Test case for the use of objects with single properties.\n* Output of the function is of type Number\n*/\n\nfunction fibonacciObj(object) {\n\tvar n = object.value;\n\tfibonacci1(n);\n\n}\n\nfunction fibonacci1(n) {\n\tif (n == 0 || n == 1)\n\t\treturn n;\n\telse\n\t\treturn fibonacci1(n - 1) + fibonacci1(n - 2);\n\n}\n\nfibonacciObj({value:4});\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(305, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_recursive_obj_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_recursive_obj.js');
            function fibonacciObj(object) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            object = J$.N(89, 'object', object, 4);
                            J$.N(97, 'n', n, 0);
                            var n = J$.X1(33, J$.W(25, 'n', J$.G(17, J$.R(9, 'object', object, 0), 'value', 0), n, 1));
                            J$.X1(65, J$.F(57, J$.R(41, 'fibonacci1', fibonacci1, 1), 0)(J$.R(49, 'n', n, 0)));
                        } catch (J$e) {
                            J$.Ex(345, J$e);
                        } finally {
                            if (J$.Fr(353))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function fibonacci1(n) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(241, arguments.callee, this, arguments);
                            arguments = J$.N(249, 'arguments', arguments, 4);
                            n = J$.N(257, 'n', n, 4);
                            if (J$.X1(361, J$.C(16, J$.C(8, J$.B(10, '==', J$.R(105, 'n', n, 0), J$.T(113, 0, 22, false), 0)) ? J$._() : J$.B(18, '==', J$.R(121, 'n', n, 0), J$.T(129, 1, 22, false), 0))))
                                return J$.X1(153, J$.Rt(145, J$.R(137, 'n', n, 0)));
                            else
                                return J$.X1(233, J$.Rt(225, J$.B(42, '+', J$.F(185, J$.R(161, 'fibonacci1', fibonacci1, 1), 0)(J$.B(26, '-', J$.R(169, 'n', n, 0), J$.T(177, 1, 22, false), 0)), J$.F(217, J$.R(193, 'fibonacci1', fibonacci1, 1), 0)(J$.B(34, '-', J$.R(201, 'n', n, 0), J$.T(209, 2, 22, false), 0)), 0)));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fibonacciObj = J$.N(321, 'fibonacciObj', J$.T(313, fibonacciObj, 12, false, 73), 0);
            fibonacci1 = J$.N(337, 'fibonacci1', J$.T(329, fibonacci1, 12, false, 241), 0);
            J$.X1(297, J$.F(289, J$.R(265, 'fibonacciObj', fibonacciObj, 1), 0)(J$.T(281, {
                value: J$.T(273, 4, 22, false)
            }, 11, false)));
        } catch (J$e) {
            J$.Ex(385, J$e);
        } finally {
            if (J$.Sr(393)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
