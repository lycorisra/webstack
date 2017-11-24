var data01 =
    {
        title: {
            text: '全国热门话题',
            subtext: '',
            left: 'center',
            top: '20'
        },
        xAxis: {
            type: 'value',
            boundaryGap: [
                0,
                0.01
            ]
        },
        yAxis: {
            type: 'category',
            data: [
                '12306可选靠窗',
                '上海现50米扶梯',
                '生育水平全球最低',
                '为留员工帮找对象',
                '林俊杰网吧打游戏',
                '主播直播宜家过夜',
                '关之琳复出',
                '女民工和男工混住',
                '请愿罢免特朗普',
                '华为年终奖曝光'
            ]
        },
        grid: {
            left: '2%',
            top: '17%',
            right: '2%',
            bottom: '5%',
            containLabel: true
        },
        series: [
            {
                type: 'bar',
                data: [
                    77,
                    80,
                    88,
                    89,
                    92,
                    92,
                    93,
                    101,
                    102,
                    196
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
                                    color: '#fbc02d'
                                },
                                {
                                    offset: 1,
                                    color: '#ef5350'
                                }
                            ]
                        }
                    }
                },
                barWidth: '60%'
            }
        ]
    }