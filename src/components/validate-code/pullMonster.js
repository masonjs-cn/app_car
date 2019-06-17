import { utils } from 'libs';
import { urls, params } from 'settings';

class PullMonster {


    pull(context) {
 

        !!this.isShowMaster ? this.monster() : context.getCode.call(this)

    }

    getCode() {
   
        let phone = this.phone;
        let graphCode = this.kaptchaCode;
        let graphCodeToken = this.kaptchaCodeToken;
        let isUseDefaultIp = this.isUseDefaultIp;
        let channelSid = utils.getParams('channelSid') || '';
        let firmId = utils.getParams('firmId') || params.firmId || '';

        if(!firmId) {

            utils.tipInfo({content:'缺少firmId'});
            return 
        }

        if (!graphCode) {

            utils.tipInfo({
                content: '请输入图形验证码',
                callback:()=> {

                    this.resetCountDonw();
                }
            });
            return;
        }

        let promise = utils.fetch({
            url: urls[this.pageName].sendSmsCode,
            data: {
                graphCode,
                graphCodeToken,
                stuff: {
                    "browserInfo": {},
                    "channelSid": "",
                    "clientSessionId": "",
                    "firmId": firmId,
                    "ip": "string",
                    "latitude": 0,
                    "loginName": "string",
                    "longitude": 0,
                    "method": 0,
                    "os": 0,
                    "phone": phone,
                    "phoneInfo": {},
                    "platfrom": 0,
                    "realName": "string",
                    "systemId": "blackcard"
                },
            },
            isNeedIdentity: false,
            isUseDefaultIp
        })

        promise.then(data => {
            
            utils.tipInfo({content: '发送成功'})
        }, error => {

            utils.tipInfo({

                content:error.message,
                callback:() => {

                    this.resetCountDonw();
                    this.$emit('toChangeImgCode');
                }
            })
        })

    }

    monster(phone) {
        
        let iframe = document.createElement('iframe');

        let domain='';

        if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'mocktest') {

            domain = "http://uctest.credan.com"
        } else {

            // domain = "http://166.62.85.61";
        }
        iframe.src = `${domain}/c2c/pages/monster-page.html?phone=${phone}`;
        // iframe.src = `${domain}/${process.env.NODE_PRODUCT}/pages/monster-page.html?phone=${phone}`;

        // iframe.src = `http://localhost:8080/pages/monster-page.html?phone=${phone}`;
        // iframe.src = `http://app.credan.com/chao-city/yanzheng.html?${phone}`;
        iframe.id = "aiframe2"
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.border = "none";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.zIndex = "99999";

        document.body.appendChild(iframe);

        window.addEventListener('message', e => {

            let obj = document.getElementById("aiframe2");

            if (obj) {
                obj.parentNode.removeChild(obj);
            }

        }, false)
    }
}


export default new PullMonster;