import { utils } from 'libs';
import storage from 'good-storage';
// import { PopupRegisterYini } from 'components'


const page = {

    components: {
        // PopupRegisterYini,
    },

    mounted() {

        
    },

    data() {

        return {
            product: {
                img: require("./images/Bitmap.png"),
                title: "玖富万卡",
                price: "500-150万",
                time: "3-24月",
                status: ['信用卡贷款', '热门贷款'],
                people: "656",
                advertising: "",
                interestRate: "0.58%",
                url: ""
            },
            isShowRegister: false,

        }
    },
    created() {

        // this.product = storage.get("good");
        // this.product.status = this.product.status.split("|||||");
        // if (this.product.status.length > 4) {
        //     let arry = [];
        //     arry[0] = this.product.status[0];
        //     arry[1] = this.product.status[1];
        //     arry[2] = this.product.status[2];
        //     arry[3] = this.product.status[3];
        //     arry[3] = "更多详情请点击查看";
        //     this.product.status = arry;
        // }

        utils.addEvent('产品详情页面到达')
    },
    methods: {
        toSubmit() {
            let identityInfo = storage.get('identityInfo');
            if (identityInfo == "" || identityInfo == null) {
                this.isShowRegister = true;
            } else {
                utils.addEvent(this.product.title)
                let url = this.product.url;
                utils.tipInfo({

                    content: '正在前往...',
                    callback() {
                        utils.openBrowser({
                            url: url
                        })
                    }
                })

            }
        },
        
    },

    beforeDestroy() {

        console.log(1111)
    }
}