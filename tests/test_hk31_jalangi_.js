J$.iids = {"9":[1,9,1,11],"10":[5,10,5,18],"17":[1,9,1,11],"18":[13,11,13,18],"25":[1,9,1,11],"33":[5,10,5,11],"41":[5,14,5,18],"49":[5,10,5,18],"57":[5,3,5,19],"65":[4,2,6,3],"73":[4,2,6,3],"81":[4,2,6,3],"89":[7,2,7,3],"97":[7,4,7,5],"105":[7,2,7,6],"113":[7,2,7,7],"121":[3,1,8,2],"129":[3,1,8,2],"137":[3,1,8,2],"145":[4,2,6,3],"153":[3,1,8,2],"161":[13,11,13,12],"169":[13,15,13,18],"177":[13,11,13,18],"185":[13,4,13,19],"193":[12,3,14,4],"201":[12,3,14,4],"209":[12,3,14,4],"217":[15,3,15,4],"225":[15,5,15,8],"233":[15,3,15,9],"241":[15,3,15,10],"249":[11,2,16,3],"257":[11,2,16,3],"265":[11,2,16,3],"273":[12,3,14,4],"281":[11,2,16,3],"289":[17,2,17,3],"297":[17,4,17,5],"305":[17,2,17,6],"313":[17,2,17,7],"321":[20,10,20,11],"329":[20,10,20,11],"337":[20,3,20,12],"345":[19,2,21,3],"353":[19,2,21,3],"361":[22,2,22,3],"369":[22,2,22,5],"377":[22,2,22,6],"385":[10,1,23,2],"393":[10,1,23,2],"401":[10,1,23,2],"409":[11,2,16,3],"417":[10,1,23,2],"425":[19,2,21,3],"433":[10,1,23,2],"441":[25,1,25,2],"449":[25,3,25,4],"457":[25,1,25,5],"465":[25,1,25,6],"473":[26,1,26,2],"481":[26,3,26,4],"489":[26,1,26,5],"497":[26,1,26,6],"505":[1,1,27,1],"513":[1,1,27,1],"521":[3,1,8,2],"529":[1,1,27,1],"537":[10,1,23,2],"545":[1,1,27,1],"553":[4,2,6,3],"561":[4,2,6,3],"569":[3,1,8,2],"577":[3,1,8,2],"585":[12,3,14,4],"593":[12,3,14,4],"601":[11,2,16,3],"609":[11,2,16,3],"617":[19,2,21,3],"625":[19,2,21,3],"633":[10,1,23,2],"641":[10,1,23,2],"649":[1,1,27,1],"657":[1,1,27,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk31.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk31_jalangi_.js","code":"var x = 23;\n\nfunction f(a) {\n\tfunction g(step) {\n\t\treturn x + step;\n\t}\n\tg(a);\n}\n\nfunction t(a) {\n\tfunction s(viu) {\n\t\tfunction r(ert) {\n\t\t\treturn x + ert;\n\t\t}\n\t\tr(viu);\n\t}\n\ts(a);\n\n\tfunction p(){\n\t\treturn 3;\n\t}\n\tp();\n}\n\nf(1);\nt(2);\n"};
jalangiLabel6:
    while (true) {
        try {
            J$.Se(505, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk31_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk31.js');
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            function g(step) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(65, arguments.callee, this, arguments);
                                            arguments = J$.N(73, 'arguments', arguments, 4);
                                            step = J$.N(81, 'step', step, 4);
                                            return J$.X1(57, J$.Rt(49, J$.B(10, '+', J$.R(33, 'x', x, 1), J$.R(41, 'step', step, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(553, J$e);
                                        } finally {
                                            if (J$.Fr(561))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            a = J$.N(137, 'a', a, 4);
                            g = J$.N(153, 'g', J$.T(145, g, 12, false, 65), 0);
                            J$.X1(113, J$.F(105, J$.R(89, 'g', g, 0), 0)(J$.R(97, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(569, J$e);
                        } finally {
                            if (J$.Fr(577))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function t(a) {
                jalangiLabel5:
                    while (true) {
                        try {
                            J$.Fe(385, arguments.callee, this, arguments);
                            function s(viu) {
                                jalangiLabel3:
                                    while (true) {
                                        try {
                                            J$.Fe(249, arguments.callee, this, arguments);
                                            function r(ert) {
                                                jalangiLabel2:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(193, arguments.callee, this, arguments);
                                                            arguments = J$.N(201, 'arguments', arguments, 4);
                                                            ert = J$.N(209, 'ert', ert, 4);
                                                            return J$.X1(185, J$.Rt(177, J$.B(18, '+', J$.R(161, 'x', x, 1), J$.R(169, 'ert', ert, 0), 0)));
                                                        } catch (J$e) {
                                                            J$.Ex(585, J$e);
                                                        } finally {
                                                            if (J$.Fr(593))
                                                                continue jalangiLabel2;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            arguments = J$.N(257, 'arguments', arguments, 4);
                                            viu = J$.N(265, 'viu', viu, 4);
                                            r = J$.N(281, 'r', J$.T(273, r, 12, false, 193), 0);
                                            J$.X1(241, J$.F(233, J$.R(217, 'r', r, 0), 0)(J$.R(225, 'viu', viu, 0)));
                                        } catch (J$e) {
                                            J$.Ex(601, J$e);
                                        } finally {
                                            if (J$.Fr(609))
                                                continue jalangiLabel3;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function p() {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(345, arguments.callee, this, arguments);
                                            arguments = J$.N(353, 'arguments', arguments, 4);
                                            return J$.X1(337, J$.Rt(329, J$.T(321, 3, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(617, J$e);
                                        } finally {
                                            if (J$.Fr(625))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(393, 'arguments', arguments, 4);
                            a = J$.N(401, 'a', a, 4);
                            s = J$.N(417, 's', J$.T(409, s, 12, false, 249), 0);
                            p = J$.N(433, 'p', J$.T(425, p, 12, false, 345), 0);
                            J$.X1(313, J$.F(305, J$.R(289, 's', s, 0), 0)(J$.R(297, 'a', a, 0)));
                            J$.X1(377, J$.F(369, J$.R(361, 'p', p, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(633, J$e);
                        } finally {
                            if (J$.Fr(641))
                                continue jalangiLabel5;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(513, 'x', x, 0);
            f = J$.N(529, 'f', J$.T(521, f, 12, false, 121), 0);
            t = J$.N(545, 't', J$.T(537, t, 12, false, 385), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(465, J$.F(457, J$.R(441, 'f', f, 1), 0)(J$.T(449, 1, 22, false)));
            J$.X1(497, J$.F(489, J$.R(473, 't', t, 1), 0)(J$.T(481, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(649, J$e);
        } finally {
            if (J$.Sr(657)) {
                J$.L();
                continue jalangiLabel6;
            } else {
                J$.L();
                break jalangiLabel6;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
