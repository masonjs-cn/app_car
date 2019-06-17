import { utils } from 'libs';
import { Register } from 'components';
import storage from 'good-storage';
import {
    urls,
    params
} from 'settings';

const page = {
    
    components:{
        
        Register
    },

    data() {

        return {
        }
    },

    created() {
        
    },
    methods: {
    
        registerSuccessCb(data){
            
            
            let identityInfo = data.data;
            storage.set('identityInfo', identityInfo);
            document.referrer === '' ? utils.go("index") : window.history.go(-1);


        } ,
        returnPage(){
            localStorage.removeItem('identityInfo');
            localStorage.removeItem('mobile');
            document.referrer === '' ? utils.go("index") : window.history.go(-1);
        }
    }
}

