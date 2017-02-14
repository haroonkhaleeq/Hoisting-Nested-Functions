J$.iids = {"9":[1,9,1,11],"10":[7,10,7,18],"17":[1,9,1,11],"25":[1,9,1,11],"33":[2,1,2,2],"41":[2,7,2,9],"49":[2,1,2,9],"57":[2,1,2,10],"65":[5,10,5,11],"73":[5,10,5,11],"81":[5,10,5,11],"89":[7,10,7,11],"97":[7,14,7,18],"105":[7,10,7,18],"113":[7,3,7,19],"121":[6,2,8,3],"129":[6,2,8,3],"137":[6,2,8,3],"145":[9,2,9,3],"153":[9,4,9,5],"161":[9,2,9,6],"169":[9,2,9,7],"177":[4,1,10,2],"185":[4,1,10,2],"193":[4,1,10,2],"201":[6,2,8,3],"209":[4,1,10,2],"217":[12,1,12,2],"225":[12,3,12,4],"233":[12,1,12,5],"241":[12,1,12,6],"249":[1,1,13,1],"257":[1,1,13,1],"265":[4,1,10,2],"273":[1,1,13,1],"281":[6,2,8,3],"289":[6,2,8,3],"297":[4,1,10,2],"305":[4,1,10,2],"313":[1,1,13,1],"321":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2_jalangi_.js","code":"var x = 23;\nx.a = 43;\n\nfunction f(a) {\n\tvar a = 3;\n\tfunction g(step) {\n\t\treturn x + step;\n\t}\n\tg(a);\n}\n\nf(1);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(249, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk2.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(121, arguments.callee, this, arguments);
                                            arguments = J$.N(129, 'arguments', arguments, 4);
                                            step = J$.N(137, 'step', step, 4);
                                            return J$.X1(113, J$.Rt(105, J$.B(10, '+', J$.R(89, 'x', x, 1), J$.R(97, 'step', step, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(281, J$e);
                                        } finally {
                                            if (J$.Fr(289))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            a = J$.N(193, 'a', a, 4);
                            g = J$.N(209, 'g', J$.T(201, g, 12, false, 121), 0);
                            var a = J$.X1(81, J$.W(73, 'a', J$.T(65, 3, 22, false), a, 1));
                            J$.X1(169, J$.F(161, J$.R(145, 'g', g, 0), 0)(J$.R(153, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(257, 'x', x, 0);
            f = J$.N(273, 'f', J$.T(265, f, 12, false, 177), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(57, J$.P(49, J$.R(33, 'x', x, 1), 'a', J$.T(41, 43, 22, false), 0));
            J$.X1(241, J$.F(233, J$.R(217, 'f', f, 1), 0)(J$.T(225, 1, 22, false)));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
