$(document).ready(function () {
    function t(t) {
        $("#chart-word-cloud").jQCloud(t, {
            delayedMode: !0
        })
    }
    function a() {
        var n = s.words[Math.floor(Math.random() * (s.words.length - 0) + 0)].sort(h("weight"));
        $("#chart-word-cloud").children("*").remove(),
            t(n),
            e(n, "main"),
            e(n, "side"),
            $("#mainCanvas").tagcanvas("reload"),
            $("#sideCanvas").tagcanvas("reload"),
            o(),
            setTimeout(a, 5e3)
    }
    function e(t, a) {
        var e = "main" === a ? $("#mainCanvasList") : $("#sideCanvasList");
        e.children("*").remove();
        var n = "";
        t.map(function (t) {
            n += "<li><a " + ['href="javascript:void(0);"', 'style="font-size:' + 100 * t.weight + '"'].join(" ") + ">" + t.text + "</a></li>"
        }),
            e.append(n)
    }
    function n() {
        var t = $("#mainCanvas")
            , a = $("#sideCanvas");
        t.attr("width", .3 * window.innerWidth),
            t.attr("height", .35 * window.innerHeight),
            a.attr("width", .3 * window.innerWidth),
            a.attr("height", .35 * window.innerHeight),
            $("#mainCanvas").tagcanvas(d, "mainCanvasList"),
            $("#sideCanvas").tagcanvas(c, "sideCanvasList"),
            i()
    }
    function o() {
        r("hot-today", "today"),
            r("hot-month", "month"),
            r("hot-year", "week")
    }
    function i() {
        $.get("data/text-data.json", function (t) {
            s = t,
                a()
        }, "json")
    }
    function r(t, a) {
        var e = echarts.init(document.getElementById(t), "dark");
        switch (a) {
            case "week":
                var n = "本周最热";
                break;
            case "today":
                var n = "本日最热";
                break;
            case "month":
                var n = "本月最热"
        }
        var o = s.words[Math.floor(Math.random() * (s.words.length - 1 - 0) + 0)].sort(h("weight")).slice(0, 10)
            , i = []
            , r = [];
        o.sort(h("weight", !1)).map(function (t) {
            r.push(t.text),
                i.push(t.weight)
        });
        var d = {
            title: {
                text: n,
                subtext: ""
            },
            xAxis: {
                type: "value",
                boundaryGap: [0, .01]
            },
            yAxis: {
                type: "category",
                data: r
            },
            grid: {
                left: "2%",
                top: "8%",
                right: "2%",
                bottom: "15%",
                containLabel: !0
            },
            series: [{
                animationDelay: function (t) {
                    return 50 * t
                },
                animationEasing: "elasticOut",
                animationDelayUpdate: function (t) {
                    return 5 * t
                },
                type: "bar",
                data: i,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: f[a].start
                        }, {
                            offset: 1,
                            color: f[a].end
                        }])
                    }
                }
            }]
        };
        e.setOption(d),
            setInterval(function () {
                for (var t = 0; t < d.series[0].data.length; t++)
                    d.series[0].data[t] += Math.floor(2 * Math.random());
                e.setOption(d, !0)
            }, 5e3)
    }
    var s = []
        , d = {
            animTiming: "Linear",
            textFont: "Microsoft YaHei,Arial, Helvetica, sans-serif",
            maxSpeed: .03,
            minSpeed: .01,
            textColour: "#99ccee",
            textHeight: 20,
            outlineMethod: "colour",
            fadeIn: 800,
            outlineColour: "#039",
            outlineOffset: 0,
            depth: .1,
            minBrightness: .2,
            wheelZoom: !1,
            reverse: !1,
            shadowBlur: 2,
            shuffleTags: !0,
            shadowOffset: [1, 1],
            outlineColour: "#ffffff",
            stretchX: 1.7,
            initial: [0, .1],
            clickToFront: 1e3,
            zoom: .85
        }
        , c = $.extend(d);
    c.textColour = "#f1f1f1",
        n();
    var f = {
        today: {
            start: "#0090FF",
            end: "#4cdeff"
        },
        month: {
            start: "#1de6f0",
            end: "#a6fbff"
        },
        week: {
            start: "#fb7c4e",
            end: "#fdac8f"
        }
    }
        , h = function (t, a) {
            return function (e, n) {
                return a ? ~~(e[t] < n[t]) : ~~(e[t] > n[t])
            }
        }
});
