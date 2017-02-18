J$.iids = {"8":[12,9,12,16],"9":[7,16,7,17],"10":[7,16,7,21],"17":[7,20,7,21],"18":[10,16,10,21],"25":[7,16,7,21],"26":[12,9,12,16],"33":[7,9,7,22],"41":[6,5,8,6],"49":[6,5,8,6],"57":[6,5,8,6],"65":[10,16,10,17],"73":[10,20,10,21],"81":[10,16,10,21],"89":[10,9,10,22],"97":[9,5,11,6],"105":[9,5,11,6],"113":[9,5,11,6],"121":[12,9,12,10],"129":[12,15,12,16],"137":[13,16,13,20],"145":[13,21,13,22],"153":[13,16,13,23],"161":[13,16,13,23],"169":[13,9,13,24],"177":[15,16,15,20],"185":[15,21,15,22],"193":[15,16,15,23],"201":[15,16,15,23],"209":[15,9,15,24],"217":[5,1,17,2],"225":[5,1,17,2],"233":[5,1,17,2],"241":[5,1,17,2],"249":[6,5,8,6],"257":[5,1,17,2],"265":[9,5,11,6],"273":[5,1,17,2],"281":[21,1,21,4],"289":[21,5,21,6],"297":[21,7,21,8],"305":[21,1,21,9],"313":[21,1,21,10],"321":[22,1,22,4],"329":[22,5,22,6],"337":[22,7,22,8],"345":[22,1,22,9],"353":[22,1,22,10],"361":[25,1,25,4],"369":[25,5,25,6],"377":[25,7,25,8],"385":[25,1,25,9],"393":[25,1,25,10],"401":[1,1,29,1],"409":[5,1,17,2],"417":[1,1,29,1],"425":[6,5,8,6],"433":[6,5,8,6],"441":[9,5,11,6],"449":[9,5,11,6],"457":[12,5,16,6],"465":[5,1,17,2],"473":[5,1,17,2],"481":[1,1,29,1],"489":[1,1,29,1],"nBranches":2,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_nested_add.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_nested_add_jalangi_.js","code":"/**\n* Nested functions with different branch execution\n* There can be 3 cases: 1. Both Branch executes, 2. Only addB() executes, 3. Only add5() executes\n*/\nfunction add(a, b) {\n    function addB(x) {\n        return x + b;\n    }\n    function add5(x) {\n        return x + 5;\n    }\n    if (b === 5) {\n        return add5(a);\n    } else {\n        return addB(a);\n    }\n}\n\n\n// Case 1 :: both brach executes\nadd(3,4);\nadd(3,5);\n\n// Case 2 :: only addB executes\nadd(3,4);\n\n// Case 3 :: only add5 executes\n//add(3,5);\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(401, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_nested_add_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_nested_add.js');
            function add(a, b) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            function addB(x) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(41, arguments.callee, this, arguments);
                                            arguments = J$.N(49, 'arguments', arguments, 4);
                                            x = J$.N(57, 'x', x, 4);
                                            return J$.X1(33, J$.Rt(25, J$.B(10, '+', J$.R(9, 'x', x, 0), J$.R(17, 'b', b, 0), 0)));
                                        } catch (J$e) {
                                            J$.Ex(425, J$e);
                                        } finally {
                                            if (J$.Fr(433))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            function add5(x) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(97, arguments.callee, this, arguments);
                                            arguments = J$.N(105, 'arguments', arguments, 4);
                                            x = J$.N(113, 'x', x, 4);
                                            return J$.X1(89, J$.Rt(81, J$.B(18, '+', J$.R(65, 'x', x, 0), J$.T(73, 5, 22, false), 0)));
                                        } catch (J$e) {
                                            J$.Ex(441, J$e);
                                        } finally {
                                            if (J$.Fr(449))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            a = J$.N(233, 'a', a, 4);
                            b = J$.N(241, 'b', b, 4);
                            addB = J$.N(257, 'addB', J$.T(249, addB, 12, false, 41), 0);
                            add5 = J$.N(273, 'add5', J$.T(265, add5, 12, false, 97), 0);
                            if (J$.X1(457, J$.C(8, J$.B(26, '===', J$.R(121, 'b', b, 0), J$.T(129, 5, 22, false), 0)))) {
                                return J$.X1(169, J$.Rt(161, J$.F(153, J$.R(137, 'add5', add5, 0), 0)(J$.R(145, 'a', a, 0))));
                            } else {
                                return J$.X1(209, J$.Rt(201, J$.F(193, J$.R(177, 'addB', addB, 0), 0)(J$.R(185, 'a', a, 0))));
                            }
                        } catch (J$e) {
                            J$.Ex(465, J$e);
                        } finally {
                            if (J$.Fr(473))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            add = J$.N(417, 'add', J$.T(409, add, 12, false, 217), 0);
            J$.X1(313, J$.F(305, J$.R(281, 'add', add, 1), 0)(J$.T(289, 3, 22, false), J$.T(297, 4, 22, false)));
            J$.X1(353, J$.F(345, J$.R(321, 'add', add, 1), 0)(J$.T(329, 3, 22, false), J$.T(337, 5, 22, false)));
            J$.X1(393, J$.F(385, J$.R(361, 'add', add, 1), 0)(J$.T(369, 3, 22, false), J$.T(377, 4, 22, false)));
        } catch (J$e) {
            J$.Ex(481, J$e);
        } finally {
            if (J$.Sr(489)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
