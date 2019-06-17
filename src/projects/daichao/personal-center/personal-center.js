import {
    utils
} from 'libs';
import {
    urls
} from 'settings';
import storage from 'good-storage';

const page = {

    data() {

        return {
            mobile:"",
            identityInfo:"",
            login:false,
            amount:{
                getEnableAmount:0,
                getNewAddAmountMonth:0,
                getProspectAmountMonth:0
            },
            million:[],
            assessment: false,
            millionInfo: false,
            arrow: "arrow",
            arrowSelected:"arrow-selected",
        }
    },
    mounted() {

        if (storage.get("mobile") && storage.get("identityInfo")) {
            this.login = false
            this.getAmount();
            this.getMillion();
            this.assessment = true
            return
        }
        this.login = true
        this.assessment = false
        this.amount.getEnableAmount = "0.00"
        this.amount.getNewAddAmountMonth = "0.00"
        this.amount.getProspectAmountMonth = "0.00"
    },
    created() {


        
    },
    methods: {
        getAmount() {
            let promise = utils.fetchAll([{
                url: urls.personalCenter.getEnableAmount,
            }, {
                url: urls.personalCenter.getNewAddAmountMonth,
            }, {
                url: urls.personalCenter.getProspectAmountMonth,
            }])
            promise.then(res => {
                this.amount={
                    getEnableAmount :res[0].money,
                    getNewAddAmountMonth : res[1].money,
                    getProspectAmountMonth: res[2].money
                }
            })
        },
        getMillion(){
            let url = "http://res.wangluodaikuankouzi.com/h5/place/app_blackcard/activity/ShareContent.json"
            let promise = utils.fetch({
                method: 'get',
                url: url,

            })
            promise.then(res => {
                this.million = res.list;
            })
        },
        setMillionInfo(){
            this.millionInfo = !this.millionInfo
        },
        toGo (url) {
            utils.go(url)
        },
        withdrawal(){
            let money = this.amount.getEnableAmount;

            utils.go('withdraw', {
                money: money
            })
        },
        safetyExit () {
            let promise = utils.fetch({
                url: urls.personalCenter.logout,
                api: true,
                token:true
            })
             promise.then(data => {
                utils.go("user-login");
                localStorage.removeItem('identityInfo');
                localStorage.removeItem('mobile');
             })
        },
        loginOperation: function () {
           utils.go("user-login");
        },
        expectedPopup(){
             $alert.show({
                 content: `<div style="text-align:center;font-weight:400;">预期收入<div></br>
                    <div>您所分享的所有好友中,未还款订单
                    数× 每笔订单结清后所得赏金（ 10 元）。
                    若您的预期收入为0， 则说明您所分享
                    的好友中没有借款或者没有未还款订单。</div>
                 `
             })
        }

    }
}