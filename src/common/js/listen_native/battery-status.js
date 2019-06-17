/**
 * 获取电池状态 cordova plugin add cordova-plugin-battery-status
 */
import {
    utils
} from 'libs';
import storage from 'good-storage';

export default {

    init() {
       window.addEventListener("batterystatus", this.onBatteryStatus, false);
    },

    //定位数据获取成功响应
    onBatteryStatus(info) {
        // evel： 电量百分比， 0 - 100 之间数字
        // isPlugged： 是否是充电中。
        console.log("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

}