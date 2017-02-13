J$.iids = {"9":[1,9,1,11],"10":[5,10,5,18],"17":[1,9,1,11],"18":[21,11,21,18],"25":[1,9,1,11],"33":[5,10,5,11],"41":[5,14,5,18],"49":[5,10,5,18],"57":[5,3,5,19],"65":[4,2,6,3],"73":[4,2,6,3],"81":[4,2,6,3],"89":[7,2,7,3],"97":[7,4,7,5],"105":[7,2,7,6],"113":[7,2,7,7],"121":[3,1,8,2],"129":[3,1,8,2],"137":[3,1,8,2],"145":[4,2,6,3],"153":[3,1,8,2],"161":[10,1,10,15],"169":[10,1,10,15],"177":[11,1,11,2],"185":[11,1,11,4],"193":[11,1,11,5],"201":[14,10,14,11],"209":[14,10,14,11],"217":[14,10,14,11],"225":[17,11,17,12],"233":[17,11,17,12],"241":[17,11,17,12],"249":[18,13,18,18],"257":[18,13,18,18],"265":[18,13,18,18],"273":[21,11,21,12],"281":[21,15,21,18],"289":[21,11,21,18],"297":[21,4,21,19],"305":[20,3,22,4],"313":[20,3,22,4],"321":[20,3,22,4],"329":[23,3,23,4],"337":[23,5,23,8],"345":[23,3,23,9],"353":[23,3,23,10],"361":[16,2,24,3],"369":[16,2,24,3],"377":[16,2,24,3],"385":[16,2,24,3],"393":[16,2,24,3],"401":[20,3,22,4],"409":[16,2,24,3],"417":[25,2,25,3],"425":[25,4,25,5],"433":[25,2,25,6],"441":[25,2,25,7],"449":[28,10,28,11],"457":[28,10,28,11],"465":[28,3,28,12],"473":[27,2,29,3],"481":[27,2,29,3],"489":[30,2,30,3],"497":[30,2,30,5],"505":[30,2,30,6],"513":[13,1,31,2],"521":[13,1,31,2],"529":[13,1,31,2],"537":[13,1,31,2],"545":[16,2,24,3],"553":[13,1,31,2],"561":[27,2,29,3],"569":[13,1,31,2],"577":[33,1,33,2],"585":[33,3,33,4],"593":[33,1,33,5],"601":[33,1,33,6],"609":[34,1,34,2],"617":[34,3,34,4],"625":[34,1,34,5],"633":[34,1,34,6],"641":[1,1,35,1],"649":[1,1,35,1],"657":[3,1,8,2],"665":[1,1,35,1],"673":[10,1,10,15],"681":[1,1,35,1],"689":[13,1,31,2],"697":[1,1,35,1],"705":[4,2,6,3],"713":[4,2,6,3],"721":[3,1,8,2],"729":[3,1,8,2],"737":[10,1,10,15],"745":[10,1,10,15],"753":[20,3,22,4],"761":[20,3,22,4],"769":[16,2,24,3],"777":[16,2,24,3],"785":[27,2,29,3],"793":[27,2,29,3],"801":[13,1,31,2],"809":[13,1,31,2],"817":[1,1,35,1],"825":[1,1,35,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk3.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk3_jalangi_.js","code":"var x = 23;\n\nfunction f(a) {\n\tfunction g(step) {\n\t\treturn x + step;\n\t}\n\tg(a);\n}\n\nfunction g(){}\ng();\n\nfunction t(a) {\n\tvar c = 3;\n\n\tfunction s(viu) {\n\t\tvar z = 5;\n\t\tvar str = 'abc';\n\n\t\tfunction r(ert) {\n\t\t\treturn x + ert;\n\t\t}\n\t\tr(viu);\n\t}\n\ts(a);\n\n\tfunction p(){\n\t\treturn 3;\n\t}\n\tp();\n}\n\nf(1);\nt(2);\n"};
jalangiLabel7:
    while (true) {
        try {
            J$.Se(641, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk3_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk3.js');
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
                                            J$.Ex(705, J$e);
                                        } finally {
                                            if (J$.Fr(713))
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
                            J$.Ex(721, J$e);
                        } finally {
                            if (J$.Fr(729))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function g() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(737, J$e);
                        } finally {
                            if (J$.Fr(745))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function t(a) {
                jalangiLabel6:
                    while (true) {
                        try {
                            J$.Fe(513, arguments.callee, this, arguments);
                            function s(viu) {
                                jalangiLabel4:
                                    while (true) {
                                        try {
                                            J$.Fe(361, arguments.callee, this, arguments);
                                            function r(ert) {
                                                jalangiLabel3:
                                                    while (true) {
                                                        try {
                                                            J$.Fe(305, arguments.callee, this, arguments);
                                                            arguments = J$.N(313, 'arguments', arguments, 4);
                                                            ert = J$.N(321, 'ert', ert, 4);
                                                            return J$.X1(297, J$.Rt(289, J$.B(18, '+', J$.R(273, 'x', x, 1), J$.R(281, 'ert', ert, 0), 0)));
                                                        } catch (J$e) {
                                                            J$.Ex(753, J$e);
                                                        } finally {
                                                            if (J$.Fr(761))
                                                                continue jalangiLabel3;
                                                            else
                                                                return J$.Ra();
                                                        }
                                                    }
                                            }
                                            arguments = J$.N(369, 'arguments', arguments, 4);
                                            viu = J$.N(377, 'viu', viu, 4);
                                            J$.N(385, 'z', z, 0);
                                            J$.N(393, 'str', str, 0);
                                            r = J$.N(409, 'r', J$.T(401, r, 12, false, 305), 0);
                                            var z = J$.X1(241, J$.W(233, 'z', J$.T(225, 5, 22, false), z, 1));
                                            var str = J$.X1(265, J$.W(257, 'str', J$.T(249, 'abc', 21, false), str, 1));
                                            J$.X1(353, J$.F(345, J$.R(329, 'r', r, 0), 0)(J$.R(337, 'viu', viu, 0)));
                                        } catch (J$e) {
                                            J$.Ex(769, J$e);
                                        } finally {
                                            if (J$.Fr(777))
                                                continue jalangiLabel4;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function p() {
                                jalangiLabel5:
                                    while (true) {
                                        try {
                                            J$.Fe(473, arguments.callee, this, arguments);
                                            arguments = J$.N(481, 'arguments', arguments, 4);
                                            return J$.X1(465, J$.Rt(457, J$.T(449, 3, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(785, J$e);
                                        } finally {
                                            if (J$.Fr(793))
                                                continue jalangiLabel5;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(521, 'arguments', arguments, 4);
                            a = J$.N(529, 'a', a, 4);
                            J$.N(537, 'c', c, 0);
                            s = J$.N(553, 's', J$.T(545, s, 12, false, 361), 0);
                            p = J$.N(569, 'p', J$.T(561, p, 12, false, 473), 0);
                            var c = J$.X1(217, J$.W(209, 'c', J$.T(201, 3, 22, false), c, 1));
                            J$.X1(441, J$.F(433, J$.R(417, 's', s, 0), 0)(J$.R(425, 'a', a, 0)));
                            J$.X1(505, J$.F(497, J$.R(489, 'p', p, 0), 0)());
                        } catch (J$e) {
                            J$.Ex(801, J$e);
                        } finally {
                            if (J$.Fr(809))
                                continue jalangiLabel6;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(649, 'x', x, 0);
            f = J$.N(665, 'f', J$.T(657, f, 12, false, 121), 0);
            g = J$.N(681, 'g', J$.T(673, g, 12, false, 161), 0);
            t = J$.N(697, 't', J$.T(689, t, 12, false, 513), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(193, J$.F(185, J$.R(177, 'g', g, 1), 0)());
            J$.X1(601, J$.F(593, J$.R(577, 'f', f, 1), 0)(J$.T(585, 1, 22, false)));
            J$.X1(633, J$.F(625, J$.R(609, 't', t, 1), 0)(J$.T(617, 2, 22, false)));
        } catch (J$e) {
            J$.Ex(817, J$e);
        } finally {
            if (J$.Sr(825)) {
                J$.L();
                continue jalangiLabel7;
            } else {
                J$.L();
                break jalangiLabel7;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
