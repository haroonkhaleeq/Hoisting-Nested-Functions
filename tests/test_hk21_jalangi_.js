J$.iids = {"9":[1,9,1,11],"10":[12,10,12,18],"17":[1,9,1,11],"18":[12,10,12,24],"25":[1,9,1,11],"33":[4,10,4,11],"41":[4,10,4,11],"49":[4,10,4,11],"57":[5,2,5,3],"65":[5,8,5,9],"73":[5,2,5,9],"81":[5,2,5,10],"89":[12,10,12,11],"97":[12,14,12,18],"105":[12,21,12,22],"113":[12,21,12,24],"121":[12,10,12,24],"129":[12,3,12,25],"137":[11,2,13,3],"145":[11,2,13,3],"153":[11,2,13,3],"161":[14,2,14,3],"169":[14,4,14,5],"177":[14,2,14,6],"185":[14,2,14,7],"193":[3,1,15,2],"201":[3,1,15,2],"209":[3,1,15,2],"217":[3,1,15,2],"225":[11,2,13,3],"233":[3,1,15,2],"241":[17,1,17,2],"249":[17,3,17,4],"257":[17,1,17,5],"265":[17,1,17,6],"273":[1,1,18,1],"281":[1,1,18,1],"289":[3,1,15,2],"297":[1,1,18,1],"305":[11,2,13,3],"313":[11,2,13,3],"321":[3,1,15,2],"329":[3,1,15,2],"337":[1,1,18,1],"345":[1,1,18,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21_jalangi_.js","code":"var x = 23;\n\nfunction f(a) {\n\tvar b = 2;\n\tb.a = 4;\n\n\t// Doesn't cover this scenario\n\t//var c = 5;\n\t//c.a = 4;\n\n\tfunction g(step) {\n\t\treturn x + step + b.a;\n\t}\n\tg(a);\n}\n\nf(1);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(273, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk21.js');
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
                                            return J$.X1(129, J$.Rt(121, J$.B(18, '+', J$.B(10, '+', J$.R(89, 'x', x, 1), J$.R(97, 'step', step, 0), 0), J$.G(113, J$.R(105, 'b', b, 0), 'a', 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(305, J$e);
                                        } finally {
                                            if (J$.Fr(313))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(201, 'arguments', arguments, 4);
                            a = J$.N(209, 'a', a, 4);
                            J$.N(217, 'b', b, 0);
                            g = J$.N(233, 'g', J$.T(225, g, 12, false, 137), 0);
                            var b = J$.X1(49, J$.W(41, 'b', J$.T(33, 2, 22, false), b, 1));
                            J$.X1(81, J$.P(73, J$.R(57, 'b', b, 0), 'a', J$.T(65, 4, 22, false), 0));
                            J$.X1(185, J$.F(177, J$.R(161, 'g', g, 0), 0)(J$.R(169, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(321, J$e);
                        } finally {
                            if (J$.Fr(329))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(281, 'x', x, 0);
            f = J$.N(297, 'f', J$.T(289, f, 12, false, 193), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(265, J$.F(257, J$.R(241, 'f', f, 1), 0)(J$.T(249, 1, 22, false)));
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
