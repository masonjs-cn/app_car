import {
    validate,
    utils
} from 'libs';
import ValidateCode from '../validate-code/index.vue';
import {
    urls,
    params
} from 'settings';
import storage from 'good-storage';

export default {

    props: {

        //代表哪个页面调用了该登录组件
        pageName: {

            type: String,
            default: 'login'
        },
        btnText: {

            type: String,
            default: '登录'
        },
        theme: {

            type: String,
            default: 'theme1'
        },
        isCustomLogin: {

            type: Boolean,
            default: false
        }
    },

    components: {

        ValidateCode
    },

    data() {

        return {
            phone: '',
            code: '',
            base64Image: '',
            imageCode: '',
            token: ''
        }
    },

    created() {

        this.getImgCode();
        this.firmId =  utils.getParams('firmId') || params.firmId || ''
    },

    methods: {

        toSubmit() {
            
            

            let channelSid = utils.getParams('channelSid') || "",
                phone = this.phone,
                registerUrl = urls[this.pageName].register,
                smsCode = this.code;

            if (!validate.isPhone(this.phone)) {

                utils.tipInfo({
                    content: '请输入正确的手机号'
                })
                return;
            }

            if (!validate.isNumber(this.code)) {

                utils.tipInfo({

                    content: '请输入正确的验证码'
                })
                return;
            }

            if (this.isCustomLogin) {

                this.$emit('registerSuccessCb', {

                    channelSid,
                    phone,
                    code,
                    registerUrl
                })
                return;
            }
            let invitationCode=storage.get("invitationCode")||''
            let promise = utils.fetch({

                url: registerUrl,
                data: {
                    // channelSid,
                    registerForm:{
                        invitationCode,
                    },
                    smsCode,
                    "stuff": {
                        "browserInfo": {
                            "a":"1"
                        },
                        "channelSid": channelSid,
                        "clientSessionId": "",
                        "firmId": this.firmId,
                        "ip": "",
                        "latitude": 0,
                        "loginName": phone,
                        "longitude": 0,
                        "method": 0,
                        "os": 0,
                        "phone": phone,
                        "phoneInfo": {
                            "a": "1"
                        },
                        "platfrom": 0,
                        "realName": "",
                        "systemId": "blackcard"
                    }
                },
                isNeedIdentity: false
            })

            promise.then(data => {
            localStorage.setItem('mobile', phone);

                utils.tipInfo({
                    content: '注册成功',
                    callback: () => {

                        this.$emit('registerSuccessCb', {
                            channelSid,
                            data
                        })

                    }

                })
            })
        },

        getImgCode() {

            let data = {
                "browserInfo": {}, //渠道标识
                "channelSid": "", //客户端会话ID
                "clientSessionId": "", //客户公司ID
                "firmId": this.firmId, //客户公司ID
                "ip": "", //登录ip
                "latitude": 0, //纬度
                "loginName": "", //登录名
                "longitude": 0, //经度
                "method": 0, //登录方法。0：未知；1：短信验证码登录；2：密码登录；3：微信登录；4：APP授权登录；
                "os": 0, //操作系统。0：未知；1：android；2：iOS；3：windows；4：linux；5：mac；
                "phone": this.phone, //手机号码
                "phoneInfo": {
                    appVersion:navigator.appVersion
                }, //手机型号信息，非手机端登录为空
                "platfrom": 1, //平台。0：未知；1：APP；2：H5；3：PC；
                "realName": "", //真实姓名
                "systemId": "blackcard"
            }
            let promise = utils.fetch({

                // method: 'get',
                url: urls[this.pageName].getImageCode,
                data: data,
                loadingTip: false,
                isNeedIdentity: false
            })

            promise.then(data => {

                this.base64Image = `data:image/png;base64,${data.base64Image}`
                this.token = data.token;
            })
        },

        toChangeImgCode(data) {

            this.imageCode = '';
            this.getImgCode();
        }
    },
    mounted() {


    }
}