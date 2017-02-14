J$.iids = {"9":[1,9,1,11],"10":[12,10,12,18],"17":[1,9,1,11],"18":[12,10,12,24],"25":[1,9,1,11],"33":[4,10,4,11],"41":[4,10,4,11],"49":[4,10,4,11],"57":[5,2,5,3],"65":[5,8,5,9],"73":[5,2,5,9],"81":[5,2,5,10],"89":[8,10,8,11],"97":[8,10,8,11],"105":[8,10,8,11],"113":[9,2,9,3],"121":[9,8,9,9],"129":[9,2,9,9],"137":[9,2,9,10],"145":[12,10,12,11],"153":[12,14,12,18],"161":[12,21,12,22],"169":[12,21,12,24],"177":[12,10,12,24],"185":[12,3,12,25],"193":[11,2,13,3],"201":[11,2,13,3],"209":[11,2,13,3],"217":[14,2,14,3],"225":[14,4,14,5],"233":[14,2,14,6],"241":[14,2,14,7],"249":[3,1,15,2],"257":[3,1,15,2],"265":[3,1,15,2],"273":[3,1,15,2],"281":[3,1,15,2],"289":[11,2,13,3],"297":[3,1,15,2],"305":[17,1,17,2],"313":[17,3,17,4],"321":[17,1,17,5],"329":[17,1,17,6],"337":[1,1,18,1],"345":[1,1,18,1],"353":[3,1,15,2],"361":[1,1,18,1],"369":[11,2,13,3],"377":[11,2,13,3],"385":[3,1,15,2],"393":[3,1,15,2],"401":[1,1,18,1],"409":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21_jalangi_.js","code":"var x = 23;\n\nfunction f(a) {\n\tvar b = 2;\n\tb.a = 4;\n\n\t// Doesn't cover this scenario\n\tvar c = 5;\n\tc.a = 4;\n\n\tfunction g(step) {\n\t\treturn x + step + b.a;\n\t}\n\tg(a);\n}\n\nf(1);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(337, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(249, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(193, arguments.callee, this, arguments);
                                            arguments = J$.N(201, 'arguments', arguments, 4);
                                            step = J$.N(209, 'step', step, 4);
                                            return J$.X1(185, J$.Rt(177, J$.B(18, '+', J$.B(10, '+', J$.R(145, 'x', x, 1), J$.R(153, 'step', step, 0), 0), J$.G(169, J$.R(161, 'b', b, 0), 'a', 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(369, J$e);
                                        } finally {
                                            if (J$.Fr(377))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(257, 'arguments', arguments, 4);
                            a = J$.N(265, 'a', a, 4);
                            J$.N(273, 'b', b, 0);
                            J$.N(281, 'c', c, 0);
                            g = J$.N(297, 'g', J$.T(289, g, 12, false, 193), 0);
                            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, 2, 22, false), b, 1));
                            J$.X1(81, J$.P(73, J$.R(57, 'b', b, 0), 'a', J$.T(65, 4, 22, false), 0));
                            var c = J$.X1(105, J$.W(97, 'c', J$.T(89, 5, 22, false), c, 1));
                            J$.X1(137, J$.P(129, J$.R(113, 'c', c, 0), 'a', J$.T(121, 4, 22, false), 0));
                            J$.X1(241, J$.F(233, J$.R(217, 'g', g, 0), 0)(J$.R(225, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(345, 'x', x, 0);
            f = J$.N(361, 'f', J$.T(353, f, 12, false, 249), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(329, J$.F(321, J$.R(305, 'f', f, 1), 0)(J$.T(313, 1, 22, false)));
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
