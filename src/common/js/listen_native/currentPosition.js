/**
 * 获取经纬度地址 cordova plugin add cordova-plugin-geolocation
 */
import {
    utils
} from 'libs';
import storage from 'good-storage';

export default {

    init() {

        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);

    },
    
    //定位数据获取成功响应
    onSuccess (position) {

        console.log('纬度: ' + position.coords.latitude + '\n' +
            '经度: ' + position.coords.longitude + '\n' +
            '海拔: ' + position.coords.altitude + '\n' +
            '水平精度: ' + position.coords.accuracy + '\n' +
            '垂直精度: ' + position.coords.altitudeAccuracy + '\n' +
            '方向: ' + position.coords.heading + '\n' +
            '速度: ' + position.coords.speed + '\n' +
            '时间戳: ' + position.timestamp + '\n');
            
    },
 //定位数据获取失败响应
    onError(error) {

     console.log('code: ' + error.code + '\n' +
         'message: ' + error.message + '\n');

    }

}