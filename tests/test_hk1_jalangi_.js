J$.iids = {"9":[1,9,1,11],"10":[4,9,4,17],"17":[1,9,1,11],"25":[1,9,1,11],"33":[4,9,4,10],"41":[4,13,4,17],"49":[4,9,4,17],"57":[4,2,4,18],"65":[3,1,5,2],"73":[3,1,5,2],"81":[3,1,5,2],"89":[8,2,8,3],"97":[8,4,8,5],"105":[8,2,8,6],"113":[8,2,8,7],"121":[7,1,9,2],"129":[7,1,9,2],"137":[7,1,9,2],"145":[11,1,11,2],"153":[11,3,11,4],"161":[11,1,11,5],"169":[11,1,11,6],"177":[1,1,12,1],"185":[1,1,12,1],"193":[3,1,5,2],"201":[1,1,12,1],"209":[7,1,9,2],"217":[1,1,12,1],"225":[3,1,5,2],"233":[3,1,5,2],"241":[7,1,9,2],"249":[7,1,9,2],"257":[1,1,12,1],"265":[1,1,12,1],"nBranches":0,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk1.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk1_jalangi_.js","code":"var x = 23;\n\nfunction g(step) {\n return x + step;\n}\n\nfunction f(a) {\n g(a);\n}\n\nf(1);\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(177, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk1_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk1.js');
            function g(step) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(65, arguments.callee, this, arguments);
                            arguments = J$.N(73, 'arguments', arguments, 4);
                            step = J$.N(81, 'step', step, 4);
                            return J$.X1(57, J$.Rt(49, J$.B(10, '+', J$.R(33, 'x', x, 1), J$.R(41, 'step', step, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(225, J$e);
                        } finally {
                            if (J$.Fr(233))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function f(a) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            a = J$.N(137, 'a', a, 4);
                            J$.X1(113, J$.F(105, J$.R(89, 'g', g, 1), 0)(J$.R(97, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(241, J$e);
                        } finally {
                            if (J$.Fr(249))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(185, 'x', x, 0);
            g = J$.N(201, 'g', J$.T(193, g, 12, false, 65), 0);
            f = J$.N(217, 'f', J$.T(209, f, 12, false, 121), 0);
            var x = J$.X1(25, J$.W(17, 'x', J$.T(9, 23, 22, false), x, 3));
            J$.X1(169, J$.F(161, J$.R(145, 'f', f, 1), 0)(J$.T(153, 1, 22, false)));
        } catch (J$e) {
            J$.Ex(257, J$e);
        } finally {
            if (J$.Sr(265)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
