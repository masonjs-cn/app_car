module.exports = {
    "http://res.wangluodaikuankouzi.com/h5/place/app_cashloan/eshop_product/banner-list.json": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "catalog": "eshop_product",
                "list": [{
                        "img": "http://47.98.136.225/gr0preplace0up/M00/00/01/rBAlFFujmTGAIKJSAA949ZOhG5E672.png",
                        "id": 42,
                        "title": "大王贷款",
                        "url": "https://h.sinaif.com/loginCommon?codeKey=2001_s2001010100114363_CP001"
                    },
                    {
                        "img": "http://47.98.136.225/gr0preplace0up/M00/00/01/rBAlFFujmUqAFuDHAAfCRcUsepI375.png",
                        "id": 43,
                        "title": "极速现金侠",
                        "url": "http://promotion.mofangbk.com/act/light-loan-xjx-beta?invite_code=MjA3MTkxNjY=&user_from=2485&id=7&utm_source=kuaileda"
                    }
                ],
                "place": "banner-list",
                "system": "app_cashloan"
            }
        }
        res.json(result);
    },
    "http://res.wangluodaikuankouzi.com/h5/place/app_cashloan/eshop_product/all_goods.json": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "catalog": "eshop_product",
                "list": [{
                        "maxReturnMoney": "1000-10000",
                        "instructions": "提示：信用贷，带信用。请您务必按时还款，逾期未还，会影响 您的个人征信。",
                        "img": "http://47.96.8.95/gr0preplace0up/M00/00/00/rBD8gFvj_nmANrQoAAASHwAG9ow970.png",
                        "payType": "7day",
                        "id": 46,
                        "title": "日息0.04%",
                        "sid": "20181010143522"
                    },
                    {
                        "maxReturnMoney": "1000-10000",
                        "instructions": "提示：信用贷，带信用。请您务必按时还款，逾期未还，会影响 您的个人征信。",
                        "img": "http://47.96.8.95/gr0preplace0up/M00/00/00/rBD8gFvj_oOAM17HAAASHwAG9ow522.png",
                        "payType": "14day",
                        "id": 47,
                        "title": "日息0.05%",
                        "sid": "20181010151730"
                    }
                ],
                "place": "all_goods",
                "system": "app_cashloan"
            }
        }
        res.json(result);
    },
    "http://res.wangluodaikuankouzi.com/h5/place/app_cashloan/eshop_product/all_sku.json": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "catalog": "eshop_product",
                "list": [{
                        "product": 46,
                        "payMoney": "1000",
                        "subtitle": "1000",
                        "merchandiseSid": "201810101449",
                        "id": 48,
                        "merchandiseTitle": "日息0.04%——1000",
                        "priceMoney": "1000"
                    },
                    {
                        "product": 46,
                        "payMoney": "2000",
                        "subtitle": "2000",
                        "merchandiseSid": "20181108162524",
                        "id": 53,
                        "merchandiseTitle": "日息0.04%——2000",
                        "priceMoney": "2000"
                    },
                    {
                        "product": 46,
                        "payMoney": "3000",
                        "subtitle": "3000",
                        "merchandiseSid": "201810101477",
                        "id": 50,
                        "merchandiseTitle": "日息0.04%——3000",
                        "priceMoney": "3000"
                    },
                    {
                        "product": 46,
                        "payMoney": "4000",
                        "subtitle": "4000",
                        "merchandiseSid": "20181108162410",
                        "id": 51,
                        "merchandiseTitle": "日息0.04% ———— 4000",
                        "priceMoney": "4000"
                    },
                    {
                        "product": 46,
                        "payMoney": "5000",
                        "subtitle": "5000",
                        "merchandiseSid": "20181108162630",
                        "id": 52,
                        "merchandiseTitle": "日息0.04%——5000",
                        "priceMoney": "5000"
                    },
                    {
                        "product": 47,
                        "payMoney": "1000",
                        "subtitle": "1000",
                        "merchandiseSid": "20181108162711",
                        "id": 54,
                        "merchandiseTitle": "日息0.05% ———— 1000",
                        "priceMoney": "1000"
                    },
                    {
                        "product": 47,
                        "payMoney": "2000",
                        "subtitle": "2000",
                        "merchandiseSid": "201810101449",
                        "id": 49,
                        "merchandiseTitle": "日息0.05% ———— 2000",
                        "priceMoney": "2000"
                    },
                    {
                        "product": 47,
                        "payMoney": "3000",
                        "subtitle": "3000",
                        "merchandiseSid": "20181108162733",
                        "id": 55,
                        "merchandiseTitle": "日息0.05% ———— 3000",
                        "priceMoney": "3000"
                    },
                    {
                        "product": 47,
                        "payMoney": "4000",
                        "subtitle": "4000",
                        "merchandiseSid": "20181108162824",
                        "id": 56,
                        "merchandiseTitle": "日息0.05% ———— 4000",
                        "priceMoney": "4000"
                    },
                    {
                        "product": 47,
                        "payMoney": "5000",
                        "subtitle": "5000",
                        "merchandiseSid": "20181108161010",
                        "id": 57,
                        "merchandiseTitle": "日息0.05% ———— 5000",
                        "priceMoney": "5000"
                    }
                ],
                "place": "all_sku",
                "system": "app_cashloan"
            }
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
    "/cashloan/eshop/order/v1/getPayParam": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "fundAccounts": [{
                    "accountId": 501,
                    "accountType": "801"
                }]
            }
        }
        res.json(result);
    },
    "/order/v1/prepareToPay": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "orderSid": "201809141008493969",
                "preparedPayParams": null
            }
        }
        res.json(result);

    },
    "/cashloan/instuff/credit-apply/current-apply-status?productCode=cashloan&firmId=23": function (req, res) {
            var result = {
                "module": null,
                "code": 0,
                "message": null,
                "data": {
                    "applyId": null,
                    "status": null,
                    "submit": true,
                    "submitOverLimit": false
                }
            }
            res.json(result);
        }


        ,
    "/cashloan/instuff/instuff/contact-first": function (req, res) {
        // if (req.method == 'POST') {
        //     var result = {
        //         "statusCode": 200,
        //         "message": "ok",
        //         "data": {
        //             "code": 0,
        //             "message": "string"
        //         },
        //         "success": true
        //     }
        // } else {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "applyId": 276,
                "status": 2,
                "modify": true,
                "userId": "718d01219b1a4c0d8406f159eaeb22a4",
                "relationType": 0,
                "name": "pack",
                "phone": "17621515833"
            }
        }
        // }

        res.json(result);
    },
    "/cashloan/instuff/instuff/contact-second": function (req, res) {
        // if (req.method == 'POST') {
        //     var result = {
        //         "statusCode": 200,
        //         "message": "ok",
        //         "data": {
        //             "code": 0,
        //             "message": "string"
        //         },
        //         "success": true
        //     }
        // } else {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "applyId": 276,
                "status": 2,
                "modify": true,
                "userId": "718d01219b1a4c0d8406f159eaeb22a4",
                "relationType": 2,
                "name": "alice",
                "phone": "13524450558"
            }
        }

        // }

        res.json(result);
    },
    "/cashloan/instuff/credit-apply/final-submit": function (req, res) {
        var result = {
            "statusCode": 200,
            "data": {
                "code": 0,
                "message": "ok"
            },
            "success": true
        }
        res.json(result);
    },
    "/cashloan/loan/loan/v1/apply": function (req, res) {
        var result = {
            "statusCode": 200,
            "data": {
                "code": 0,
                "message": "ok"
            },
            "success": true
        }
        res.json(result);
    },
    "/cashloan/userstuff/bankcardusage/v1/list": function (req, res) {
        var result = {
            "statusCode": 200,
            "data": [{
                "certifSid": "afee8fed0edb4f98929fff204514f68c",
                "bankcard": "62411202149317104871",
                "realName": "张珊",
                "phone": "18720989358",
                "bankName": null,
                "branchBankName": null
            }],
            "success": true
        }
        res.json(result);
    },
    "/cashloan/instuff/instuff/mobile-collection": function (req, res) {
        var result = {
            "statusCode": 10555,
            "code": 0,
            "data": {
                redirectUrl: "https://tianjim.rong360.com/web_crawler/union/yunyingshang?token=f61e7d8885a96bbbd1b9c3cb8343cd9c#/"
            },
            "module": "http",
            "message": "mock版本无法提供mock数据",
        }
        res.json(result);
    },
    "/list/code": function (req, res) {
        // console.log(req.body)
        var result = {
            "code": 0,
            "data": [{
                "code": "cashloan",
                "instuffParts": [{
                        "title": "身份证照片",
                        "instuffPartId": 2,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 100
                    },
                    {
                        "title": "身份验证",
                        "instuffPartId": 1,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 95
                    }, {
                        "title": "银行卡",
                        "instuffPartId": 3,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 90
                    }, {
                        "title": "运营商验证",
                        "instuffPartId": 4,
                        "require": true,
                        "dependPartId": 1,
                        "prior": 80
                    }, {
                        "title": "第一联系人",
                        "instuffPartId": 5,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 70
                    }, {
                        "title": "第二联系人",
                        "instuffPartId": 6,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 70
                    }, {
                        "title": "公司地址",
                        "instuffPartId": 7,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 60
                    }, {
                        "title": "居住地址",
                        "instuffPartId": 8,
                        "require": true,
                        "dependPartId": 0,
                        "prior": 60
                    }, {
                        "title": "手机设备通讯录",
                        "instuffPartId": 9,
                        "require": false,
                        "dependPartId": 0,
                        "prior": 50
                    }, {
                        "title": "其他信息",
                        "instuffPartId": 10,
                        "require": false,
                        "dependPartId": 0,
                        "prior": 0
                    }
                ],
                "period": 1,
                "purposes": [{
                        "name": "日常消费",
                        "value": "1"
                    },
                    {
                        "name": "旅游",
                        "value": "2"
                    }, {
                        "name": "教育",
                        "value": "3"
                    }, {
                        "name": "医疗",
                        "value": "4"
                    }
                ],
                "quotaMax": 4000,
                "quotaMin": 1000,
                "quotaStep": 0.01,
                "status": 1,
                "termNums": [7, 14, 21],
                "termUnit": 1,
                "title": "借条贷"
            }],
            "message": null
        }
        res.json(result);
    },
    "/cashloan/instuff/instuff/multi": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "module5": {
                    "applyId": 30,
                    "status": 2,
                    "modify": false,
                    "userId": "49d4590f54e3454c926dcdc015ec89d3",
                    "relationType": 0,
                    "name": "lulili",
                    "phone": "18720989090"
                },
                "module4": {
                    "applyId": 30,
                    "status": 4,
                    "modify": false,
                    "userId": "49d4590f54e3454c926dcdc015ec89d3",
                    "mobile": "18720989358",
                    "reportId": "2018090813492543b2504fd28741d6826611f8d0a0813e"
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
                "module6": {
                    "applyId": 30,
                    "status": 2,
                    "modify": false,
                    "userId": "49d4590f54e3454c926dcdc015ec89d3",
                    "relationType": 2,
                    "name": "lubin",
                    "phone": "18720980989"
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
                },
                "module1": {
                    "applyId": 30,
                    "status": 2,
                    "modify": false,
                    "userId": "49d4590f54e3454c926dcdc015ec89d3",
                    "name": "张珊",
                    "idNumber": "360324198109111615",
                    "idNumberLocation": "江西省九江市"
                },
                "module3": {
                    "applyId": 30,
                    "status": 4,
                    "modify": false,
                    "userId": "49d4590f54e3454c926dcdc015ec89d3",
                    "bankNumber": "62411202149317104871",
                    "bankNumberLocation": "建设银行"
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
                }
            }
        }
        res.json(result);

    },

    "/cashloan/instuff/credit-apply/submit-order-info": function (req, res) {
        var result = {
            "statusCode": 200,
            "code": 0,
            "data": 10,
            "message": null,
            "success": true
        }
        res.json(result);
    },
    "/order/v1/getPayParam": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "fundAccounts": [{
                    "accountId": 501,
                    "accountType": "801"
                }]
            }
        }
        res.json(result);
    },
    "/cashloan/eshop/order/v1/prepareToPay": function (req, res) {
            var result = {
                "module": null,
                "code": 0,
                "message": null,
                "data": {
                    "orderSid": "201809141008493969",
                    "preparedPayParams": null
                }
            }
            res.json(result);

        }


        ,
    "/cashloan/loan/loan/delegate/v1/getLoanBill": function (req, res) {
        res.json({
            code: 0,
            data: '',
            message: '提示信息'
        })
    },

    "/cashloan/instuff/file/upload/image": function (req, res) {

        res.json({
            code: 0,
            data: '',
            message: '提示信息'
        })
    },

    "/cashloan/instuff/instuff/id-number": function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示信息'
        })
    },

    "/cashloan/instuff/instuff/bank-number": function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示信息'
        })
    },
    "/cashloan/instuff/instuff/id-number/picture": function (req, res) {
        res.json({

            code: 0,
            data: '',
            message: '提示信息'
        })
    },


    //订单列表
    "/v16/iou/getLoanAndRepaying": function (req, res) {

        // ==============逾期的情况 
        // 1.未逾期未还款的，显示待还款，status=6，repaystatus=1，overdueday=0。
        // 2.逾期了，就显示已逾期，status=6，repaystatus=1，overdueday>0。
        // 3.正常还款，显示已还款,status=6，repaystatus=2，overdueday=0。
        // 4.逾期还款，显示逾期已还款,status=6，repaystatus=2，overdueday>0。
        var data = [{
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 1, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 6, //状态number
                termDate: '', //还款日期string
                repayStatus: 1, //还款状态 number
                termNum: 7,
                lendTime: '1513500446000',
                loanId: 1,
                signatureUrl: "http://credan-eqb.oss-cn-hangzhou.aliyuncs.com/04756a26dd9a4700b60f5e351843363f.pdf",
                fundRepayAccountId: '504',
                repayingSid: '123',
                arriveTime: '1515427200000', //借款日期
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 2, //状态number
                termDate: '', //还款日期string
                repayStatus: 2, //还款状态 number
                termNum: 7,
                lendTime: '1513500446000',
                loanId: 12312312312312312,
                signatureUrl: "http://credan-eqb.oss-cn-hangzhou.aliyuncs.com/04756a26dd9a4700b60f5e351843363f.pdf",
                repayingSid: '123'
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 3, //状态number
                termDate: '1513500446000', //还款日期string,
                repayStatus: 1, //还款状态number(1, 未还款; 2已还款)
                termNum: 14,
                lendTime: '1513500446000', //申请日期
                arriveTime: '1515427200000', //借款日期
                loanId: 12312312312312312,
                signatureUrl: "http://credan-eqb.oss-cn-hangzhou.aliyuncs.com/6272b2adda5043109f58653f595cc99a.png",
                repayingSid: '123'
                // signatureUrl: "http://credan-eqb.oss-cn-hangzhou.aliyuncs.com/04756a26dd9a4700b60f5e351843363f.pdf"
            },

            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 4, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 1,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 3,
                signatureUrl: "http://localhost:8080/static/source/signature.pdf",
                repayingSid: '123',
                fundRepayAccountId: '504',
                delayDays: [3, 7, 14, 21]
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 5, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 1,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 4,
                signatureUrl: "http://localhost:8080/static/source/signature.pdf",
                repayingSid: '123'
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 6, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 2,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 5,
                signatureUrl: "http://localhost:8080/static/source/signature.pdf",
                repayingSid: '123'
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 12, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 1,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 6,
                signatureUrl: "",
                repayingSid: '123'
            },
            //需要还款的记录
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 13, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 1,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 7,
                signatureUrl: "",
                repayingSid: '123',
                fundRepayAccountId: '504',
                loanRepayingId: 1947211213,
                fundRepayAccounts: [{
                        id: 801, //支付账号ID
                        payGatewayType: 801 //支付类型: 微信支付801，连连支付501
                    },
                    {
                        id: 802,
                        payGatewayType: 501 //连连支付
                    }
                ]
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 6, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 1,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 7,
                signatureUrl: "",
                repayingSid: '123',
                fundRepayAccountId: '504',
                loanRepayingId: 1947211213,
                fundRepayAccounts: [{
                        id: 801, //支付账号ID
                        payGatewayType: 801 //支付类型: 微信支付801，连连支付501
                    },
                    {
                        id: 802,
                        payGatewayType: 501 //连连支付
                    }
                ],
                delayDays: [3, 7, 14, 21]
            },
            {
                interest: 56, //利息number
                lendMoney: 1000, //借款金额//number
                name: '张三', //放款人姓名string
                overdueDays: 0, //逾期天数  number
                overdueFee: 102, //逾期费number
                repayMoney: 120, //应还款金额number
                status: 16, //状态number
                termDate: '1513500446000', //还款日期string
                repayStatus: 2,
                termNum: 14,
                lendTime: '1513500446000',
                loanId: 8,
                signatureUrl: "",
                repayingSid: '123'
            },
        ]

        // data = [];

        var result = {

            code: 0,
            data: data,
            message: '提示信息'
        }

        res.json(result);
    },
    "/cashloan/eshop/order/v1/getOrderPayParams": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": [{
                    "fundAccounts": [{
                        "accountId": 501,
                        "accountType": "801"
                    }],
                    "status": 4,
                    "priceMoney": 2000,
                    "payMoney": 2000,
                    "orderSid": "201809141753288229",
                    "createdTime": 1536919573000,
                    "payByLoan": true,
                    "payOrderSid": null,
                    "merchandiseSid": "20180709154450",
                    "merchandiseTitle": "天然原色无优化东陵玉吊坠"
                },
                {
                    "fundAccounts": [{
                        "accountId": 501,
                        "accountType": "801"
                    }],
                    "status": 5,
                    "priceMoney": 2000,
                    "payMoney": 2000,
                    "orderSid": "201809141754296275",
                    "createdTime": 1536919634000,
                    "payByLoan": true,
                    "payOrderSid": null,
                    "merchandiseSid": "20180709154450",
                    "merchandiseTitle": "天然原色无优化东陵玉吊坠"
                },
                {
                    "fundAccounts": [{
                        "accountId": 501,
                        "accountType": "801"
                    }],
                    "status": 9,
                    "priceMoney": 2000,
                    "payMoney": 2000,
                    "orderSid": "201809141757019304",
                    "createdTime": 1536919786000,
                    "payByLoan": true,
                    "payOrderSid": null,
                    "merchandiseSid": "20180709154450",
                    "merchandiseTitle": "天然原色无优化东陵玉吊坠"
                }
            ]
        }

        res.json(result);
    },
    "/cashloan/loan/loan/v1/getLoanBills": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": [ {
                "loan": {
                    "id": 37866060,
                    "userName": "张珊",
                    "firmId": 1,
                    "applyTime": 1536403343000,
                    "auditingTime": 1536806210000,
                    "productId": 1,
                    "channelSid": null,
                    "userPhone": "18720989358",
                    "lenderSid": null,
                    "lenderName": null,
                    "grade": 0,
                    "userIdNum": "360324198109111615",
                    "sid": "259857dbb7eb423ea61fca98c74b732m",
                    "signatureUrl": null,
                    "signatureTime": null,
                    "productType": 1,
                    "accountId": 112260,
                    "dataFee": 0.0000,
                    "termUnit": 1,
                    "arriveTime": null,
                    "repayMoney": 2000.0000,
                    "repaidMoney": 0.0000,
                    "nextRepayDate": null,
                    "lendMoney": 2000.0000,
                    "termNum": 7,
                    "auditTime": null,
                    "openFee": 1400.0000,
                    "activityFee": 0.0000,
                    "payingTime": null,
                    "periodCount": 1,
                    "interest": 0.0000,
                    "contractTime": null,
                    "manageFee": 0.0000,
                    "merchantSid": "0",
                    "serviceFee": 0.0000,
                    "payFee": 0.0000,
                    "status": 11,
                    "periodRepayMoney": 2000.0000,
                    "nextRepayingId": 0,
                    "nextRepayingSid": null,
                    "merchandiseTitle": "天然原色无优化东陵玉吊坠",
                    "merchandiseSid": "20180709154450",
                    "repaidPeriodCount": 0,
                    "merchandiseOrderSid": "201809081347504762",
                    "lastRepaidTime": null,
                    "merchandiseOrderJson": null
                },
                "nextRepaying": null,
                "validDelayDays": [1, 3, 5],
                "validUserPayAccounts": [{
                    "accountId": 501,
                    "accountType": "801"
                }]
            }, {
                "loan": {
                    "id": 37866062,
                    "userName": "张珊",
                    "firmId": 1,
                    "applyTime": 1536919027000,
                    "auditingTime": null,
                    "productId": 1,
                    "channelSid": null,
                    "userPhone": "18720989358",
                    "lenderSid": null,
                    "lenderName": null,
                    "grade": 0,
                    "userIdNum": "360324198109111615",
                    "sid": "b44710a73e5c4319857d3e8bcf97595b",
                    "signatureUrl": null,
                    "signatureTime": null,
                    "productType": 1,
                    "accountId": 112260,
                    "dataFee": 0.0000,
                    "termUnit": 1,
                    "arriveTime": null,
                    "repayMoney": 2000.0000,
                    "repaidMoney": 0.0000,
                    "nextRepayDate": null,
                    "lendMoney": 2000.0000,
                    "termNum": 7,
                    "auditTime": null,
                    "openFee": 0.0000,
                    "activityFee": 0.0000,
                    "payingTime": null,
                    "periodCount": 1,
                    "interest": 0.0000,
                    "contractTime": null,
                    "manageFee": 0.0000,
                    "merchantSid": "0",
                    "serviceFee": 0.0000,
                    "payFee": 0.0000,
                    "status": 1,
                    "periodRepayMoney": 2000.0000,
                    "nextRepayingId": 0,
                    "nextRepayingSid": null,
                    "merchandiseTitle": "天然原色无优化东陵玉吊坠",
                    "merchandiseSid": "20180709154450",
                    "repaidPeriodCount": 0,
                    "merchandiseOrderSid": "201809141757019304",
                    "lastRepaidTime": null,
                    "merchandiseOrderJson": null
                },
                "nextRepaying": null,
                "validDelayDays": [1, 3, 5],
                "validUserPayAccounts": [{
                    "accountId": 501,
                    "accountType": "801"
                }]
            }]
        }

        res.json(result);
    },
    "/repaid/v1/prepareToDelayRepay": function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "paySid": "12313",
                "orderSid": "1231",
                "payMoney": "1231",
                "userSid": "1231",
                "sign": "12312",
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    },
    '/cashloan/loan/repaid/v1/prepareToRepayPart': function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "paySid": "12313",
                "orderSid": "1231",
                "payMoney": "1231",
                "userSid": "1231",
                "sign": "12312",
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    },
    '/repaid/v1/prepareToRepaySquareUp': function (req, res) {
        var result = {
            "code": 0,
            "data": {
                "paySid": "12313",
                "orderSid": "1231",
                "payMoney": "1231",
                "userSid": "1231",
                "sign": "12312",
            },
            "message": "string",
            "module": "string"
        }
        res.json(result);
    },
    "/cashloan/clogin/session/v1/logout": function (req, res) {
        var result = {
            "statusCode": 200,
            "code": 0,
            "data": 10,
            "message": null,
            "success": true
        }
        res.json(result);
    },


    "/h5/place/cashloan/list/listA.json": function (req, res) {

        console.log(req.body)
        var result = {
            "code": 0,
            "data": {
                "catalog": "list",
                "list": [{
                        "productImg": "http://47.98.136.225/gr0preplace0up/M00/00/00/rBAlFFs7MO-AeZQnAABZFKuIU8I05.jpeg",
                        "productStatus": "在售，支持返利",
                        "detail": "材质：人造水晶 ||||| 品牌：other/其他适用 |||||  性别 :  情侣 |||||  是否现货 : 现货 ||||| 镶嵌材质 : 未镶嵌 ||||| 成色L : 全新",
                        "productName": "天然原色无优化东陵玉吊坠",
                        "productPrice": "2000.00"
                    },
                    {
                        "productImg": "http://47.98.136.225/gr0preplace0up/M00/00/00/rBAlFFs7Ly2AZeT9AABJU9JnniE954.png",
                        "productStatus": "在售，支持返利",
                        "detail": "材质：人造水晶 ||||| 品牌：other/其他适用 |||||  性别 :  情侣 |||||  是否现货 : 现货 ||||| 镶嵌材质 : 未镶嵌 ||||| 成色L : 全新",
                        "productName": "依天然水晶东陵玉",
                        "productPrice": "1000.00"
                    },
                    {
                        "productImg": "http://47.98.136.225/gr0preplace0up/M00/00/00/rBAlFFs7Ly2AZeT9AABJU9JnniE954.png",
                        "productStatus": "nidnaiondionaiosdnioansdionaiosndionaiosdnndf;asnfoiadnsfionadsfo;nados;fnioadnsfionadiosnfiondsiofnioadsnfionadsionfionadsiofnioadnsfionadiosnfioansdiofniosadnfionaiosdfnioadnsfiondsaiofn",
                        "detail": "asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds|||||asd19189189asdgsdsdbvsdvdsvdsvdsvvds",
                        "productName": "测试过长数据  aospdmopmasdopmaopsdmopamdopamsopdopadsmopamsdopmopadmsopasdopmasopdmopamsdopamsdopmaopsmdopasmdopmaopsdmopamsdopmaopsdmopamsdopmaopsdmopasmdopmaopsdmaopsdmopamsdopmasopdmopasmdopamsdopmaopsdmopamsdopamopsdmopasdmopamsdopmaopsdmaopsd",
                        "productPrice": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999.00"
                    },
                ],
                "place": "listA",
                "system": "cashloan"
            }
        }

        res.json(result);
    },

    "/wx/v16/deferrdePayLLPay": function (req, res) {

        var result = {
            "statusCode": 5004,
            "message": "连连支付返回参数成功",
            "success": true,
            "data": {
                "acct_name": "缪志瑞",
                "app_request": "3",
                "bg_color": "36b046",
                "busi_partner": "101001",
                "dt_order": "20171103115917",
                "id_no": "320826199009133356",
                "info_order": "还款",
                "money_order": "50.01",
                "name_goods": "还款",
                "no_agree": "",
                "no_order": "369445",
                "notify_url": "http://118.190.60.163:8030/wx/LLNotifyUrl ",
                "oid_partner": "201709080000890470",
                "risk_item": {
                    "user_info_full_name": "缪志瑞",
                    "user_info_id_no": "320826199009133356",
                    "user_info_identify_type": "2",
                    "user_info_bind_phone": "13913169273",
                    "user_info_identify_state": "1",
                    "user_info_mercht_userno": "d9a6e129762142bcab29e4ec1aade185",
                    "frms_ware_category": "2010",
                    "user_info_dt_register": "20170803161349"
                },
                "sign": "QCBhR29l1mNryf/JO3QrIuniVs+hBIfZqVuP70pHikpajpRfwpVsr8Lds63jA9T9thrUDzEr8A+ymEharVh5bLg+xlwB6PjVXlQFpXesZzLnpWwFxlET/he4qoQ7kfzIXOie/cpBaty3a9m7C9WPpcNUOuN3FhsEAL6K3L9ue8c=",
                "sign_type": "RSA",
                "url_return": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa3ffa0ee90690f42&redirect_uri=http://app.credan.com/cs/account/&response_type=code&scope=snsapi_userinfo",
                "user_id": "d9a6e129762142bcab29e4ec1aade185",
                "valid_order": "30"
            }
        }

        res.json(result);
    },

    "/wx/v16/putOffFee": function (req, res) {

        var body = req.body;

        if (body.putOffDays == 7) {

            var data = {

                delayFee: 100
            }
        }

        if (body.putOffDays == 14) {

            var data = {

                delayFee: 200
            }

        }

        if (body.putOffDays != 7 && body.putOffDays != 14) {

            var data = {

                delayFee: 300
            }
        }


        res.json({
            statusCode: "4000",
            success: true,
            data,
            message: '提示信息'
        });
    },

    //连连支付接口
    "/wx/v16/LLPayInterface": function (req, res) {

        var result = {
            "statusCode": 5004,
            "message": "连连支付返回参数成功",
            "success": true,
            "data": {
                "acct_name": "缪志瑞",
                "app_request": "3",
                "bg_color": "36b046",
                "busi_partner": "101001",
                "dt_order": "20171103115917",
                "id_no": "320826199009133356",
                "info_order": "还款",
                "money_order": "50.01",
                "name_goods": "还款",
                "no_agree": "",
                "no_order": "369445",
                "notify_url": "http://118.190.60.163:8030/wx/LLNotifyUrl ",
                "oid_partner": "201709080000890470",
                "risk_item": {
                    "user_info_full_name": "缪志瑞",
                    "user_info_id_no": "320826199009133356",
                    "user_info_identify_type": "2",
                    "user_info_bind_phone": "13913169273",
                    "user_info_identify_state": "1",
                    "user_info_mercht_userno": "d9a6e129762142bcab29e4ec1aade185",
                    "frms_ware_category": "2010",
                    "user_info_dt_register": "20170803161349"
                },
                "sign": "QCBhR29l1mNryf/JO3QrIuniVs+hBIfZqVuP70pHikpajpRfwpVsr8Lds63jA9T9thrUDzEr8A+ymEharVh5bLg+xlwB6PjVXlQFpXesZzLnpWwFxlET/he4qoQ7kfzIXOie/cpBaty3a9m7C9WPpcNUOuN3FhsEAL6K3L9ue8c=",
                "sign_type": "RSA",
                "url_return": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa3ffa0ee90690f42&redirect_uri=http://app.credan.com/cs/account/&response_type=code&scope=snsapi_userinfo",
                "user_id": "d9a6e129762142bcab29e4ec1aade185",
                "valid_order": "30"
            }
        }

        res.json(result);
    },

    "/cashloan/instuff/instuff/address-commpany": function (req, res) {
        // if (req.method == 'POST') {
        //     var result = {
        //         "statusCode": 200,
        //         "message": "ok",
        //         "data": {
        //             "code": 0,
        //             "message": "string"
        //         },
        //         "success": true
        //     }

        // } else {
        var result = {
            "statusCode": 200,
            "code": 0,
            "data": {
                "applyId": 0,
                "city": "上海市",
                "district": "上海市",
                "modify": false,
                "province": "黄浦区",
                "specificAddress": "上海市黄浦区南京路101号",
                "status": 0
            },
        }
        // }

        res.json(result);
    },

    "/cashloan/instuff/instuff/address-live": function (req, res) {
            // if (req.method == 'POST') {
            //     var result = {
            //         "statusCode": 200,
            //         "message": "ok",
            //         "data": {
            //             "code": 0,
            //             "message": "string"
            //         },
            //         "success": true
            //     }
            // } else {
            var result = {
                "statusCode": 200,
                "code": 0,
                "data": {
                    "applyId": 0,
                    "city": "上海市",
                    "district": "上海市",
                    "modify": false,
                    "province": "黄浦区",
                    "specificAddress": "上海市黄浦区南京路101号",
                    "status": 0
                },
            }

            // }


            res.json(result);
        }

        ,

    "/cashloan/clogin/smslogin/v1/generateGraphCode": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": {
                "token": "65c60e02-d893-4f31-88b8-4ebb8b131de4",
                "base64Image": "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"
            }
        }
        // var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
        // p.color(0, 0, 0, 0);
        // p.color(80, 80, 80, 255);
        // var img = p.getBase64();
        res.json(result)


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
    '/cashloan/clogin/smslogin/v1/sendSmsCode': function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },


    "/verification/code/login": function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },
    '/cashloan/clogin/smslogin/v1/loginOrRegister': function (req, res) {
        res.json({
            code: 0,
            data: 'msg',
            message: '提示消息'
        })
    },
    "/login/register": function (req, res) {

        res.json({

            code: 0,
            data: '',
            message: '提示消息'
        })
    },

    "/cashloan/instuff/instuff/multi?instuffIds=2,4,1,3,5,6,7,8": function (req, res) {

        let moduleData = {
            "module1": {
                "applyId": 0,
                "idNumber": "idNumber",
                "idNumberLocation": "idNumberLocation",
                "modify": false,
                "name": "name",
                "status": null
            },
            "module2": {
                "applyId": 0,
                "handheldId": "",
                "handheldUri": "",
                "idNumberFacadeId": "",
                "idNumberFacadeUri": "",
                "idNumberReverseId": "",
                "idNumberReverseUri": "",
                "modify": false,
                "status": null
            },
            "module4": {
                "applyId": 0,
                "bankNumber": "bankNumber",
                "bankNumberLocation": "bankNumberLocation",
                "modify": false,
                "status": null,
                "userId": null
            },
            "module3": {
                "applyId": 0,
                "bankNumber": "bankNumber",
                "bankNumberLocation": "bankNumberLocation",
                "modify": false,
                "status": null,
                "userId": null
            },
            "module5": {
                "applyId": null,
                "idNumber": null,
                "idNumberLocation": null,
                "modify": null,
                "name": null,
                "status": null,
                "userId": null
            },
            "module6": {
                "applyId": null,
                "idNumber": null,
                "idNumberLocation": null,
                "modify": null,
                "name": null,
                "status": null,
                "userId": null
            },
            "module7": {
                "applyId": null,
                "idNumber": null,
                "idNumberLocation": null,
                "modify": null,
                "name": null,
                "status": null,
                "userId": null
            },
            "module8": {
                "applyId": null,
                "idNumber": null,
                "idNumberLocation": null,
                "modify": null,
                "name": null,
                "status": null,
                "userId": null
            }
        }
        // let params = req.query.instuffIds.split(',');
        // let realData = {};

        // params.forEach(item => {

        //     realData[`module${item}`] = moduleData[`module${item}`];
        // })



        res.json({

            code: 0,
            data: moduleData,
            message: '提示信息'
        });
    },
    "/cashloan/loan/product/v1/configs_2": function (req, res) {
        var result = {
            "module": null,
            "code": 0,
            "message": null,
            "data": [{
                "status": 1,
                "quotaMin": 1000.00,
                "quotaMax": 5000.00,
                "title": "汇宝代练",
                "productId": 1,
                "periodCountMin": 1,
                "periodCountMax": 1,
                "esignTemplateUrl": "http://signtest.credan.com/gr0esign0up/M01/00/05/rBD8gFvHCW2AbAYRAANQQX-6EtM783.pdf",
                "showConfig": null,
                "termUnit": 1,
                "termNums": [7]
            }]
        }
        res.json(result);
    }
}