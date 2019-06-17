import { utils } from 'libs';
import storage from 'good-storage';
import { urls } from 'settings';

class Device {

    init() {
        
        if(location.href.indexOf('user-login') > -1) return;
        
        if(location.href.indexOf('ll2pay-page') > -1) return;
        if(storage.get('isSubmitDevice')) return;
        
        try {

            let identityInfo = storage.get('identityInfo');
            if(!identityInfo) return;
            
            let deviceInfo = {
                
                // cordova:device.cordova,
                // model:device.model,
                // platform:device.model,
                // uuid:device.uuid,
                // version:device.version,
                // manufacturer:device.manufacturer,
                // serial:device.serial
                deviceId:device.uuid,
                identifierNumber:device.uuid,
                deviceSystemVersion:device.version,
                deviceModel:device.model,
                deviceOS:device.model,
                deviceName:device.manufacturer
            }

            let data = {

                deviceInfo
            }

            // console.log(device)
            // return;
            let promise = utils.fetch({
                url: urls.common.postDeviceDetail,
                data: deviceInfo,
                loadingTip: false,
                api: true,

                token: true
            })

            promise.then(data => {

                storage.set('isSubmitDevice', true);
            })
        } catch (e) {

            console.log(e)
        }

    }
}

export default new Device();