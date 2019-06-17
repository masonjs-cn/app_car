
import * as pay from './pay';
import storage from 'good-storage';

export default function(paymentWay) {

       //快捷支付
    if (paymentWay.payGatewayType == 501 || paymentWay.accountType == "501") {

        let payType = `${this.payQuota}Lianlian`;
        // storage.set('paymentWay', paymentWay);

        pay[payType](paymentWay);
    }

    //微信支付
    if (paymentWay.payGatewayType == 801 || paymentWay.accountType == "801") {

        // this.weixinPay(paymentWay)
    }

    //易宝支付
    if (paymentWay.payGatewayType == 1001 || paymentWay.accountType == "1001") {

        let payType = `${this.payQuota}Lianlian`;
        storage.set('paymentWay', paymentWay);
        
        pay[payType](paymentWay);
    }

    //合利宝支付
    if (paymentWay.payGatewayType == 1101 || paymentWay.accountType == "1101") {

        let payType = `${this.payQuota}Lianlian`;
        storage.set('paymentWay', paymentWay);

        pay[payType](paymentWay);
    }
}