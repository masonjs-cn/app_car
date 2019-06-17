module.exports = {
    "/card/v1/getBlackAccount": function (req, res) {
        // 现金奖励活动
        console.log(req.body)
        var result = {
            "code": 0,
            "data": {
                "cardName": "string", //姓名
                "cardNo": "1234567891234556", //卡号
                "level": 1, // 等级（ 1 - 10）
                "expirationTime": "2018-12-04T07:10:43.553Z",
                "status": 2 //（1-未激活，2-已激活，3-已退卡，4-冻结，5-注销 6.过期）
            },
            "message": "string",
            "module": "string"
        }

        res.json(result);
    }
    
    
}
