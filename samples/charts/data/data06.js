var data06 = {
    "title": {
        "text": "上海今日话题情感指数",
        "top": 0,
        "left": "center",
        "textStyle": {
            "fontSize": 15
        }
    },
    "legend": {
        "data": [
            "正面",
            "负面"
        ],
        "bottom": 0,
        "right": 0
    },
    "series": [
        {
            "type": "pie",
            "radius": [
                "50%",
                "70%"
            ],
            "avoidLabelOverlap": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": "center"
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": "30",
                        "fontWeight": "bold"
                    }
                }
            },
            "data": [
                {
                    "value": 51,
                    "name": "正面"
                },
                {
                    "value": 49,
                    "name": "负面"
                }
            ]
        }
    ]
}