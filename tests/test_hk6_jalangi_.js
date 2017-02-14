J$.iids = {"8":[5,24,5,33],"9":[3,16,3,17],"10":[5,24,5,33],"17":[3,16,3,17],"18":[5,35,5,42],"25":[3,16,3,17],"33":[5,16,5,22],"34":[5,35,5,42],"41":[5,16,5,22],"42":[6,15,6,20],"49":[5,24,5,29],"57":[5,32,5,33],"73":[5,35,5,40],"97":[6,15,6,20],"105":[6,5,6,11],"113":[6,15,6,20],"121":[6,5,6,21],"129":[8,10,8,16],"137":[8,10,8,16],"145":[8,3,8,17],"153":[2,14,9,2],"161":[2,14,9,2],"169":[2,14,9,2],"177":[2,14,9,2],"185":[2,14,9,2],"193":[2,14,9,2],"201":[2,14,9,2],"209":[2,14,9,2],"217":[10,1,10,8],"225":[10,13,10,19],"233":[10,20,10,21],"241":[10,13,10,22],"249":[10,1,10,23],"251":[10,1,10,12],"257":[10,1,10,24],"265":[1,1,12,1],"273":[1,1,12,1],"281":[5,3,7,4],"289":[5,3,7,4],"297":[5,3,7,4],"305":[2,14,9,2],"313":[2,14,9,2],"321":[1,1,12,1],"329":[1,1,12,1],"nBranches":2,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk6.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk6_jalangi_.js","code":"\nvar factor = function(number) {\n  var result = 1;\n  var count;\n  for (count = number; count > 1; count--) {\n    result *= count;\n  }\n  return result;\n};\nconsole.log(factor(6));\n// 720\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(265, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk6_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk6.js');
            J$.N(273, 'factor', factor, 0);
            var factor = J$.X1(209, J$.W(201, 'factor', J$.T(193, function (number) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(153, arguments.callee, this, arguments);
                            arguments = J$.N(161, 'arguments', arguments, 4);
                            number = J$.N(169, 'number', number, 4);
                            J$.N(177, 'result', result, 0);
                            J$.N(185, 'count', count, 0);
                            var result = J$.X1(25, J$.W(17, 'result', J$.T(9, 1, 22, false), result, 1));
                            var count;
                            for (J$.X1(289, count = J$.W(41, 'count', J$.R(33, 'number', number, 0), count, 0)); J$.X1(281, J$.C(8, J$.B(10, '>', J$.R(49, 'count', count, 0), J$.T(57, 1, 22, false), 0))); J$.X1(297, J$.B(34, '+', count = J$.W(81, 'count', J$.B(26, '-', J$.U(18, '+', J$.R(73, 'count', count, 0)), J$.T(65, 1, 22, false), 0), count, 0), J$.T(89, 1, 22, false), 0))) {
                                J$.X1(121, result = J$.W(113, 'result', J$.B(42, '*', J$.R(105, 'result', result, 0), J$.R(97, 'count', count, 0), 0), result, 0));
                            }
                            return J$.X1(145, J$.Rt(137, J$.R(129, 'result', result, 0)));
                        } catch (J$e) {
                            J$.Ex(305, J$e);
                        } finally {
                            if (J$.Fr(313))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 153), factor, 3));
            J$.X1(257, J$.M(249, J$.R(217, 'console', console, 2), 'log', 0)(J$.F(241, J$.R(225, 'factor', factor, 1), 0)(J$.T(233, 6, 22, false))));
        } catch (J$e) {
            J$.Ex(321, J$e);
        } finally {
            if (J$.Sr(329)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
