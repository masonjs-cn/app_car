/**
 * sim卡中，获取 cordova plugin add cordova-plugin-sim
 */
import {
    utils
} from 'libs';
import storage from 'good-storage';

export default {

    init() {
       window.plugins.sim.getSimInfo(this.onSuccess, this.onError);
    },
    // 获取信息的成功响印
    onSuccess(res) {
        var html = [];
        html.push('carrierName:' + res.carrierName);
        html.push('countryCode:' + res.countryCode);
        html.push('mcc:' + res.mcc);
        html.push('mnc:' + res.mnc);
        html.push('phoneNumber:' + res.phoneNumber);
        html.push('callState:' + res.callState);
        html.push('dataActivity:' + res.dataActivity);
        html.push('networkType:' + res.networkType);
        html.push('phoneType:' + res.phoneType);
        html.push('simState:' + res.simState);
        console.log(html);
    },
    onError(){
        console.log("失败");
    }

}