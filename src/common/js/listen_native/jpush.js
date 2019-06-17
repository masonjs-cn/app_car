/**
 * 推送相关
 */
import { utils } from 'libs';
import storage from 'good-storage';

export default {

    init() {

        window.JPush && window.JPush.init();

        this.getJpushId();
        
        this.setAlias()
        
        //移除桌面应用的红标
        this.removeDesktopRedHot()
        
        //应用处于后台，点击推送进入触发的方法
        document.addEventListener("jpush.openNotification", this.onOpenNotification.bind(this), false);

        //在应用内推送的话，触发这个方法
        document.addEventListener("jpush.receiveNotification", this.onReceiveNotification.bind(this), false);

        document.addEventListener("jpush.backgroundNotification", this.onBackgroundNotification.bind(this), false);
        document.addEventListener("jpush.receiveMessage", this.onReceiveMessage.bind(this), false);


    },

    onOpenNotification(event) {
        window.plugins.jPushPlugin.setBadge(0);

        console.log('====================================');
        console.log(event);
        console.log('====================================');

        if (event.aps.alert.includes("更新")) {
            this.toOtherWebSite("http://blackcard.wangluodaikuankouzi.com/pages/app-download.html");
        }

        // // this.clearNoticeBadge();
        // alert('onOpenNotification')
        // //存储消息
        // this.storageNews();
        // //收到消息之后调整到消息列表
        // utils.go('news-list', {

        //     event: event
        // })
    },
    toOtherWebSite(item) {
        // utils.addEvent(item.title)
        utils.tipInfo({

            content: '正在前往...',
            callback() {

                utils.openBrowser({

                    url: item
                })
            }
        })
    },
    onReceiveNotification() {
        
        if(location.href.indexOf('news-list') > -1) return;

        let redHot = document.querySelector('#redHot');

        if(redHot) {
           
            redHot.style.display = "block";
        }

        //存储消息
        this.storageNews();
    },

    onBackgroundNotification() {
        
    },

    onReceiveMessage() {

    },

    clearNoticeBadge() {
        window.plugins.jPushPlugin.setBadge(0);
    },

    getJpushId() {

        let timer = setInterval(() => {

            window.plugins.jPushPlugin.getRegistrationID(function(data) {
                console.log('====================================');
                console.log(`jpushId${data}`);
                console.log('====================================');
                if (data) {

                    storage.set('jpushId', data);
                    clearInterval(timer);
                }
            });
        }, 1000);
    },

    setAlias() {
        //设置Alias
        // if (this.alias && this.alias.trim() != '') {
        window.JPush.setAlias({ sequence: 1, alias: 'bbbb' },
        (result) => {
           console.log('====================================');
           console.log(result);
           console.log('====================================');
        }, (error) => {
           console.log('====================================');
           console.log(error);
           console.log('====================================');
        })
        // alert("设置别名:" + this.alias);
        // } else alert('Alias不能为空');
    },

    storageNews() {
        
        //是否有未读消息
        storage.set('isHasNotReadNews', true)
    },

    removeDesktopRedHot() {
        
        if(location.href.indexOf('index') > -1) {
            
        //     alert(123)
           window.plugins.jPushPlugin.setBadge(0); 
        }
    }

}