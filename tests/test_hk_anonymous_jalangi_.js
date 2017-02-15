J$.iids = {"9":[5,10,5,11],"10":[9,9,9,14],"17":[5,10,5,11],"25":[5,3,5,12],"33":[4,10,6,3],"41":[4,10,6,3],"49":[4,10,6,3],"57":[4,10,6,3],"65":[4,10,6,3],"73":[7,2,7,3],"81":[7,2,7,5],"89":[7,2,7,6],"97":[9,9,9,10],"105":[9,13,9,14],"113":[9,9,9,14],"121":[9,2,9,15],"129":[2,9,10,2],"137":[2,9,10,2],"145":[2,9,10,2],"153":[2,9,10,2],"161":[2,9,10,2],"169":[2,9,10,2],"177":[2,9,10,2],"185":[2,9,10,2],"193":[12,9,12,10],"201":[12,11,12,12],"209":[12,14,12,15],"217":[12,9,12,16],"225":[12,9,12,16],"233":[12,9,12,16],"241":[1,1,13,1],"249":[1,1,13,1],"257":[1,1,13,1],"265":[4,10,6,3],"273":[4,10,6,3],"281":[2,9,10,2],"289":[2,9,10,2],"297":[1,1,13,1],"305":[1,1,13,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_anonymous.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_anonymous_jalangi_.js","code":"\nvar x = function (a, b) {\n\n\tvar c = function(){\n\t\treturn 4;\n\t}\n\tc();\n\n\treturn a * b;\n};\n\nvar z = x(4, 3);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(241, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_anonymous_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_anonymous.js');
            J$.N(249, 'x', x, 0);
            J$.N(257, 'z', z, 0);
            var x = J$.X1(185, J$.W(177, 'x', J$.T(169, function (a, b) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(129, arguments.callee, this, arguments);
                            arguments = J$.N(137, 'arguments', arguments, 4);
                            a = J$.N(145, 'a', a, 4);
                            b = J$.N(153, 'b', b, 4);
                            J$.N(161, 'c', c, 0);
                            var c = J$.X1(65, J$.W(57, 'c', J$.T(49, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(33, arguments.callee, this, arguments);
                                            arguments = J$.N(41, 'arguments', arguments, 4);
                                            return J$.X1(25, J$.Rt(17, J$.T(9, 4, 22, false)));
                                        } catch (J$e) {
                                            J$.Ex(265, J$e);
                                        } finally {
                                            if (J$.Fr(273))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 33), c, 1));
                            J$.X1(89, J$.F(81, J$.R(73, 'c', c, 0), 0)());
                            return J$.X1(121, J$.Rt(113, J$.B(10, '*', J$.R(97, 'a', a, 0), J$.R(105, 'b', b, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(281, J$e);
                        } finally {
                            if (J$.Fr(289))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 129), x, 3));
            var z = J$.X1(233, J$.W(225, 'z', J$.F(217, J$.R(193, 'x', x, 1), 0)(J$.T(201, 4, 22, false), J$.T(209, 3, 22, false)), z, 3));
        } catch (J$e) {
            J$.Ex(297, J$e);
        } finally {
            if (J$.Sr(305)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
