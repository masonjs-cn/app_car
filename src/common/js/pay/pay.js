import { utils } from 'libs';
import storage from 'good-storage';
import { toLLPay } from './payCb';
import {
    urls,
    params,
} from 'settings';

function getUserPayAccountName(type) {
    let item = '';
    switch (type) {
        case "501":
            item = "快捷支付"; //支付名称
            break;
        case "801":
            item = "微信支付";
            break;
        case "1001":
            item = "易宝支付";
            break;
        case "1101":
            item = "合利宝支付";
            break;
    }
    return item;
}

//全部还款，连连支付
export const allLianlian = (paymentWay) => {
    let allPayData = storage.get('allPayData');
    allPayData.redirectUrl = utils.getllPayRedirectUrl()

    let params = {
        userPayAccountId: paymentWay.accountId,
        userPayAccountType: paymentWay.accountType,
        userPayParams: allPayData.userPayParams,
        repayingId: allPayData.planId,
        redirectUrl: allPayData.redirectUrl,
    }
    
    let url = ""
    // 判断，全额支付，还是部分支付
    if (allPayData.ious == true) {
       url= urls.rent.createdAllRepaidOrder //走贷款模块的
       params.userPayAccountName = getUserPayAccountName(paymentWay.accountType);
    }else{
       url= urls.goodsPurchased.prepareToPay // 走现金支付的
       params.firmId = params.firmId
       let good = storage.get('good');
       params.merchandiseSid = good.productId
       params.merchantSid=""
       params.orderSid = allPayData.orderSid == undefined || allPayData.orderSid == "" ? "" : allPayData.orderSid
       params.payByLoan= false
    }

    let promise = utils.fetch({

        url,
        data: params,
        token:true,
        isNeedIdentity: false
    })

    promise.then(data => {
        let good = storage.get('good');
        if (good==undefined) {
             good={
                 orderSid : data.orderSid
             }
        }else{
            good.orderSid = data.orderSid;
        }
        storage.set('good', good); // 获取订单id并且保存下来
        
        utils.tipInfo({
            content: '前往支付页面'
        })

        toLLPay(data, paymentWay);

    })
}

//部分还款，连连支付
export const partLianlian = (paymentWay) => {

    let partPayData = storage.get('partPayData');
    
    partPayData.redirectUrl = utils.getllPayRedirectUrl()

    let data = {
        userPayAccountId: paymentWay.accountId,
        userPayAccountType: paymentWay.accountType,
        userPayParams: partPayData.userPayParams,
        userPayAccountName: getUserPayAccountName(paymentWay.accountType),
        repayingId: partPayData.planId,
        repaidMoney: partPayData.repayMoney,
        redirectUrl: partPayData.redirectUrl
    }

    let promise = utils.fetch({

        url: urls.rent.createdPartRepaidOrder,
        data: data,
        token:true,
        isNeedIdentity: false
    })

    promise.then(data => {

        utils.tipInfo({

            content: '前往支付页面'
        })

        toLLPay(data, paymentWay);
    })
}

//延期还款，连连支付
export const delayLianlian = (paymentWay) => {

    let delayPayData = storage.get('delayPayData');
    // delayPayData.redirectUrl = utils.getllPayRedirectUrl()
    let data = {
        userPayAccountId: paymentWay.accountId,
        userPayAccountType: paymentWay.accountType,
        userPayAccountName: getUserPayAccountName(paymentWay.accountType),
        // fundRepayAccountId: paymentWay.id,
        repayingId: delayPayData.planId,
        // loanRepayingId: delayPayData.loanRepayingId,
        userPayParams: delayPayData.userPayParams,
        delayDays:delayPayData.delayDay,
        delayFee:delayPayData.delayFee,
        redirectUrl: utils.getllPayRedirectUrl(),
        // redirectUrl: delayPayData.redirectUrl
        // payGatewayType: paymentWay.payGatewayType
    }
    let promise = utils.fetch({

        url: urls.rent.createdDelayRepaidOrder,
        data,
        token: true,
        isNeedIdentity: false
    })

    promise.then(data => {
        
        toLLPay(data, paymentWay);
       
    })
}

//延期还款，新的延期
export const delayPayment = (paymentWay) => {

    let delayPayData = storage.get('delayPayData');

    let data = {

        fundRepayAccountId: paymentWay.id,
        planId: delayPayData.planId,
        loanRepayingId: delayPayData.loanRepayingId,
        delayDays: delayPayData.delayDay,
        delayFee: delayPayData.delayFee,
        redirectUrl: utils.getllPayRedirectUrl(),
        payGatewayType: paymentWay.payGatewayType
    }

    let promise = utils.fetch({

     url: url.renewLeasePage.prepareToDelayRepay,
        data,
        token:true,
        isNeedIdentity: false
    })

    promise.then(data => {

        toLLPay(data, paymentWay);

    })
}


export const blackCardPayLianlian = (paymentWay) => {

    let blackCardPayData = storage.get('blackCardPayData');

    let data = {
        "fundAccountName": "",
        "price": blackCardPayData.price,
        "productSid": "",
        "redirectUrl": utils.getBlackCardPayctUrl(),
        "userPayAccountId": paymentWay.accountId,
        "userPayAccountType": paymentWay.accountType
    }

    let promise = utils.fetch({

        url: urls.paymentCard.activateAccount,
        data,
        token: true,
        isNeedIdentity: false
    })

    promise.then(data => {

        toLLPay(data, paymentWay);

    },error=>{
        if (error.code === 10008) {
            utils.go("id-card-verify");
        }
    })

}
