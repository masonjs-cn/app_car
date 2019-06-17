module.exports = {
    "/session/v1/logout": function (req, res) {
        var result = {
            "statusCode": 200,
            "code": 0,
            "data": 10,
            "message": null,
            "success": true
        }
        res.json(result);
    },
    "/card/v1/getEnableAmount": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "money": 100
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    },
    "/card/v1/getNewAddAmountMonth": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "money": 200
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    },
    "/card/v1/getProspectAmountMonth": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "money": 200
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    }
}
