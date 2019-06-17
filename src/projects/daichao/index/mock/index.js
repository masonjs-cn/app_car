module.exports = {
    "/card/v1/cashActivityGold": function (req, res) {
        // 现金奖励活动
        console.log(req.body)
        var result = {
            "code": 0,
            "data": {
                "award": false, // false 就是第一次获取
                "awardMoney": 0.01,
                "awardSid": "",
                "awardTime": "2018-11-30T03:19:29.550Z"
            },
            "message": "string",
            "module": "string"
        }

        res.json(result);
    },

    "/record/v1/newest5Record": function (req, res) {
         // 最新流水记录（ 5 条）

        console.log(req.body)
        
        var result = {
            "code": 0,
            "data": [{
                "content": "恭喜xx用户开通荣耀黑卡成功",
                "type": 0
            }, {
                "content": "恭喜xx用户征信洗白",
                "type": 0
            }, {
                "content": "恭喜xx用户征信洗白",
                "type": 0
            }],
            "message": "string",
            "module": "string"
        }

        res.json(result);
    },

    "/stat/v1/statOnlineUser": function (req, res) {
        // 获取在线注册人数

        console.log(req.body)

        var result = {
            "code": 0,
            "data": {
                "onlineCount": 0
            },
            "message": "string",
            "module": "string"
        }

        res.json(result);
    },

    "/product/v1/getProductConfigByParentId": function (req, res) {
        // 通过父产品获取子产品 传 3

        console.log(req.body)

        var result = {
            "code": 0,
            "data": [{
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 400,
                "quotaMin": 0,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家","购买服务","教育","旅游","装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9B8eAV5G5AAAVyoqoTVc954.png"
                },
                "status": 0,
                "termNums": [
                    7, 14
                ],
                "termUnit": 0,
                "title": "资质洗白"
            },
            {
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 2000,
                "quotaMin": 1000,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家", "购买服务", "教育", "旅游", "装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9CGiAf_loAAAhD79Zmuc235.png"
                },
                "status": 0,
                "termNums": [
                    7, 14
                ],
                "termUnit": 0,
                "title": "小金钱包"
            }, {
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 5000,
                "quotaMin": 2500,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家", "购买服务", "教育", "旅游", "装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9CJKAPf88AAAZAlsvLw0499.png"
                },
                "status": 0,
                "termNums": [
                    7,14
                ],
                "termUnit": 0,
                "title": "白领钱包"
            }, {
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 10000,
                "quotaMin": 5000,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家", "购买服务", "教育", "旅游", "装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9CLyAdSWyAAAL04sywGA574.png"
                },
                "status": 0,
                "termNums": [
                    7, 14
                ],
                "termUnit": 0,
                "title": "粉领钱包"
            }, {
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 50000,
                "quotaMin": 10000,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家", "购买服务", "教育", "旅游", "装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9COKACjfqAAAaC2l4ORI486.png"
                },
                "status": 0,
                "termNums": [
                    7, 14
                ],
                "termUnit": 0,
                "title": "金钱钱包"
            }, {
                "esignTemplateUrl": "string",
                "periodCountMax": 0,
                "periodCountMin": 0,
                "productId": 0,
                "quotaMax": 100000,
                "quotaMin": 50000,
                "quotaStep": 10,
                "showConfig": {
                    purpose: ["购买商家", "购买服务", "教育", "旅游", "装修"],
                    logo: "http://47.96.8.95/gr0preplace0up/M00/00/01/rBD8gFv9CPuAP02rAAAavTttlus581.png"
                },
                "status": 0,
                "termNums": [
                    7, 14
                ],
                "termUnit": 0,
                "title": "总裁钱包"
            }],
            "message": "string",
            "module": "string"
        }

        res.json(result);
    }
    
}
