import { utils } from 'libs';

const page = {

    data() {

        return {
            
            channelSid: '',
            weiXin: this.isWeixin(),
            ios: this.isIos()
        }
    },

    created() {
        
        this.channelSid = utils.getParams('channelSid') || 1;

        utils.addEvent('app下载页面到达');
    },

    mounted() {
        this.weiXin = this.isWeixin();
        this.ios = this.isIos();
    },

    methods: {
        
        toDownloadIos() {

            if (this.isWeixin()) {
                utils.tipInfo({
                    content: '点击右上角按钮，然后在弹出的菜单中，点击在Safari中打开'
                })
                return
            }
            
            // let url = `itms-services://?action=download-manifest&url=https://app1.credan.com/app/packages/aihuigou/package${this.channelId}/manifest.plist`;
            let url = `itms-services://?action=download-manifest&url=https://iosipa.oss-cn-beijing.aliyuncs.com/blackcard/package${this.channelSid}/manifest.plist`;
            

            
            location.href = url;
        },

        toDownloadAndroid() {

            if (this.isWeixin()) {
                utils.tipInfo({
                    content: '点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开'
                })
                return
            }
            
            let url = `http://www.wangluodaikuankouzi.com/app/packages/blackcard/package${this.channelSid}/android.apk`;


            location.href = url;
        },

        toDownloadIosCertificate() {

            if (this.isWeixin()) {
                utils.tipInfo({
                    content: '点击右上角按钮，然后在弹出的菜单中，点击在Safari中打开'
                })
                return
            }

            // let url = `itms-services://?action=download-manifest&url=https://app1.credan.com/app/packages/aihuigou/package${this.channelId}/manifest.plist`;
            let url = `https://iosipa.oss-cn-beijing.aliyuncs.com/blackcard/package${this.channelSid}/embedded.mobileprovision`;

            location.href = url;
        },

        isWeixin(){
            var ua = navigator.userAgent.toLowerCase();
            var isWeixin = ua.indexOf('micromessenger') != -1;
            if (isWeixin) {
                return true;
            } else {
                return false;
            }
        },
        
        isIos(){
            var equipmentType = "";
            var agent = navigator.userAgent.toLowerCase();
            var android = agent.indexOf("android");
            var iphone = agent.indexOf("iphone");
            var ipad = agent.indexOf("ipad");
            if (android != -1) {
                equipmentType = "android";
            }
            if (iphone != -1 || ipad != -1) {
                equipmentType = "ios";
            }

            let isIos=equipmentType==='ios'?true:false;
            return isIos;
        }
    }
}

