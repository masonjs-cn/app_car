module.exports = {
    "/card/v1/withdraw": function (req, res) {
        // 获取在线注册人数

        console.log(req.body)

        var result = {
            "code": 0,
            "message": "",
            "module": ""
        }

        res.json(result);
    }
    
}
