/**
 * appsFlyer
 */
import {utils} from 'libs';
import storage from 'good-storage';

export default {

    init() {
        var options = {
            devKey: 'XmYGw3KL7EzkfWFd6byzAB', // your AppsFlyer devKey      
            isDebug: false,
            onInstallConversionDataListener: true
        };

        var userAgent = window.navigator.userAgent.toLowerCase();

        if (/iphone|ipad|ipod/.test(userAgent)) {
            options.appId = "123456789"; // your ios app id in app store        
        }

        console.log('====================================');
        console.log("开始注册");
        console.log('====================================');

        window.plugins.appsFlyer.initSdk(options,data=>{
            console.log('====================初始化成功==============');
            console.log(data);
            console.log('===================================');
            // this.trackEvent()
        },error=>{
            console.log('=====================初始化失败===============');
            console.log(error);
            console.log('====================================');
        });

    },

    trackEvent(){
        document.addEventListener('deviceready', () => {
            console.log('====================================');
            console.log("开始点击事件");
            console.log('====================================');
            var eventName = "af_add_to_cart";
            var eventValues = {
                "af_content_id": "id123",
                "af_currency": "USD",
                "af_revenue": "2"
            };
            window.plugins.appsFlyer.trackEvent(eventName, eventValues);
            console.log('====================================');
            console.log("点击事件结束");
            console.log('====================================');
        }, false);
    }
   
}