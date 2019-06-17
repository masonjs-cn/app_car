import { utils } from 'libs';
import {
    tdld,
    params,
    urls
} from 'settings';
import storage from 'good-storage';
import blackVipCard from 'components/black-vip-card/index.vue';

const page = {

    components: {
        blackVipCard
    },

    data() {

        return {
            productList: [],
            openVip: true,
            cardstatus:'',
            expirationTime: '',
            quota:"",
            availableQuota:"",
            level: 2.5,
            activeStatus:1,
            evaluate:false,
            blackCard:'',
            openCardFees:0
        }
    },
    
    created() {
        this.getBarkCardState();
    },
    methods: {
        getBarkCardState(){

            let promise = utils.fetch({
                url: urls.userLogin.getBlackAccount,
                data: {},
                api: true,
            })
            promise.then(data => {
                storage.set("blackCardInfo", data);

                this.openVip = true
                // 3 未激活 是 已退卡
                let cardstatus = new Array('', '未激活', '已激活', '未激活', '冻结', '注销', '过期');

                this.cardstatus=cardstatus[data.status];

                this.activeStatus = data.status;//激活状态

                if (data.status == 1 || data.status == 4 || data.status == 6) {
                    this.openVip = false
                }

                if (!this.openVip) {
                    this.getProduct() // 获取小图标
                    return
                }
                
                let myDate = data.expirationTime // 时间
                myDate = new Date(myDate);
                this.expirationTime = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
                
                this.getLoanAccount(); // 获取贷款额度
            })

        },
        getProduct(){
            let promise = utils.fetch({
                method: 'GET',
                url: 'http://res.wangluodaikuankouzi.com/h5/place/app_blackcard/blackcard/vip_card.json'
            })

            promise.then(data => {

                this.productList = data.list;

            })
        },
        getLoanAccount() {
            // 获取贷款额度
            let promise = utils.fetch({
                url: urls.vipCard.getLoanAccount,
                api: true,
                method: 'get',
                "parentProductId": 3
            })

            promise.then(data => {
              
                if (data) {
                    this.quota = data.quota // 授信额度
                    this.availableQuota = data.availableQuota // 可用额度
                    this.evaluate = true
                }else{
                    this.evaluate = false
                    return
                }
                

                 let  promiseLevel  = utils.fetch({
                     method: 'GET',
                     url: 'http://res.wangluodaikuankouzi.com/h5/place/app_blackcard/blackcard/star.json',
                     api: true,
                 })

                 promiseLevel.then(data => {
                    let level = 0
                    for (let i = 0; i < data.list.length; i++) {
                        if (this.quota >= data.list[i].lines) {
                            level = data.list[i].star
                        }
                    }

                    if (level % 2 === 0) {
                        this.level = {
                            integer: parseInt(level / 2),
                            show: false
                        }
                    } else {
                        this.level = {
                            integer: parseInt(level / 2),
                            show: true
                        }
                    } // 星级

                 })

            })
        },
        myOrder() {
            utils.go('order-list');
        },
        openVipJump() {
            // 立即开通
            utils.go('id-card-verify');
        },
        backHome(){
           $confirm.show({
               content: ' 尊贵的黑卡会员，退还押金后，则不能进行借款，如需要再次借款，需重新补交押金。',
           }).then(res => {
               if (res) {
                    let promise = utils.fetch({
                        url: urls.vipCard.cancelAccount, // 退户（ 提取押金）
                        data: {},
                        api: true,
                    })
                    promise.then(data => {
                        this.getBarkCardState();
                    })
               }

           })
        },
        openBack() {
            let getPayParamPromise = utils.fetchAll([{
                    url: urls.paymentCard.getBlackCard,
                },
                {
                    url: urls.paymentCard.getPayParam
                }
                // ,
                // {
                //     url: urls.paymentCard.openAccount
                // }
            ])
            getPayParamPromise.then(data => {
                this.blackCard = data[0]
                
                this.openCardFees = data[0].cashPledge + data[0].serviceCharge;

                let blackCardInfo = storage.get("blackCardInfo")

                if (blackCardInfo.status === 6) {
                    this.blackCard.cashPledge = 0
                }

                if (blackCardInfo.status === 3) {
                    this.blackCard.serviceCharge = 0
                }

                let blackCardPayData = {
                    fundRepayAccounts: data[1].fundAccounts,
                    price: this.openCardFees
                }
                storage.set("blackCardPayData", blackCardPayData)
                utils.go('payment-card');
            })

        },

        
    }
}

