import { utils } from 'libs';
import { Register } from 'components';
import storage from 'good-storage';

const page = {

    components: {

        Register
    },

    data() {

        return {
            
            phone: "",
            code: '',
            isShowLogo:false,
            isShowCompany:false
        }
    },

    created() {

        let isShowLogo = utils.getParams('isShowLogo');
        let channelSid = utils.getParams('channelSid');
        let invitationCode = utils.getParams('code');
        if (invitationCode) {
            storage.set("invitationCode", invitationCode);
        }
        
        this.isShowLogo = !!isShowLogo ? true : false;

        utils.addEvent('app注册页面到达');
    },

    methods: {
        
        registerSuccessCb(data) {

            utils.tipInfo({

                content: '注册成功',
                callback() {

                    utils.go('app-download');
                }
            })
        }
    }
}

