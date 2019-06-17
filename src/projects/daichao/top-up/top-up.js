import { utils } from 'libs';
import {
    tdld,
    params,
    urls
} from 'settings';
import storage from 'good-storage';

const page = {

    data() {

        return {
            money:"",
            totalAmount:200
        }
    },

    created() {
        this.totalAmount = utils.getParams('money');
    },

    methods: {
        trim(e) {
           e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null
        //    console.log('e', e.target.value)
           this.money = e.target.value
           // this.money = this.money.replace(/[^\d]/g,'')
        },
        withdrawal(){
            let blackCardInfo = storage.get("blackCardInfo")

            this.blackCardInfo = blackCardInfo;
                // （1-未激活，2-已激活，3-已退卡，4-冻结，5-注销 6.过期）

            if (blackCardInfo.status == 6) {

                utils.tipInfo({
                    content: '尊敬的黑卡会员，您的黑卡已过期，需要补交年费才能进行提现。'
                })

                setTimeout(() => {
                    utils.go("vip-card")
                }, 2000);

                return

            }

            if (blackCardInfo.status !== 2 && blackCardInfo.status !== 3 && blackCardInfo.status !== 6) {
                utils.tipInfo({
                    content: '开通黑卡后，方可提现,2秒后进入黑卡页面'
                })

                setTimeout(() => {
                    utils.go("open-card")
                }, 2000);

                return
            }



            if (this.money==='') {
                utils.tipInfo({
                    content: '请输入提现金额'
                })
                return
            }

            if (this.totalAmount < 2) {
                utils.tipInfo({
                    content: '提现总金额必须大于2元'
                })
                return
            }

            if (this.money > +this.totalAmount) {
                utils.tipInfo({
                    content: '请输入小于提现金额的钱'
                })
                return
            }

            

            $confirm.show({
                content: `提现金额</br><span style="font-size:30px;font-weight:bold;">${this.money}元</span></br>提现金额将会直接转入已绑定的银行卡中。`,
            }).then(res => {
                if (res) {
                    let promise = utils.fetch({
                        url: urls.withdraw.withdraw,
                        data: {
                            "key": utils.generateUUID(),
                            "money": this.money,
                        },
                        api: true,
                    })
                    promise.then(data => {
                        utils.go('personal-center');
                    },data=>{
                        /**去填写身份证号**/

                        if (data.code===10008) {
                             utils.go('id-card-verify');
                        }

                        /**逾期未还**/
                        if (data.code === 11011) {
                            // utils.tipInfo({
                            //     content: '尊敬的黑卡会员,您还有逾期未还款的订单未还款'
                            // })

                            setTimeout(() => {
                                utils.go('order-list');
                            }, 2000);
                        }
                    })
                }

            })

        }
    }
}

