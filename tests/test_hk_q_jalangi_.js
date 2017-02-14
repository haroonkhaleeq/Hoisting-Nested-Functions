J$.iids = {"8":[27,21,27,76],"9":[2,9,2,16],"17":[2,17,2,22],"25":[2,9,2,23],"33":[2,9,2,23],"41":[2,9,2,23],"49":[4,1,4,7],"57":[4,18,4,23],"65":[4,1,4,23],"73":[4,1,4,24],"81":[6,16,6,17],"89":[6,16,6,25],"91":[6,16,6,23],"97":[6,16,6,25],"105":[6,16,6,25],"113":[7,18,7,19],"121":[7,18,7,27],"123":[7,18,7,25],"129":[7,18,7,27],"137":[7,18,7,27],"145":[10,24,10,25],"153":[10,24,10,33],"155":[10,24,10,31],"161":[10,24,10,33],"169":[10,24,10,33],"177":[11,13,11,17],"185":[12,23,12,28],"193":[13,23,13,27],"201":[13,23,13,35],"209":[11,26,14,14],"217":[11,13,14,15],"219":[11,13,11,25],"225":[11,13,14,16],"233":[15,13,15,17],"241":[15,28,15,32],"249":[15,28,15,40],"257":[15,13,15,40],"265":[15,13,15,41],"273":[9,14,16,10],"281":[9,14,16,10],"289":[9,14,16,10],"297":[9,14,16,10],"305":[9,14,16,10],"313":[18,26,18,30],"321":[18,26,18,38],"329":[18,43,18,49],"337":[18,26,18,50],"339":[18,26,18,42],"345":[18,26,18,50],"353":[18,26,18,50],"361":[19,13,19,17],"369":[19,28,19,32],"377":[19,28,19,40],"385":[19,45,19,51],"393":[19,28,19,52],"395":[19,28,19,44],"401":[19,13,19,52],"409":[19,13,19,53],"417":[20,20,20,26],"425":[21,17,21,23],"433":[21,32,21,37],"441":[21,17,21,38],"443":[21,17,21,31],"449":[21,17,21,39],"457":[22,23,22,28],"465":[22,23,22,28],"473":[22,17,22,29],"481":[20,32,23,14],"489":[20,32,23,14],"497":[20,32,23,14],"505":[20,32,23,14],"513":[20,20,23,15],"515":[20,20,20,31],"521":[20,20,23,15],"529":[20,13,23,16],"537":[17,14,24,10],"545":[17,14,24,10],"553":[17,14,24,10],"561":[17,14,24,10],"569":[25,17,25,23],"577":[25,17,25,31],"585":[27,21,27,26],"593":[27,34,27,39],"601":[27,40,27,75],"609":[27,30,27,76],"617":[27,21,27,76],"625":[27,13,27,77],"633":[28,30,28,31],"641":[28,39,28,44],"649":[28,30,28,45],"651":[28,30,28,38],"657":[28,23,28,46],"665":[28,23,28,46],"673":[28,23,28,46],"681":[29,13,29,16],"689":[29,24,29,27],"697":[29,13,29,27],"705":[29,13,29,28],"713":[30,13,30,17],"721":[30,26,30,29],"729":[30,13,30,30],"731":[30,13,30,25],"737":[30,13,30,31],"745":[31,20,31,26],"753":[31,20,31,34],"761":[31,20,31,34],"769":[31,13,31,35],"777":[26,16,32,10],"785":[26,16,32,10],"793":[26,16,32,10],"801":[26,16,32,10],"809":[26,16,32,10],"817":[8,12,33,6],"825":[8,12,33,6],"833":[8,5,33,7],"841":[5,1,34,2],"849":[5,1,34,2],"857":[5,1,34,2],"865":[5,1,34,2],"873":[1,1,34,2],"881":[1,1,34,2],"889":[5,1,34,2],"897":[1,1,34,2],"905":[9,14,16,10],"913":[9,14,16,10],"921":[20,32,23,14],"929":[20,32,23,14],"937":[17,14,24,10],"945":[17,14,24,10],"953":[26,16,32,10],"961":[26,16,32,10],"969":[5,1,34,2],"977":[5,1,34,2],"985":[1,1,34,2],"993":[1,1,34,2],"nBranches":2,"originalCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_q.js","instrumentedCodeFileName":"/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_q_jalangi_.js","code":"\nvar Q = require(\"./q\");\n\nmodule.exports = Queue;\nfunction Queue() {\n    var ends = Q.defer();\n    var closed = Q.defer();\n    return {\n        put: function (value) {\n            var next = Q.defer();\n            ends.resolve({\n                head: value,\n                tail: next.promise\n            });\n            ends.resolve = next.resolve;\n        },\n        get: function () {\n            var result = ends.promise.get(\"head\");\n            ends.promise = ends.promise.get(\"tail\");\n            return result.fail(function (error) {\n                closed.resolve(error);\n                throw error;\n            });\n        },\n        closed: closed.promise,\n        close: function (error) {\n            error = error || new Error(\"Can't get value from closed queue\");\n            var end = {head: Q.reject(error)};\n            end.tail = end;\n            ends.resolve(end);\n            return closed.promise;\n        }\n    };\n}"};
jalangiLabel5:
    while (true) {
        try {
            J$.Se(873, '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_q_jalangi_.js', '/home/shooter25/Documents/Haroon/Masters DSS/4th Semester/Program Testing and Analysis/Project/Hoisting-Nested-Functions/tests/test_hk_q.js');
            function Queue() {
                jalangiLabel4:
                    while (true) {
                        try {
                            J$.Fe(841, arguments.callee, this, arguments);
                            arguments = J$.N(849, 'arguments', arguments, 4);
                            J$.N(857, 'ends', ends, 0);
                            J$.N(865, 'closed', closed, 0);
                            var ends = J$.X1(105, J$.W(97, 'ends', J$.M(89, J$.R(81, 'Q', Q, 1), 'defer', 0)(), ends, 1));
                            var closed = J$.X1(137, J$.W(129, 'closed', J$.M(121, J$.R(113, 'Q', Q, 1), 'defer', 0)(), closed, 1));
                            return J$.X1(833, J$.Rt(825, J$.T(817, {
                                put: J$.T(305, function (value) {
                                    jalangiLabel0:
                                        while (true) {
                                            try {
                                                J$.Fe(273, arguments.callee, this, arguments);
                                                arguments = J$.N(281, 'arguments', arguments, 4);
                                                value = J$.N(289, 'value', value, 4);
                                                J$.N(297, 'next', next, 0);
                                                var next = J$.X1(169, J$.W(161, 'next', J$.M(153, J$.R(145, 'Q', Q, 1), 'defer', 0)(), next, 1));
                                                J$.X1(225, J$.M(217, J$.R(177, 'ends', ends, 0), 'resolve', 0)(J$.T(209, {
                                                    head: J$.R(185, 'value', value, 0),
                                                    tail: J$.G(201, J$.R(193, 'next', next, 0), 'promise', 0)
                                                }, 11, false)));
                                                J$.X1(265, J$.P(257, J$.R(233, 'ends', ends, 0), 'resolve', J$.G(249, J$.R(241, 'next', next, 0), 'resolve', 0), 0));
                                            } catch (J$e) {
                                                J$.Ex(905, J$e);
                                            } finally {
                                                if (J$.Fr(913))
                                                    continue jalangiLabel0;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 273),
                                get: J$.T(561, function () {
                                    jalangiLabel2:
                                        while (true) {
                                            try {
                                                J$.Fe(537, arguments.callee, this, arguments);
                                                arguments = J$.N(545, 'arguments', arguments, 4);
                                                J$.N(553, 'result', result, 0);
                                                var result = J$.X1(353, J$.W(345, 'result', J$.M(337, J$.G(321, J$.R(313, 'ends', ends, 0), 'promise', 0), 'get', 0)(J$.T(329, 'head', 21, false)), result, 1));
                                                J$.X1(409, J$.P(401, J$.R(361, 'ends', ends, 0), 'promise', J$.M(393, J$.G(377, J$.R(369, 'ends', ends, 0), 'promise', 0), 'get', 0)(J$.T(385, 'tail', 21, false)), 0));
                                                return J$.X1(529, J$.Rt(521, J$.M(513, J$.R(417, 'result', result, 0), 'fail', 0)(J$.T(505, function (error) {
                                                    jalangiLabel1:
                                                        while (true) {
                                                            try {
                                                                J$.Fe(481, arguments.callee, this, arguments);
                                                                arguments = J$.N(489, 'arguments', arguments, 4);
                                                                error = J$.N(497, 'error', error, 4);
                                                                J$.X1(449, J$.M(441, J$.R(425, 'closed', closed, 0), 'resolve', 0)(J$.R(433, 'error', error, 0)));
                                                                throw J$.X1(473, J$.Th(465, J$.R(457, 'error', error, 0)));
                                                            } catch (J$e) {
                                                                J$.Ex(921, J$e);
                                                            } finally {
                                                                if (J$.Fr(929))
                                                                    continue jalangiLabel1;
                                                                else
                                                                    return J$.Ra();
                                                            }
                                                        }
                                                }, 12, false, 481))));
                                            } catch (J$e) {
                                                J$.Ex(937, J$e);
                                            } finally {
                                                if (J$.Fr(945))
                                                    continue jalangiLabel2;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 537),
                                closed: J$.G(577, J$.R(569, 'closed', closed, 0), 'promise', 0),
                                close: J$.T(809, function (error) {
                                    jalangiLabel3:
                                        while (true) {
                                            try {
                                                J$.Fe(777, arguments.callee, this, arguments);
                                                arguments = J$.N(785, 'arguments', arguments, 4);
                                                error = J$.N(793, 'error', error, 4);
                                                J$.N(801, 'end', end, 0);
                                                J$.X1(625, error = J$.W(617, 'error', J$.C(8, J$.R(585, 'error', error, 0)) ? J$._() : J$.F(609, J$.R(593, 'Error', Error, 2), 1)(J$.T(601, 'Can\'t get value from closed queue', 21, false)), error, 0));
                                                var end = J$.X1(673, J$.W(665, 'end', J$.T(657, {
                                                    head: J$.M(649, J$.R(633, 'Q', Q, 1), 'reject', 0)(J$.R(641, 'error', error, 0))
                                                }, 11, false), end, 1));
                                                J$.X1(705, J$.P(697, J$.R(681, 'end', end, 0), 'tail', J$.R(689, 'end', end, 0), 0));
                                                J$.X1(737, J$.M(729, J$.R(713, 'ends', ends, 0), 'resolve', 0)(J$.R(721, 'end', end, 0)));
                                                return J$.X1(769, J$.Rt(761, J$.G(753, J$.R(745, 'closed', closed, 0), 'promise', 0)));
                                            } catch (J$e) {
                                                J$.Ex(953, J$e);
                                            } finally {
                                                if (J$.Fr(961))
                                                    continue jalangiLabel3;
                                                else
                                                    return J$.Ra();
                                            }
                                        }
                                }, 12, false, 777)
                            }, 11, false)));
                        } catch (J$e) {
                            J$.Ex(969, J$e);
                        } finally {
                            if (J$.Fr(977))
                                continue jalangiLabel4;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(881, 'Q', Q, 0);
            Queue = J$.N(897, 'Queue', J$.T(889, Queue, 12, false, 841), 0);
            var Q = J$.X1(41, J$.W(33, 'Q', J$.F(25, J$.R(9, 'require', require, 2), 0)(J$.T(17, './q', 21, false)), Q, 3));
            J$.X1(73, J$.P(65, J$.R(49, 'module', module, 2), 'exports', J$.R(57, 'Queue', Queue, 1), 0));
        } catch (J$e) {
            J$.Ex(985, J$e);
        } finally {
            if (J$.Sr(993)) {
                J$.L();
                continue jalangiLabel5;
            } else {
                J$.L();
                break jalangiLabel5;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
