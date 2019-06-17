module.exports.publicParams = {
    localDomain: 'http://127.0.0.1:3000', //本地开发的域名
    testDomain: 'http://47.99.163.162:8762',
    // testDomain: 'http://api.wangluodaikuankouzi.com',
    // buildDomain: 'http://47.98.136.225:8762',
    buildDomain: 'http://api.wangluodaikuankouzi.com',
    mocalLocalDomain: 'http://192.168.16.142:8762', //后端开发人员的本地地址
}

module.exports.urls = {

    appRegister:{

        base: '/cashloan/clogin/smslogin', //后端模块路径

        getImageCode: { //某个接口

            url: '/v1/generateGraphCode', //项目路径
            // buildDomain: 'http://47.99.47.64:8762/' //项目域名
        },
        register: {

            url: '/v1/loginOrRegister',//登录
        },
        sendSmsCode:{
             url: '/v1/sendSmsCode', //发送短信
        }
    },

    //登录页面接口
    userLogin: { //某个页面

        base: '/cashloan/clogin/smslogin', //后端模块路径

        getImageCode: { //某个接口
            url: '/v1/generateGraphCode', //项目路径
        },
        register: {
            url: '/v1/loginOrRegister',//登录
        },
        sendSmsCode:{
             url: '/v1/sendSmsCode', //发送短信
        },
        getBlackAccount: {
            base: '/cashloan/memberclub',
            url: '/card/v1/getBlackAccount'
        }
    },
    //商品购买页面
    goodsPurchased: {
        base: '/cashloan/eshop',
        // 根据商品属性查询支付收款账户配置列表
        postGetPayParam: {
            url: "/order/v1/getPayParam",
        },
        
        // 准备支付， 并调用支付网关创建支付订单,如果为白条,则会调用贷款组件
        prepareToPay: {
            url: "/order/v1/prepareToPay",
        },
        currentStatus:{
            base: '/cashloan/instuff',
            url: "/credit-apply/current-apply-status"
        } 

    },
    //信用评估页面
    creditEvaluation: {
        base: '/cashloan/instuff',
        //通过项目编号查询项目信息,多个逗号分割
        getCode: {
            url: "/list/code"
        },
        // 查询多模块申请信息
        getMulti: {
            url: '/instuff/multi',
        }
    },
    //联系人页面
    contactsVerify: {
        base: '/cashloan/instuff',
        //查询||提交 第一个联系人Url
        firstContactUrl: {
            url: '/instuff/contact-first'
        },
        //查询||提交 第二个联系人Url
        secondContactUrl: {
            url: '/instuff/contact-second'
        },
    },
    //地址页面
    userAddressVerify: {
        base: '/cashloan/instuff',
        // 查询||提交 公司地址
        addressCommpayUrl: {
            url: '/instuff/address-commpany'
        },
        // 查询||提交 居住地地址
        addressLiveUrl: {
            url: '/instuff/address-live'
        }

    },
     //订单列表
    orderList:{
        base: '/cashloan/eshop', //后端模块路径
        getOrderPayParams: {
            url: "/order/v1/getOrderPayParams"
        },
        getLoanBills:{
            base: '/cashloan/loan', //后端模块路径
            url: "/loan/v1/getAllLoanBills"
        }
    },
    //退出登录页面
    personalCenter: {
        base: '/cashloan/clogin', //后端模块路径
        logout: {
            url: "/session/v1/logout"
        },
        getEnableAmount:{
            base: '/cashloan/memberclub', //后端模块路径
            url: '/card/v1/getEnableAmount'
        },
        getNewAddAmountMonth:{
            base: '/cashloan/memberclub', //后端模块路径
            url: '/card/v1/getNewAddAmountMonth'
        },
        getProspectAmountMonth: { // 获取用户的预计收入
            base: '/cashloan/memberclub', //后端模块路径
            url: '/card/v1//getProspectAmountMonth '
        }
    },
    // 延期还款
    renewLeasePage:{
        base: '/cashloan/clogin', //后端模块路径
        prepareToDelayRepay: '/repaid/v1/prepareToDelayRepay'
    },
    // 租金
    rent:{
        base: '/cashloan/loan',
        putOffFee: '/repaid/v1/calculateDelayFee',
        createdDelayRepaidOrder: "/repaid/v1/prepareToDelayRepay", ////延期还款，新的延期
        createdPartRepaidOrder: '/repaid/v1/prepareToRepayPart', //部分还款，连连支付
        createdAllRepaidOrder: '/repaid/v1/prepareToRepaySquareUp', //全部还款，连连支付
    },
    choice:{
        base: '/cashloan/instuff',
        instuffStatus: "/credit-apply/instuff-status",
    },
    userBillinfo:{
        base: '/cashloan/loan',
        getLoanBill:{
            url: "/loan/delegate/v1/getLoanBill" //获取贷款账单
        }
    },
    index:{ // 首页
        base: '/cashloan/activity',
        cashActivityGold:{
            base: '/cashloan/memberclub',
            url: '/card/v1/cashActivityGold' // 现金奖励活动
        },
        newest5Record: {
            base: '/cashloan/memberclub',
            url: '/record/v1/newest5Record' // 最新流水记录（ 5 条）
        },
        statUser:{
            base: '/cashloan/memberclub',
            url: '/stat/v1/statUser' // 获取用户统计数据
        },
        statOnlineUser: {
            base: '/cashloan/memberclub',
            url: "/stat/v1/statOnlineUser" // 获取在线注册人数
        },
        getProductConfigByParentId:{
            base: '/cashloan/loan',
            url: "/product/v1/getProductConfigByParentId"
        }
        
    },
    vipCard:{ // 黑卡页面
         base: '/cashloan/memberclub',
         cancelAccount:{
             url: "/card/v1/cancelAccount" //退户（提取押金）
         },
         getAccount: {
             url: '/card/v1/getAccount' //获取账户（不存在则开户）
         },
         // 创建申请信息
         postSubmitOrderInfo: {
             base: '/cashloan/instuff',
             url: '/credit-apply/submit-order-info',
         },
         getLoanAccount:{
            base: "/cashloan/loan",
            url: "/account/query/v1/getLoanAccount"
         }
    },
    makeMoneyPage: {
        base: '/cashloan/memberclub',
        getShareUrl: {
            url: "/card/v1/getShareUrl" //获取二维码连接
        }
    },
    withdraw: {//提现页面
         base: '/cashloan/memberclub',
         withdraw: "/card/v1/withdraw" // 用户提现
     },
    //身份证页面
    idCardVerify: {
        base: '/cashloan/instuff',
        // 查询 ||提交身份证信息
        idNumberUrl: {
            url: '/instuff/id-number'
        },
        // 查询 ||提交身份证照片信息
        pictureUrl: {
            url: '/instuff/id-number/picture'
        },
        // 查询 ||提交银行卡信息
        bankNumberUrl: {
            url: '/instuff/bank-number'
        },
        getMultiModuleUrl: {
            url: '/instuff/multi'
        },
        setImage: {
            url: '/file/upload/image'
        },
        //提交申请
        postSubmit: {
            url: "/credit-apply/final-submit"
        }

    },
    paymentCard:{
        base: '/cashloan/memberclub',
        getPayParam:{
            url: '/card/v1/getPayParam' //获取黑卡可用的充值方式
        },
        getBlackCard:{
            url: '/card/v1/getBlackCard' //获取黑卡卡种信息
        },
        activateAccount: {
            url: '/card/v1/activateAccount' //获取黑卡卡种信息
        },
        openAccount:{
            url: "/card/v1/openAccount"
        }
    },
    wallet:{
         base: '/cashloan/loan', //后端模块路径
         calculateLoan:{
            url: "/loan/query/v1/calculateLoan"
         },
         getFees:{
            url: "/feesetting/v1/getFees"
         },
         apply:{
            base: '/cashloan/memberclub', //后端模块路径
            url: "/card/v1/apply"
         },
         getQuota: {
             url: "/account/query/v1/getQuota" //获取产品账户提升额度
         }
         
    },
    washWhite: {
         base: '/cashloan/memberclub',
         referenceToWashWhite:{
            url:"/card/v1/referenceToWashWhite"
         }
    },
    //所有的页面
    common: {

        base: '/cashloan/instuff/instuff',
        postUserContacts:{

            url: '/mobile-phone-contacts-book',
            // buildDomain: 'https://api.credan.com'
        },
        postUserSms:{

            url: "/mobile-short-message",
        },
        getMobileShortMessage:{

            url: '/mobile-short-message'
        },
        postDeviceDetail:{
            url: '/device-detail'
        }
        
    }
}