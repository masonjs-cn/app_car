import { utils } from 'libs';
import storage from 'good-storage';
import { getPaymentWay, toPay } from 'pay'

export default {

    props: {

        isShowPaymentList: {

            type: Boolean,
            required: true
        },
        payQuota: {

            type: String
        }

    },

    data() {

        return {
            paymentListData:[],
        }
    },


    created() {
        
     
        let payData;

        if(this.payQuota == 'all') {//全部还款

            payData = storage.get('allPayData');
        }

        if(this.payQuota == 'part'){//部分还款

            payData = storage.get('partPayData');
        }

        if(this.payQuota == 'delay') { //延期还款

            payData = storage.get('delayPayData');
        }

        if (this.payQuota == 'blackCardPay') { //延期还款

            payData = storage.get('blackCardPayData');
        }

        
        this.paymentListData = getPaymentWay(payData.fundRepayAccounts);
    },

    methods: {

        selectPayment(item) {

            this.paymentListData.forEach(i => {

                i.selected = false;
            })

            item.selected = true;

        },

        toPay() {

            let paymentWay;
            
            this.paymentListData.forEach(item => {

                if (item.selected) {

                    paymentWay = item;
                }
            })

            if (!paymentWay) {

                utils.tipInfo({ content: '请选择支付方式' })
                return;
            }
            
            if (process.env.NODE_ENV === 'static' || process.env.NODE_ENV === 'staticbuild') {
                utils.tipInfo({
                    content: '支付成功'
                })
            }

       
            toPay.call(this, paymentWay);

           
        },
        
    }

}



