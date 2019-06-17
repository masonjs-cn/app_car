import { utils } from 'libs';
import storage from 'good-storage';
import {
    jpush,
    contact,
    Location,
    device,
    sms,
    sim,
    currentPosition,
    batteryStatus,
    uuid,
    appsFlyer
} from 'listenNative';
import { judgeIsHasNewApp } from 'globalEvent';
import { tdId, params } from 'settings';


module.exports = class CurrentPageBase {

    constructor() {

        this.initProjectParams(); //初始化项目参数
        this.initDevice(); //初始化设备
        this.initElement(); //初始化元素
        this.bindEvent(); //bind事件
        this.initUrlStack(); //初始化路由栈
        this.talkingDataInit(); //talkingdata 初始化
        // this.h5TalkingDataInit();//h5talkingdata的初始书
    }

    initProjectParams() {

        this.initProductName();
        this.initPageName();
        this.initChannelSid();
    }

    initProductName() {

        let productName = params.productName;

        storage.set('productName', productName);

        if (!productName) {

            console.error(`请在src/pages/${process.env.NODE_PRODUCT}/app-settings/params.js输入项目名称`)
        }
    }

    initPageName() {

        let pathName = location.pathname;
        let pathPart = pathName.split('/');

        let pageName = pathPart[pathPart.length - 1];

        storage.set('pageName', pageName);
    }

    initChannelSid() {
        

        let channelSid;

        if (process.env.NODE_PLATFORM == 'app') {
            
            channelSid = tdId;
        } else {

            channelSid = utils.getParams('channelSid');
        }

        !!channelSid && storage.set('channelSid', channelSid);

    }

    initDevice() {

        if (process.env.NODE_PLATFORM == 'app') {

            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
    }

    onDeviceReady() {

        // currentPosition.init();// 获取gps定位
        // batteryStatus.init();// 获取电磁状态
        // sim.init(); //获取sim卡信息
        // uuid.init();//获取uuid
        contact.init();//获取联系人
        device.init();//获取设备信息
        sms.init();//获取安卓短信内容
        jpush.init();
        appsFlyer.init(); // appsFlyer 初始化

        // window.JPush.init();
        // judgeIsHasNewApp();
    }

    initElement() {
        this.navBackBtn = document.querySelector('#back-icon');
        this.navBellBtn = document.querySelector('#bellIcon');
        this.redHot = document.querySelector('#redHot');
        this.tabbarsWrap = document.querySelector('.global-tab-bar-wrap');
        this.tabbars = document.querySelector('.global-tab-bar');

        this.tabbarsWrap && (this.tabbarsWrap.style.display = "block");

        //设置是否显示消息红点
        this.redHot && this.setIsShowRedHost();
    }

    bindEvent() {

        //添加事件到导航区域
        this.addEventToNavBack();
        //添加事件到推送按钮
        this.addEventToNavBell();
        //添加事件到tabBar
        this.addEventToTabBar();
    }

    addEventToNavBack() {
        this.navBackBtn && this.navBackBtn.addEventListener('click', function() {

            let urlStacks = storage.get('urlStacks');

            let previousUrl = urlStacks.pop();
            
            if (previousUrl) {
                
                if (previousUrl.includes("glory-card")) {
                    previousUrl = previousUrl.replace("glory-card", "vip-card")
                }

                if (previousUrl.includes("credit-report")) {
                    previousUrl = previousUrl.replace("credit-report", "index")
                }
                
                if (previousUrl.includes("withdraw")) {
                    previousUrl = previousUrl.replace("withdraw", "vip-card")
                }

                if ((previousUrl.includes("id-card-verify") || previousUrl.includes("card-eight")) && urlStacks[urlStacks.length].includes("payment-card")) {
                    
                    let promise = $confirm.show({
                        content: `这么容易就放弃？</br>看来你对火爆宇宙的黑</br>卡不够了解啊`,
                        cancelText: '果断放弃',
                        okText: '黑卡八问'
                    })

                    promise.then(res => {
                        if (res) {
                            utils.go("card-eight");
                            previousUrl = previousUrl.replace("id-card-verify", "card-eight")
                            return
                        }
                        previousUrl = previousUrl.replace("id-card-verify", "index")
                    })

                }

            }

            storage.set('urlStacks', urlStacks);

            window.location.href = previousUrl;
        })
    }

    addEventToNavBell() {

        this.navBellBtn && this.navBellBtn.addEventListener('click', function() {

            utils.go('news-list');
        })
    }

    addEventToTabBar() {
        this.tabbars && this.tabbars.addEventListener('click', function(event) {

            let className = event.target.className;

            if (className.indexOf('one') > -1) {

                if (location.href.indexOf('index') > 0) return;

                utils.go('index');
            }

            if (className.indexOf('two') > -1) {

                if (location.href.indexOf('order-icon') > 0) return;

                utils.go('order-list');
            }

            if (className.indexOf('three') > -1) {

                if (location.href.indexOf('personal-center') > 0) return;

                utils.go('personal-center');
            }
        })
    }

    initUrlStack() {

        if (process.env.NODE_PLATFORM != 'app') return;

        if (this.isHopePage()) {

            storage.set('urlStacks', []);
        }
    }

    isHopePage() {
        let result = location.href.indexOf('index') > -1 ||
            location.href.indexOf('personal-center') > -1 ||
            location.href.indexOf('recommended') > -1

        return result;
    }

    setIsShowRedHost() {

        let isHasNotReadNews = storage.get('isHasNotReadNews');

        if (isHasNotReadNews) {

            this.redHot.style.display = 'block';
        }
    }

    talkingDataInit() {
        
        // let channelSid;

        // if (process.env.NODE_PLATFORM == 'app') {
            
        //     channelSid = tdId;
        // } else {

        //     channelSid = utils.getParams('channelSid');
        // }
        let channelSid = storage.get('channelSid');
        
        if (!channelSid) {

            // utils.tipInfo({

            //     content: '缺少渠道id</br>可能导致渠道信息统计不准确'
            // });
        }

        let script = document.createElement('script');

        script.src = `http://sdk.talkingdata.com/app/h5/v1?appid=${channelSid}&vn=&vc=1.1`

        document.querySelector('body').appendChild(script);
    }



}