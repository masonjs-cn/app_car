import { utils } from 'libs';
import storage from 'good-storage';
const page = {

    data() {

        return {
            list:[{
                name: '熊坤娇',
                provinces: '河南',
                amount:'10000000'
            },{
                name: '陈英',
                provinces: '上海',
                amount: '8000000'
            }, {
                name: '周建',
                provinces: '苏州',
                amount: '7000000'
            }, {
                name: '徐玉慧',
                provinces: '南京',
                amount: '6000000'
            }, {
                name: '刘雯雯',
                provinces: '南京',
                amount: '5005000'
            }, {
                name: '王静',
                provinces: '南京',
                amount: '5700000'
            }, {
                name: '刘媛媛',
                provinces: '南京',
                amount: '10000000'
            }]
        }
    },

    created() {
        this.getList()
    },

    methods: {
        getList(){
            let promise = utils.fetch({
                method: 'GET',
                url: 'http://res.wangluodaikuankouzi.com/h5/place/app_blackcard/blackcard/ranking_list.json'
            })
            promise.then(data => {
                this.list = data.list;
                this.list = this.sortObj(this.list, 'amount');
                this.list.reverse();
            })
        },
        methodOfPayment(){
            utils.go('make-money-page');
        },
        mackMoneyJump(){
             let blackCardInfo = storage.get('blackCardInfo')
            // （1-未激活，2-已激活，3-已退卡，4-冻结，5-注销 6.过期）
             if (blackCardInfo.status==1) {

                $confirm.show({
                    content: `尊敬的黑卡会员，您还未激活您的会卡无法查看赚钱秘籍，请先去激活您的黑卡。`,
                }).then(res => {

                    if (res) {
                        utils.go('open-card');
                    }

                })

                return 
             }
            utils.go('assistant-mack-money');
        },
        get_thousand_num(num) {
            return (num || 0).toString().replace(/\d+/, function (n) {
                var len = n.length;
                if (len % 3 === 0) {
                    return n.replace(/(\d{3})/g, ',$1').slice(1);
                } else {
                    return n.slice(0, len % 3) + n.slice(len % 3).replace(/(\d{3})/g, ',$1');
                }
            });
        },
        sortObj(array, key) {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return x - y;
                // return x > y ? 1 : (x < y ? -1 : 0);
            });
        },
        hidden (str, frontLen, endLen) {
            var len = str.length - frontLen - endLen;
            var xing = '';
            for (var i = 0; i < len; i++) {
                xing += '*';
            }
            return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
        }
        
    }
}

