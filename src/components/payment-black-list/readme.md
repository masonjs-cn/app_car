支付方式列表

<!-- 使用方式 -->
<!-- 
js文件
import PaymentList from 'components/payment-list/index.vue';
...

components:{
    
    PaymentList
},
data() {
    return {
    
        isShowPaymentList: false,
    }
},

methods:{
    
    toPay(){
    
        ...
        this.isShowPaymentList = true;
    }
}

vue文件
<PaymentList
    :isShowPaymentList=isShowPaymentList
    //有三种方式all(全部还款) delay(延期还款) part(部分还款)
    payQuota = 'part'
    @close-paylist="isShowPaymentList = false"
></PaymentList> 


-->