module.exports = {
    "/card/v1/cancelAccount": function (req, res) {
            var result = {
                "code": 0,
                "message": "",
                "module": ""
            }

        res.json(result);
    },
    "/card/v1/getAccount": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "card": {
                    "accountId": 0,
                    "authStatus": 0,
                    "cardName": "string",
                    "cardNo": "string",
                    "createdTime": "2018-11-29T07:47:14.695Z",
                    "firmId": 0,
                    "id": 0,
                    "lastUpdated": "2018-11-29T07:47:14.695Z",
                    "level": 0,
                    "memo": "string",
                    "status": 0,
                    "userSid": "string"
                },
                "cardName": "string",
                "cardNo": "string",
                "level": 0,
                "status": 0
            },
            "message": "string",
            "module": "string"
        }

        res.json(result);
    },
    "/credit-apply/submit-order-info": function (req, res) {
        var result = {
            "statusCode": 200,
            "code": 0,
            "data": 10,
            "message": null,
            "success": true
        }
        res.json(result);
    },
    "/account/query/v1/getLoanAccount": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "availableQuota": 400, //可用额度
                "enable": false, //是否有效
                "frozenQuota": 1000, // 冻结额度
                "grade": 0, //账户级别
                "loanCount": 0, // 成功贷款总笔数
                "productId": 0, // 所属贷款产品ID
                "productType": 0, // 贷款账户的产品类型
                "quota": 400, // 信用额度
                "sid": "string", // 账户唯一id
                "status": 0, // 账户状态。1：审核中；4：审核通过；5：审核拒绝
                "unSquareUpCount": 0 // 未结清还款总笔数
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    }
    
}
