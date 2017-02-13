J$.iids = {"9":[5,9,5,11],"10":[11,10,11,15],"17":[5,9,5,11],"18":[11,10,11,22],"25":[5,9,5,11],"33":[8,10,8,11],"41":[8,10,8,11],"49":[8,10,8,11],"57":[10,11,10,12],"65":[10,11,10,12],"73":[10,11,10,12],"81":[11,10,11,11],"89":[11,14,11,15],"97":[11,18,11,22],"105":[11,10,11,22],"113":[11,3,11,23],"121":[9,2,12,3],"129":[9,2,12,3],"137":[9,2,12,3],"145":[9,2,12,3],"153":[13,2,13,3],"161":[13,4,13,5],"169":[13,2,13,6],"177":[13,2,13,7],"185":[7,1,15,2],"193":[7,1,15,2],"201":[7,1,15,2],"209":[7,1,15,2],"217":[9,2,12,3],"225":[7,1,15,2],"233":[17,1,17,2],"241":[17,3,17,4],"249":[17,1,17,5],"257":[17,1,17,6],"265":[1,1,17,6],"273":[1,1,17,6],"281":[7,1,15,2],"289":[1,1,17,6],"297":[9,2,12,3],"305":[9,2,12,3],"313":[7,1,15,2],"321":[7,1,15,2],"329":[1,1,17,6],"337":[1,1,17,6],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk4.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk4_jalangi_.js","code":"/**\n* Example test case: Parent variable used before nested child function\n*/\n\nvar x = 23;\n\nfunction f(a) {\n\tvar y = x;\n\tfunction g(step) {\n\t\tvar z = y;\n\t\treturn x + y + step;\n\t}\n\tg(a);\n\n}\n\nf(1);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(265, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk4_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk4.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(121, arguments.callee, this, arguments);
                                            arguments = J$.N(129, 'arguments', arguments, 4);
                                            step = J$.N(137, 'step', step, 4);
                                            J$.N(145, 'z', z, 0);
                                            var z = J$.X1(73, J$.W(65, 'z', J$.R(57, 'y', y, 0), z, 1));
                                            return J$.X1(113, J$.Rt(105, J$.B(18, '+', J$.B(10, '+', J$.R(81, 'x', x, 1), J$.R(89, 'y', y, 0), 0), J$.R(97, 'step', step, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(297, J$e);
                                        } finally {
                                            if (J$.Fr(305))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(193, 'arguments', arguments, 4);
                            a = J$.N(201, 'a', a, 4);
                            J$.N(209, 'y', y, 0);
                            g = J$.N(225, 'g', J$.T(217, g, 12, false, 121), 0);
                            var y = J$.X1(49, J$.W(41, 'y', J$.R(33, 'x', x, 1), y, 1));
                            J$.X1(177, J$.F(169, J$.R(153, 'g', g, 0), 0)(J$.R(161, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(313, J$e);
                        } finally {
                            if (J$.Fr(321))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(273, 'x', x, 0);
            f = J$.N(289, 'f', J$.T(281, f, 12, false, 185), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(257, J$.F(249, J$.R(233, 'f', f, 1), 0)(J$.T(241, 1, 22, false)));
        } catch (J$e) {
            J$.Ex(329, J$e);
        } finally {
            if (J$.Sr(337)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
