import { validate, utils } from 'libs';
import ValidateCode from '../validate-code/index.vue';
import { urls } from 'settings';

export default {
    props: ['open'],
    props:{
        //代表哪个页面调用了该登录组件
        pageName: {
            type: String,
            default:'login'
        },
        btnText:{

            type:String,
            default:'登录'
        },
        theme:{

            type:String,
            default:'theme1'
        },
        isCustomLogin:{

            type:Boolean,
            default: false
        },
        isShow:{
            type:Boolean,
            default:false
        }
    },

    components:{
        
        ValidateCode
    },

    data() {

        return { 
            phone: '',
            code:'', 
            base64Image:'',
            imageCode:'',
            token:'',
            ok: true
        }
    },   

    created() {
        
        this.toChangeImgCode();

        if(this.isShow){

            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden'; //手机版设置这个。
        }
    },

    methods:{

        toSubmit() {

            let channelSid = utils.getParams('channelSid') || "production",
                phone = this.phone,
                registerUrl = urls[this.pageName].register,
                code = this.code;

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

            if(this.isCustomLogin) {

                this.$emit('registerSuccessCb', {

                    channelSid, phone, code, registerUrl   
                })
                return;
            }
            
            let promise = utils.fetch({

                url:registerUrl,
                data: { channelSid, phone, code },
                isNeedIdentity: false
            })

            promise.then(data => {

                utils.tipInfo({

                    content: '注册成功',
                    callback:() => {
                        
                        this.close();

                        this.$emit('registerSuccessCb',{ 
                            channelSid, 
                            data,
                            phone
                        })
                        
                    }
                    
                })
                
            })
        },

        getImgCode() {
            
            let promise = utils.fetch({

                method: 'get',
                url: urls[this.pageName].getImageCode,
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
        
        },
        close(){
             this.$emit('close-register'); 
             document.documentElement.style.overflow = 'auto';
             document.body.style.overflow = 'auto'; //手机版设置这个。
        },
       
    }, 
    mounted(){


       
    }
}