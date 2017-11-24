var data02 = {
    title: {
        text: '上海今日热门话题top 10',
        top: 20,
        left: 'center',
        textStyle: {
            fontSize: 15
        }
    },
    legend: {
        data: [
            '正面',
            '负面'
        ],
        bottom: 0,
        right: 0
    },
    grid: {
        left: '2%',
        top: '17%',
        right: '2%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value'
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: [
                '男子开车当街抢女学生',
                '老太沉迷保健讲座',
                '朝鲜提议南北统一大会',
                '网吧玩手机触电身亡',
                '一元车费引纠纷',
                '司机开车遇到碰瓷怎么办',
                '安徽卫视我们的法则',
                '胡歌孙俪夺最佳男女主角',
                '男子闹市绑架朋友',
                '足球女神网络爆红'
            ]
        }
    ],
    series: [
        {
            name: '正面',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [
                100,
                101,
                105,
                110,
                110,
                115,
                100,
                130,
                135,
                150
            ],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#178df4'
                            },
                            {
                                offset: 1,
                                color: '#54d8de'
                            }
                        ]
                    }
                }
            }
        },
        {
            name: '负面',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [
                35,
                50,
                60,
                62,
                74,
                70,
                89,
                68,
                65,
                80
            ],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#54d8de'
                            },
                            {
                                offset: 1,
                                color: '#ed6c40'
                            }
                        ]
                    }
                }
            }
        }
    ]
}