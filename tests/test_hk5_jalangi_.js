J$.iids = {"9":[5,9,5,11],"10":[10,10,10,15],"17":[5,9,5,11],"18":[10,10,10,22],"25":[5,9,5,11],"33":[9,11,9,12],"41":[9,11,9,12],"49":[9,11,9,12],"57":[10,10,10,11],"65":[10,14,10,15],"73":[10,18,10,22],"81":[10,10,10,22],"89":[10,3,10,23],"97":[8,2,11,3],"105":[8,2,11,3],"113":[8,2,11,3],"121":[8,2,11,3],"129":[12,2,12,3],"137":[12,4,12,5],"145":[12,2,12,6],"153":[12,2,12,7],"161":[13,10,13,11],"169":[13,10,13,11],"177":[13,10,13,11],"185":[7,1,15,2],"193":[7,1,15,2],"201":[7,1,15,2],"209":[8,2,11,3],"217":[7,1,15,2],"225":[7,1,15,2],"233":[17,1,17,2],"241":[17,3,17,4],"249":[17,1,17,5],"257":[17,1,17,6],"265":[1,1,17,6],"273":[1,1,17,6],"281":[7,1,15,2],"289":[1,1,17,6],"297":[8,2,11,3],"305":[8,2,11,3],"313":[7,1,15,2],"321":[7,1,15,2],"329":[1,1,17,6],"337":[1,1,17,6],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk5.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk5_jalangi_.js","code":"/**\n* Example test case: Parent variable used after nested child function\n*/\n\nvar x = 23;\n\nfunction f(a) {\n\tfunction g(step) {\n\t\tvar z = y;\n\t\treturn x + y + step;\n\t}\n\tg(a);\n\tvar y = x;\n\n}\n\nf(1);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(265, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk5_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk5.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(185, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(97, arguments.callee, this, arguments);
                                            arguments = J$.N(105, 'arguments', arguments, 4);
                                            step = J$.N(113, 'step', step, 4);
                                            J$.N(121, 'z', z, 0);
                                            var z = J$.X1(49, J$.W(41, 'z', J$.R(33, 'y', y, 0), z, 1));
                                            return J$.X1(89, J$.Rt(81, J$.B(18, '+', J$.B(10, '+', J$.R(57, 'x', x, 1), J$.R(65, 'y', y, 0), 0), J$.R(73, 'step', step, 0), 0)));
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
                            g = J$.N(217, 'g', J$.T(209, g, 12, false, 97), 0);
                            J$.N(225, 'y', y, 0);
                            J$.X1(153, J$.F(145, J$.R(129, 'g', g, 0), 0)(J$.R(137, 'a', a, 0)));
                            var y = J$.X1(177, J$.W(169, 'y', J$.R(161, 'x', x, 1), y, 1));
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
