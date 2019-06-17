import { utils } from 'libs';
import {
    tdld,
    params,
    urls
} from 'settings';
import storage from 'good-storage';

// import runHorse from 'components/run-horse/index.vue';
// import productCard from 'components/product-card/index.vue';

import Range from 'vux/range';

const page = {

    components: {
        Range
    },
    data() {
        return {
            menu: [{
                title: '首页',
                icon: 'fa fa-home',
                url: '/',
                color: '#01AAED'
            }, {
                title: '设置',
                icon: 'fa fa-user',
                url: '/setUp',
                color: '#2F4056'
            }],
            title: '首页',
            stateTitle: '等待启动',
            data1: 0,
            state: false,
            imgshow: false,
            form: {
                carName: '小车一号',
                ipName: '192.168.4.1',
                duanName: '80'
            },
            carName: '小车一号',
            show: true
        }
    },

    created() {
        let carInfos = localStorage.getItem('carInfos')
        if (carInfos) {
            this.form = JSON.parse(carInfos)
            this.carName = carInfos.carName
        }
    },
    mounted() {
      
    },
    methods: {
        start() {
            this.stateTitle = '启动中'
            this.state = true
            // findNewsList({speed: this.data1}, (res) => {
            //   console.log('====================================')
            //   console.log(res)
            //   console.log('====================================')
            // })
        },
        stop() {
            this.stateTitle = '等待启动'
            this.state = false
            this.data1 = 0
            findNewsList({ speed: this.data1 + '|' }, (res) => {
                // console.log(res)
            })
        },
        onChange() {
            findNewsList({ speed: this.data1 + '|' }, (res) => {
                // console.log(res)
            })
        }, // 关闭联系我们
        close() {
            this.imgshow = false
        },
        imgshowFrom() {
            let carInfos = localStorage.getItem('carInfos')
            if (carInfos) {
                this.form = JSON.parse(carInfos)
            }
            this.imgshow = true
        },
        determine() {
            if (this.form.carName === '') {
                this.toastAlert('小车称呼不能为空')
                return
            }
            if (this.isValidIP(this.form.ipName) === false) {
                this.toastAlert('请输入正确的ip地址')
                return
            }
            let reg = /^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5])$/

            if (!reg.test(this.form.duanName)) {
                this.toastAlert('请输入正确的ip端口')
                return
            }
            this.imgshow = false
            // if (localStorage.getItem('carInfos') && localStorage.getItem('carInfos') !== '') {
            //   let carInfos = localStorage.getItem('carInfos')
            //   console.log('====================================')
            //   console.log(carInfos)
            //   console.log('====================================')
            // } else {
            let formString = JSON.stringify(this.form)
            this.carName = this.form.carName
            localStorage.setItem('carInfos', formString)
            // }
            // console.log(this.form)
        },
        isValidIP(ip) {
            var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
            return reg.test(ip)
        },
        toastAlert(neirong) {
            this.$vux.toast.text(neirong, 'middle')
        },
        queryCar() {
            const _this = this
            this.$vux.confirm.prompt('123', {
                title: '输入ip网段 例子:192.168.1',
                onShow() {
                    console.log('promt show')
                    _this.$vux.confirm.setInputValue('192.168.1')
                },
                onHide() {
                    console.log('prompt hide')
                },
                onCancel() {
                    console.log('prompt cancel')
                },
                onConfirm(msg) {
                    for (let index = 1; index < 254; index++) {
                        let form = {
                            carName: '小车一号',
                            ipName: `${msg}.${index}`,
                            duanName: '80'
                        }
                        let url = `http://${form.ipName}:80`
                        let findFrontInforListInterface = url + '/admin/loanmgmt/v1/getLoanByFirmId' // 前端列表接口地址
                        let a = { speed: '0|' }
                        _this.$vux.loading.show({
                            text: ''
                        })
                        dataLinkPostJson(findFrontInforListInterface, a, (res) => {
                            _this.toastAlert(index)
                            _this.$vux.loading.hide()
                        }, () => {
                        })
                    }
                }
            })
        }
    }
}

