"use strict";
$(document).ready(function() {
    function t(t, e, a) {
        function n(t, e) {
            var a = [];
            parseInt(Math.random() * t),
            i(e),
            o(e);
            return e.forEach(function(e) {
                var n, o = parseInt((Math.random() - .5) * t);
                (n = o + e) > 0 ? a.push(n) : a.push(e - o)
            }),
            e = a
        }
        function o(t) {
            var e = -1
              , a = -1;
            return t.forEach(function(t, n) {
                t > a && (a = t,
                e = n)
            }),
            e
        }
        function i(t) {
            var e = -1
              , a = 101;
            return t.forEach(function(t, n) {
                t < a && (a = t,
                e = n)
            }),
            e
        }
        var r = echarts.init(document.getElementById(t), "dark");
        $.get("data/" + t + ".json", function(t) {
            t.data.sort(function(t, e) {
                return t[1][0] + t[1][1] - (e[1][0] + e[1][1])
            });
            var o = {
                title: {
                    text: t.title,
                    top: 0,
                    left: "center",
                    textStyle: {
                        fontSize: 15
                    }
                },
                legend: {
                    data: t.legend,
                    bottom: 40,
                    right: 0
                },
                grid: {
                    left: "2%",
                    top: "8%",
                    right: "2%",
                    bottom: "15%",
                    containLabel: !0
                },
                xAxis: [{
                    type: "value"
                }],
                yAxis: [{
                    type: "category",
                    axisTick: {
                        show: !1
                    },
                    data: t.data.map(function(t) {
                        return t[0]
                    })
                }],
                series: [{
                    name: t.legend[0],
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: !0,
                            position: "inside"
                        }
                    },
                    data: t.data.map(function(t) {
                        return t[1][0]
                    }),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset: 0,
                                color: "#178df4"
                            }, {
                                offset: 1,
                                color: "#54d8de"
                            }])
                        }
                    }
                }, {
                    name: t.legend[1],
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: !0,
                            position: "inside"
                        }
                    },
                    data: t.data.map(function(t) {
                        return t[1][1]
                    }),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset: 0,
                                color: "#54d8de"
                            }, {
                                offset: 1,
                                color: "#ed6c40"
                            }])
                        }
                    }
                }]
            };
            r.setOption(o),
            setInterval(function() {
                t.data.forEach(function(t, e) {
                    t[1] = n(a, t[1])
                }),
                t.data.sort(function(t, e) {
                    return t[1][0] + t[1][1] - (e[1][0] + e[1][1])
                });
                for (var e = 0; e < 2; e++)
                    o.series[e].data = t.data.map(function(t) {
                        return t[1][e]
                    });
                o.yAxis[0].data = t.data.map(function(t) {
                    return t[0]
                }),
                r.setOption(o, !0)
            }, e)
        }, "json")
    }
    function e(t, e, a) {
        var n = echarts.init(document.getElementById(t), "dark");
        $.get("data/" + t + ".json", function(t) {
            t.data2.sort(function(t, e) {
                return t[1] - e[1]
            });
            var o = {
                title: {
                    text: t.title,
                    top: 0,
                    left: "center",
                    textStyle: {
                        fontSize: 15
                    }
                },
                legend: {
                    data: t.legend,
                    bottom: 40,
                    right: 0
                },
                grid: {
                    left: "2%",
                    top: "8%",
                    right: "2%",
                    bottom: "15%",
                    containLabel: !0
                },
                xAxis: [{
                    type: "value"
                }],
                yAxis: [{
                    type: "category",
                    axisTick: {
                        show: !1
                    },
                    data: t.data2.map(function(t) {
                        return t[0]
                    })
                }],
                series: [{
                    name: t.legend[0],
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: !0,
                            position: "inside"
                        }
                    },
                    data: t.data2.map(function(t) {
                        return t[1]
                    }),
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset: 0,
                                color: "#178df4"
                            }, {
                                offset: 1,
                                color: "#54d8de"
                            }])
                        }
                    }
                }]
            };
            n.setOption(o),
            setInterval(function() {
                t.data2.forEach(function(t, e) {
                    t[1] += parseInt((Math.random() - .5) * a)
                }),
                t.data2.sort(function(t, e) {
                    return t[1] - e[1]
                }),
                o.yAxis[0].data = t.data2.map(function(t) {
                    return t[0]
                }),
                o.series[0].data = t.data2.map(function(t) {
                    return t[1]
                }),
                n.setOption(o, !0)
            }, e)
        }, "json")
    }
    function a(t, e, a) {
        function n(t, e, a, n) {
            var o = e
              , i = n[a];
            return a > 23 && (i = n[a - 24]),
            t.forEach(function(t) {
                t[0] === i && o.push(t)
            }),
            o
        }
        function o(t, e, a) {
            var n = []
              , o = a[e];
            return e < 0 && (o = a[23]),
            t.forEach(function(t) {
                t[0] !== o && n.push(t)
            }),
            n
        }
        function i(t, e) {
            var a = []
              , n = e + 8;
            return a = t.slice(e, n),
            n > 23 && (a = a.concat(t.slice(0, n - 24))),
            a
        }
        function r(t, e, a, n) {
            var o = []
              , i = a + 7;
            return t[n].forEach(function(t, n) {
                e[a] <= t[0] && t[0] <= e[i > 23 ? 23 : i] && o.push(t)
            }),
            i - 23 > 0 && (o = o.concat(t[n].slice(0, i - 24))),
            o
        }
        function s(t) {
            return t = t > 0 ? t : 0,
            t = t < 100 ? t : 100
        }
        var c = echarts.init(document.getElementById(t), "dark")
          , l = 0
          , d = []
          , f = [[], [], [], []];
        $.get("data/" + t + ".json", function(t) {
            for (var u = 0, m = ($.extend({}, t.data),
            0); m < 4; m++)
                f[m] = r(t.data, t.xAxisTitle, l, m);
            d = i(t.xAxisTitle, l);
            var p = {
                animationEasing: "linear",
                animationDurationUpdate: e + 3e3,
                title: {
                    text: t.title,
                    top: 0,
                    left: "center",
                    textStyle: {
                        fontSize: 15
                    }
                },
                legend: {
                    data: t.legend,
                    top: 10,
                    right: "5%"
                },
                grid: {
                    left: "5%",
                    top: "5%",
                    right: "5%",
                    bottom: "5%",
                    containLabel: !0
                },
                xAxis: {
                    splitLine: {
                        lineStyle: {
                            type: "dotted"
                        },
                        interval: 0
                    },
                    type: "category",
                    data: d,
                    axisLabel: {
                        interval: 0
                    }
                },
                yAxis: {
                    splitLine: {
                        lineStyle: {
                            type: "dotted"
                        }
                    },
                    min: 0,
                    max: 120,
                    scale: !0
                },
                series: [{
                    name: t.legend[0],
                    data: f[0],
                    type: "scatter",
                    symbolSize: function(t) {
                        return t[1]
                    },
                    animationEasing: "linear",
                    animationDuration: e,
                    label: {
                        normal: {
                            show: !0,
                            formatter: function(t) {
                                return t.data[2]
                            },
                            position: "right"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(.4,.3,1,[{
                                offset: 0,
                                color: "#9bd0ff"
                            }, {
                                offset: 1,
                                color: "#178df4"
                            }])
                        }
                    }
                }, {
                    name: t.legend[1],
                    data: f[1],
                    type: "scatter",
                    symbolSize: function(t) {
                        return t[1]
                    },
                    animationEasing: "linear",
                    animationDuration: e,
                    label: {
                        normal: {
                            show: !0,
                            formatter: function(t) {
                                return t.data[2]
                            },
                            position: "right"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(.4,.3,1,[{
                                offset: 0,
                                color: "#ffc8c7"
                            }, {
                                offset: 1,
                                color: "#ee5350"
                            }])
                        }
                    }
                }, {
                    name: t.legend[2],
                    data: f[2],
                    type: "scatter",
                    symbolSize: function(t) {
                        return t[1]
                    },
                    animationEasing: "linear",
                    animationDuration: e,
                    label: {
                        normal: {
                            show: !0,
                            formatter: function(t) {
                                return t.data[2]
                            },
                            position: "right"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(.4,.3,1,[{
                                offset: 0,
                                color: "#f0eadb"
                            }, {
                                offset: 1,
                                color: "#f0ca2b"
                            }])
                        }
                    }
                }, {
                    name: t.legend[3],
                    data: f[3],
                    type: "scatter",
                    symbolSize: function(t) {
                        return t[1]
                    },
                    animationEasing: "linear",
                    animationDuration: e,
                    label: {
                        normal: {
                            show: !0,
                            formatter: function(t) {
                                return t.data[2]
                            },
                            position: "right"
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(.4,.3,1,[{
                                offset: 0,
                                color: "#fff"
                            }, {
                                offset: 1,
                                color: "#54d8de"
                            }])
                        }
                    }
                }]
            };
            c.setOption(p),
            setInterval(function() {
                u++;
                for (var e = 0; e < 4; e++)
                    f[e].forEach(function(t) {
                        t[1] += parseInt((Math.random() - .5) * a),
                        t[1] = s(t[1])
                    }),
                    p.series[e].data = f[e];
                if (p.xAxis.data = d,
                c.setOption(p, !0),
                4 == u) {
                    u = 0,
                    l++,
                    24 == l && (l = 0);
                    for (var e = 0; e < 4; e++)
                        f[e] = o(f[e], l - 1, t.xAxisTitle),
                        f[e] = n(t.data[e], f[e], l + 7, t.xAxisTitle),
                        p.series[e].data = f[e];
                    d = i(t.xAxisTitle, l),
                    p.xAxis.data = d,
                    c.setOption(p, !0)
                }
            }, e)
        }, "json")
    }
    function n(t, e, a) {
        var n = echarts.init(document.getElementById(t), "dark");
        $.get("data/" + t + ".json", function(t) {
            console.log(t);
            var o = {
                title: {
                    text: t.title,
                    top: 0,
                    left: "center",
                    textStyle: {
                        fontSize: 15
                    }
                },
                legend: {
                    data: t.legend,
                    bottom: 0,
                    right: 0
                },
                series: [{
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: !1,
                    label: {
                        normal: {
                            show: !1,
                            position: "center"
                        },
                        emphasis: {
                            show: !0,
                            textStyle: {
                                fontSize: "30",
                                fontWeight: "bold"
                            }
                        }
                    },
                    data: t.data[0]
                }]
            };
            n.setOption(o),
            setInterval(function() {
                o.series[0].data[0].value;
                o.series[0].data[0].value += (Math.random() - .5) * a,
                o.series[0].data[0].value > 100 && (o.series[0].data[0].value = 75),
                o.series[0].data[0].value < 0 && (o.series[0].data[0].value = 25),
                o.series[0].data[1].value = 100 - o.series[0].data[0].value,
                n.setOption(o, !0)
            }, e)
        }, "json")
    }
    a("chart-hot-topic-timeline", 1500, 20),
    t("chart-hot-topic-today", 1500, 10),
    e("chart-hot-topic-week", 5e3, 20),
    e("chart-hot-topic-month", 5e3, 20),
    n("chart-hot-topic-today-emotion", 2e3, 5),
    n("chart-hot-topic-week-emotion", 2e3, 5),
    n("chart-hot-topic-month-emotion", 2e3, 5)
});
