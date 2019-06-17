import { validate, utils } from 'libs';
import pullMonster from './pullMonster';
 
export default {

    props: ['phone','isShowMaster'],
    props:{
        phone:{
            type: String,
            required:true
        },
        isShowMaster:{
            type:Boolean,
            default:false
        },
        isUseDefaultIp:{

            type: Boolean,
            default: true
        },
        kaptchaCode:{
            type:String,
            default:''
        },
        kaptchaCodeToken:{
            type:String,
            default:''
        },
        pageName: {

            type: String,
            default:'login'
        }
    },
    
    data() {

        return {

            timerText: 'Kirim kode verifikasi',
            company: 's',
            defaultTime: 60,
            isDisable: false

        }
    },

    methods: {

        getCode() {
            
            if (this.timerText != 'Kirim kode verifikasi') return;
            
            if (validate.isPhone(this.phone)) {

                if (navigator && navigator.onLine === false) {

                    utils.tipInfo({

                        content: '请检查您的网络',
                    })

                } else {

                    this.setCountDown();

                    pullMonster.pull.call(this, pullMonster);

                }

            } else {

                utils.tipInfo({

                    content: '请输入正确的手机号',
                })
            }

        },

        setCountDown() {

            this.timerText = `${this.defaultTime}${this.company}`;
            this.isDisable = true;

            this.timer = setInterval(() => {

                if (this.defaultTime == 0) {

                    this.resetCountDonw();

                    let aiframe2 = document.getElementById('aiframe2');

                    if (aiframe2) {

                        aiframe2.parentNode.removeChild(aiframe2);
                    }
                } else {

                    this.timerText = --this.defaultTime + this.company;
                }


            }, 1000)
        },

        resetCountDonw() {

            this.timerText = '获取验证码';
            this.defaultTime = 60;
            clearInterval(this.timer);
            this.isDisable = false;

        }
    }
}