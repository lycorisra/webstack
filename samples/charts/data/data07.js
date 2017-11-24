var data07 = {
    "animationEasing": "linear",
    "animationDurationUpdate": 4500,
    "title": {
        "text": "上海今日话题时间段分布",
        "top": 0,
        "left": "center",
        "textStyle": {
            "fontSize": 15
        }
    },
    "legend": {
        "data": [
            "时政",
            "社会",
            "娱乐",
            "历史"
        ],
        "top": 10,
        "right": "5%"
    },
    "grid": {
        "left": "5%",
        "top": "5%",
        "right": "5%",
        "bottom": "5%",
        "containLabel": true
    },
    "xAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            },
            "interval": 0
        },
        "type": "category",
        "data": [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00"
        ],
        "axisLabel": {
            "interval": 0
        }
    },
    "yAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            }
        },
        "min": 0,
        "max": 120,
        "scale": true
    },
    "series": [
        {
            "name": "时政",
            "data": [
                [
                    "00:00",
                    19,
                    "朴槿惠或宣布明年4月前下台"
                ],
                [
                    "04:00",
                    50,
                    "万里诞辰100周年座谈会习近平发表讲话"
                ],
                [
                    "06:00",
                    10,
                    "新华社三问险资举牌"
                ],
                [
                    "07:00",
                    54,
                    "男子卷入命案服刑22年，逼供十指留痕"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#9bd0ff"
                            },
                            {
                                "offset": 1,
                                "color": "#178df4"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "社会",
            "data": [
                [
                    "00:00",
                    45,
                    "云南一大客车与火车相撞 致9死12伤 "
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#ffc8c7"
                            },
                            {
                                "offset": 1,
                                "color": "#ee5350"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "娱乐",
            "data": [
                [
                    "02:00",
                    33,
                    "王菲演唱会天价门票被秒光"
                ],
                [
                    "05:00",
                    73,
                    "网曝《我是歌手》第五季更名"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#f0eadb"
                            },
                            {
                                "offset": 1,
                                "color": "#f0ca2b"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "历史",
            "data": [
                [
                    "01:00",
                    19,
                    "叶利钦女儿揭懦弱普京"
                ],
                [
                    "02:00",
                    75,
                    "考古之争还是利益之争"
                ],
                [
                    "03:00",
                    27,
                    "中俄密约是怎样泄密的"
                ],
                [
                    "05:00",
                    15,
                    "福建土楼领“世遗”证书"
                ],
                [
                    "06:00",
                    25,
                    "图坦卡蒙墓穴发现遭质疑"
                ],
                [
                    "07:00",
                    31,
                    "英氏家族成功奥秘"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#fff"
                            },
                            {
                                "offset": 1,
                                "color": "#54d8de"
                            }
                        ]
                    }
                }
            }
        }
    ]
}
var data071 = {
    "animationEasing": "linear",
    "animationDurationUpdate": 4500,
    "title": {
        "text": "上海今日话题时间段分布",
        "top": 0,
        "left": "center",
        "textStyle": {
            "fontSize": 15
        }
    },
    "legend": {
        "data": [
            "时政",
            "社会",
            "娱乐",
            "历史"
        ],
        "top": 10,
        "right": "5%"
    },
    "grid": {
        "left": "5%",
        "top": "5%",
        "right": "5%",
        "bottom": "5%",
        "containLabel": true
    },
    "xAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            },
            "interval": 0
        },
        "type": "category",
        "data": [
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00"
        ],
        "axisLabel": {
            "interval": 0
        }
    },
    "yAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            }
        },
        "min": 0,
        "max": 120,
        "scale": true
    },
    "series": [
        {
            "name": "时政",
            "data": [
                [
                    "17:00",
                    55,
                    "好邻居拖着“火球”冒死狂奔救众人"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#9bd0ff"
                            },
                            {
                                "offset": 1,
                                "color": "#178df4"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "社会",
            "data": [
                [
                    "11:00",
                    19,
                    "足球女神网络爆红"
                ],
                [
                    "15:00",
                    3,
                    "实拍：光鲜亮丽的“网红”"
                ],
                [
                    "16:00",
                    47,
                    "上海一商家推出”辣妹“洗车"
                ],
                [
                    "17:00",
                    66,
                    "为什么全世界最瘦的是日本人"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#ffc8c7"
                            },
                            {
                                "offset": 1,
                                "color": "#ee5350"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "娱乐",
            "data": [
                [
                    "11:00",
                    43,
                    "赵丽颖出演女儿国国王"
                ],
                [
                    "13:00",
                    52,
                    "你们的超能力男神来了"
                ],
                [
                    "14:00",
                    81,
                    "泰国最清新女性"
                ],
                [
                    "17:00",
                    28,
                    "袁成杰一条微博引粉丝狂怒"
                ],
                [
                    "18:00",
                    39,
                    "沙溢否认“妻管严”"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#f0eadb"
                            },
                            {
                                "offset": 1,
                                "color": "#f0ca2b"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "历史",
            "data": [
                [
                    "14:00",
                    68,
                    "阿Q们管理国家更糟"
                ],
                [
                    "17:00",
                    11,
                    "忽必烈灭南宋"
                ],
                [
                    "18:00",
                    17,
                    "尼赫鲁当中玩倒立"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#fff"
                            },
                            {
                                "offset": 1,
                                "color": "#54d8de"
                            }
                        ]
                    }
                }
            }
        }
    ]
}

var data072 = {
    "animationEasing": "linear",
    "animationDurationUpdate": 4500,
    "title": {
        "text": "上海今日话题时间段分布",
        "top": 0,
        "left": "center",
        "textStyle": {
            "fontSize": 15
        }
    },
    "legend": {
        "data": [
            "时政",
            "社会",
            "娱乐",
            "历史"
        ],
        "top": 10,
        "right": "5%"
    },
    "grid": {
        "left": "5%",
        "top": "5%",
        "right": "5%",
        "bottom": "5%",
        "containLabel": true
    },
    "xAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            },
            "interval": 0
        },
        "type": "category",
        "data": [
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00"
        ],
        "axisLabel": {
            "interval": 0
        }
    },
    "yAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            }
        },
        "min": 0,
        "max": 120,
        "scale": true
    },
    "series": [
        {
            "name": "时政",
            "data": [
                [
                    "17:00",
                    69,
                    "好邻居拖着“火球”冒死狂奔救众人"
                ],
                [
                    "19:00",
                    79,
                    "强化同盟关系，美防长卸任前访日"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#9bd0ff"
                            },
                            {
                                "offset": 1,
                                "color": "#178df4"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "社会",
            "data": [
                [
                    "15:00",
                    0,
                    "实拍：光鲜亮丽的“网红”"
                ],
                [
                    "16:00",
                    47,
                    "上海一商家推出”辣妹“洗车"
                ],
                [
                    "17:00",
                    61,
                    "为什么全世界最瘦的是日本人"
                ],
                [
                    "19:00",
                    8,
                    "朱之文撞到老太太被讹2万"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#ffc8c7"
                            },
                            {
                                "offset": 1,
                                "color": "#ee5350"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "娱乐",
            "data": [
                [
                    "13:00",
                    62,
                    "你们的超能力男神来了"
                ],
                [
                    "14:00",
                    69,
                    "泰国最清新女性"
                ],
                [
                    "17:00",
                    38,
                    "袁成杰一条微博引粉丝狂怒"
                ],
                [
                    "18:00",
                    38,
                    "沙溢否认“妻管严”"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#f0eadb"
                            },
                            {
                                "offset": 1,
                                "color": "#f0ca2b"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "历史",
            "data": [
                [
                    "14:00",
                    75,
                    "阿Q们管理国家更糟"
                ],
                [
                    "17:00",
                    2,
                    "忽必烈灭南宋"
                ],
                [
                    "18:00",
                    24,
                    "尼赫鲁当中玩倒立"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#fff"
                            },
                            {
                                "offset": 1,
                                "color": "#54d8de"
                            }
                        ]
                    }
                }
            }
        }
    ]
}
var data073 = {
    "animationEasing": "linear",
    "animationDurationUpdate": 4500,
    "title": {
        "text": "上海今日话题时间段分布",
        "top": 0,
        "left": "center",
        "textStyle": {
            "fontSize": 15
        }
    },
    "legend": {
        "data": [
            "时政",
            "社会",
            "娱乐",
            "历史"
        ],
        "top": 10,
        "right": "5%"
    },
    "grid": {
        "left": "5%",
        "top": "5%",
        "right": "5%",
        "bottom": "5%",
        "containLabel": true
    },
    "xAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            },
            "interval": 0
        },
        "type": "category",
        "data": [
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00"
        ],
        "axisLabel": {
            "interval": 0
        }
    },
    "yAxis": {
        "splitLine": {
            "lineStyle": {
                "type": "dotted"
            }
        },
        "min": 0,
        "max": 120,
        "scale": true
    },
    "series": [
        {
            "name": "时政",
            "data": [
                [
                    "04:00",
                    5,
                    "万里诞辰100周年座谈会习近平发表讲话"
                ],
                [
                    "06:00",
                    30,
                    "新华社三问险资举牌"
                ],
                [
                    "07:00",
                    32,
                    "男子卷入命案服刑22年，逼供十指留痕"
                ],
                [
                    "08:00",
                    33,
                    "意大利人公投逼走现总理"
                ],
                [
                    "09:00",
                    68,
                    "中国造肯尼亚“世纪铁路”建设令人瞩目"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#9bd0ff"
                            },
                            {
                                "offset": 1,
                                "color": "#178df4"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "社会",
            "data": [
                [
                    "09:00",
                    57,
                    "北方人和南方人的差异在哪里"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#ffc8c7"
                            },
                            {
                                "offset": 1,
                                "color": "#ee5350"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "娱乐",
            "data": [
                [
                    "02:00",
                    29,
                    "王菲演唱会天价门票被秒光"
                ],
                [
                    "05:00",
                    16,
                    "网曝《我是歌手》第五季更名"
                ],
                [
                    "08:00",
                    91,
                    "冯小刚王中磊手撕王思聪"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#f0eadb"
                            },
                            {
                                "offset": 1,
                                "color": "#f0ca2b"
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "历史",
            "data": [
                [
                    "02:00",
                    73,
                    "考古之争还是利益之争"
                ],
                [
                    "03:00",
                    58,
                    "中俄密约是怎样泄密的"
                ],
                [
                    "05:00",
                    85,
                    "福建土楼领“世遗”证书"
                ],
                [
                    "06:00",
                    17,
                    "图坦卡蒙墓穴发现遭质疑"
                ],
                [
                    "07:00",
                    42,
                    "英氏家族成功奥秘"
                ],
                [
                    "08:00",
                    100,
                    "英用一具尸体骗过希特勒"
                ],
                [
                    "09:00",
                    58,
                    "茅台酒生产"
                ]
            ],
            "type": "scatter",
            "animationEasing": "linear",
            "animationDuration": 1500,
            "symbolSize": function (a, b, c) {
                var value = a[1], size = value;
                value = value < 10 ? 10 : value > 80 ? 80 : value;
                return value;
            },
            "label": {
                "normal": {
                    "show": true,
                    "position": "right",
                    "formatter": function (a) {
                        return a.data[2];
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0.4,
                        "y": 0.3,
                        "r": 1,
                        "type": "radial",
                        "global": false,
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "#fff"
                            },
                            {
                                "offset": 1,
                                "color": "#54d8de"
                            }
                        ]
                    }
                }
            }
        }
    ]
}