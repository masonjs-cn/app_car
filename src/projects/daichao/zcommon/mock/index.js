// const ccap = require('ccap')();
const captchapng = require('captchapng');

module.exports = {

    "/v1/generateGraphCode": function (req, res) {

        var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
        p.color(0, 0, 0, 0);
        p.color(80, 80, 80, 255);
        var img = p.getBase64();
        res.json({
            data: 0,
            base64Image: img
        })


    },
    "/kaptcha/code": function (req, res) {

        var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
        p.color(0, 0, 0, 0);
        p.color(80, 80, 80, 255);
        var img = p.getBase64();
        res.json({
            data: 0,
            base64Image: img
        })


    },
    '/v1/sendSmsCode': function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },


    "/verification/code/login": function(req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },
    '/v1/loginOrRegister': function (req, res) {
      res.json({
          code: 0,
          data: 'msg',
          message: '提示消息'
      })
    },
    "/login/register": function(req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },

    "/instuff/multi": function(req, res) {

        let moduleData = {
            "module1": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "name": "张珊",
                "idNumber": "360324198109111615",
                "idNumberLocation": "江西省九江市"
            },
            "module2": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "idNumberFacadeId": "20180908134916d9c8b0c8acaf49138498b76bd2ee3ffa",
                "idNumberReverseId": "201809081349160724bf881b994bbfa4a1dff72810c66c",
                "handheldId": "201809081349163e7775f16b9a49eda7f976addfaaf1a7",
                "idNumberFacadeUri": "http://signtest.credan.com/gr0esign0up/M00/00/02/rBD8gFuTYtyAfAr8AABr2dq2_1800.jpeg",
                "idNumberReverseUri": "http://signtest.credan.com/gr0esign0up/M02/00/02/rBD8gFuTYtyADRZHAABr2dq2_1853.jpeg",
                "handheldUri": "http://signtest.credan.com/gr0esign0up/M01/00/02/rBD8gFuTYtyAAkIqAABtTaIUJUQ63.jpeg"
            },
            "module3": {
                "applyId": 30,
                "status": 4,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "bankNumber": "62411202149317104871",
                "bankNumberLocation": "建设银行"
            },
            "module5": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "relationType": 0,
                "name": "lulili",
                "phone": "18720989090"
            },
            "module6": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "relationType": 2,
                "name": "lubin",
                "phone": "18720980989"
            },
            "module7": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "province": "东城区",
                "city": "北京市",
                "district": "北京市",
                "specificAddress": "朝阳"
            },
            "module8": {
                "applyId": 30,
                "status": 2,
                "modify": false,
                "userId": "49d4590f54e3454c926dcdc015ec89d3",
                "province": "东城区",
                "city": "北京市",
                "district": "北京市",
                "specificAddress": "朝阳"
            }
        }
        let params = req.query.instuffIds.split(',');
        let realData = {};

        params.forEach(item => {

            realData[`module${item}`] = moduleData[`module${item}`];
        })



        res.json({

            code: 0,
            data: realData,
            message: '提示信息'
        });
    }
}