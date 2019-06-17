
import storage from 'good-storage';
import { utils } from 'libs';
import { urls } from 'settings';

export default {

    init(){
        
        if(location.href.indexOf('user-login') > -1) return;
        
        this.initParams();
    },
    initParams(){

        let options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        options.hasPhoneNumber = true;

        let fields = ["displayName", "name","phoneNumbers"];
   
        navigator.contacts.find(fields, this.onSuccess, this.onError);
    },
    onSuccess(data){
        
        data = data.map(item => {

            let temObj = {
                displayName: item.displayName,
                name: item.name,
                phoneNumbers: item.phoneNumbers,
                email: item.email,
                address: item.address
            }

            return temObj;
        })
        
        if(Object.prototype.toString.call(data) === "[object Array]" && data.length===0){
            
            storage.set('isAgreeContact', false);
        } else {

            storage.set('isAgreeContact', true);
        }
        

        let identityInfo = storage.get('identityInfo');
        if(!identityInfo) return;

        let promise = utils.fetch({
            url: urls.common.postUserContacts, //需要提供一个接口
            data:{
                concatInfo: JSON.stringify(data)
            },
            loadingTip: false,
            api: true,
            token: true
        })

        promise.then(res => {
            
        })

    },
    
    onError(error){

        storage.set('isAgreeContact', false);
    }
}