J$.iids = {"9":[1,9,1,11],"10":[7,10,7,18],"17":[1,9,1,11],"18":[7,10,7,24],"25":[1,9,1,11],"33":[2,1,2,2],"41":[2,7,2,9],"49":[2,1,2,9],"57":[2,1,2,10],"65":[5,10,5,11],"73":[5,10,5,11],"81":[5,10,5,11],"89":[7,10,7,11],"97":[7,14,7,18],"105":[7,21,7,22],"113":[7,21,7,24],"121":[7,10,7,24],"129":[7,3,7,25],"137":[6,2,8,3],"145":[6,2,8,3],"153":[6,2,8,3],"161":[9,2,9,3],"169":[9,4,9,5],"177":[9,2,9,6],"185":[9,2,9,7],"193":[4,1,10,2],"201":[4,1,10,2],"209":[4,1,10,2],"217":[6,2,8,3],"225":[4,1,10,2],"233":[12,1,12,2],"241":[12,3,12,4],"249":[12,1,12,5],"257":[12,1,12,6],"265":[1,1,12,6],"273":[1,1,12,6],"281":[4,1,10,2],"289":[1,1,12,6],"297":[6,2,8,3],"305":[6,2,8,3],"313":[4,1,10,2],"321":[4,1,10,2],"329":[1,1,12,6],"337":[1,1,12,6],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2_jalangi_.js","code":"var x = 23;\nx.a = 43;\n\nfunction f(a) {\n\tvar a = 3;\n\tfunction g(step) {\n\t\treturn x + step + x.a;\n\t}\n\tg(a);\n}\n\nf(1);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(265, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(193, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(137, arguments.callee, this, arguments);
                                            arguments = J$.N(145, 'arguments', arguments, 4);
                                            step = J$.N(153, 'step', step, 4);
                                            return J$.X1(129, J$.Rt(121, J$.B(18, '+', J$.B(10, '+', J$.R(89, 'x', x, 1), J$.R(97, 'step', step, 0), 0), J$.G(113, J$.R(105, 'x', x, 1), 'a', 0), 0)));
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
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            a = J$.N(209, 'a', a, 4);
                            g = J$.N(225, 'g', J$.T(217, g, 12, false, 137), 0);
                            var a = J$.X1(81, J$.W(73, 'a', J$.T(65, 3, 22, false), a, 1));
                            J$.X1(185, J$.F(177, J$.R(161, 'g', g, 0), 0)(J$.R(169, 'a', a, 0)));
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
            f = J$.N(289, 'f', J$.T(281, f, 12, false, 193), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(57, J$.P(49, J$.R(33, 'x', x, 1), 'a', J$.T(41, 43, 22, false), 0));
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
