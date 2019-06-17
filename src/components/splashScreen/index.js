import { utils } from 'libs';
import judgeIsShowSplash from './judgeIsShowSplash';

export default {

    props: {
        url: {
            type: String,
            required: true
        }
    },

    data() {

        return {
            countDownNum: 5,
            timer: null,
            isShowSplash: false,
            splashImg: ''
        }
    },

    created() {

        if(!judgeIsShowSplash.call(this)) return;


        let promise = utils.fetch({

            method: 'get',
            url: this.url,
            isNeedIdentity: false

        })

        promise.then(res => {

            this.splashImg = res.list[0].imgUrl;

        }).then(() => {

            this.timer = setInterval(() => {

                if (this.countDownNum == 1) {

                    this.hideSelf();
                    return;
                }

                this.countDownNum = this.countDownNum - 1;

            }, 1000)
        })

    },

    methods: {

        hideSelf() {

            clearInterval(this.timer);
            this.isShowSplash = false;
        }
    }
}