/**
 * 获取 uuid  cordova plugin add https: //github.com/foolever/cordova-plugin-uid
 */
import { utils } from 'libs';
import storage from 'good-storage';

export default {

    init() {

        this.onDeviceReady();

    },

    onDeviceReady() {
        // console.log(cordova.plugins.uid);
        console.log(cordova.plugins.uid.IMEI);
    }

}