module.exports = {
    "/card/v1/getShareUrl": function (req, res) {

        console.log(req.body)
        var result = {
            "code": 0,
            "data": {
                "shareUrl": "www.baidu.com" //邀请码
            },
            "message": "string",
            "module": "string"
        }

        res.json(result);
    }
    
}
