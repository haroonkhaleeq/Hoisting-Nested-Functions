J$.iids = {"9":[4,10,4,11],"10":[6,10,6,15],"17":[4,10,4,11],"18":[10,9,10,14],"25":[4,10,4,11],"33":[6,10,6,11],"41":[6,14,6,15],"49":[6,10,6,15],"57":[6,3,6,16],"65":[5,10,7,3],"73":[5,10,7,3],"81":[5,10,7,3],"89":[5,10,7,3],"97":[5,10,7,3],"105":[8,2,8,3],"113":[8,2,8,5],"121":[8,2,8,6],"129":[10,9,10,10],"137":[10,13,10,14],"145":[10,9,10,14],"153":[10,2,10,15],"161":[2,9,11,2],"169":[2,9,11,2],"177":[2,9,11,2],"185":[2,9,11,2],"193":[2,9,11,2],"201":[2,9,11,2],"209":[2,9,11,2],"217":[2,9,11,2],"225":[2,9,11,2],"233":[13,9,13,10],"241":[13,11,13,12],"249":[13,14,13,15],"257":[13,9,13,16],"265":[13,9,13,16],"273":[13,9,13,16],"281":[1,1,14,1],"289":[1,1,14,1],"297":[1,1,14,1],"305":[5,10,7,3],"313":[5,10,7,3],"321":[2,9,11,2],"329":[2,9,11,2],"337":[1,1,14,1],"345":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk8.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk8_jalangi_.js","code":"\nvar x = function (a, b) {\n\n\tvar r = 3;\n\tvar c = function(){\n\t\treturn 4 + r;\n\t}\n\tc();\n\n\treturn a * b;\n};\n\nvar z = x(4, 3);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(281, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk8_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk8.js');
            J$.N(289, 'x', x, 0);
            J$.N(297, 'z', z, 0);
            var x = J$.X1(225, J$.W(217, 'x', J$.T(209, function (a, b) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            a = J$.N(177, 'a', a, 4);
                            b = J$.N(185, 'b', b, 4);
                            J$.N(193, 'r', r, 0);
                            J$.N(201, 'c', c, 0);
                            var r = J$.X1(25, J$.W(17, 'r', J$.T(9, 3, 22, false), r, 1));
                            var c = J$.X1(97, J$.W(89, 'c', J$.T(81, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(65, arguments.callee, this, arguments);
                                            arguments = J$.N(73, 'arguments', arguments, 4);
                                            return J$.X1(57, J$.Rt(49, J$.B(10, '+', J$.T(33, 4, 22, false), J$.R(41, 'r', r, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(305, J$e);
                                        } finally {
                                            if (J$.Fr(313))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 65), c, 1));
                            J$.X1(121, J$.F(113, J$.R(105, 'c', c, 0), 0)());
                            return J$.X1(153, J$.Rt(145, J$.B(18, '*', J$.R(129, 'a', a, 0), J$.R(137, 'b', b, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161), x, 3));
            var z = J$.X1(273, J$.W(265, 'z', J$.F(257, J$.R(233, 'x', x, 1), 0)(J$.T(241, 4, 22, false), J$.T(249, 3, 22, false)), z, 3));
        } catch (J$e) {
            J$.Ex(337, J$e);
        } finally {
            if (J$.Sr(345)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
