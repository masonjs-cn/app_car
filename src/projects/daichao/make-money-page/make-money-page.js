import { utils } from 'libs';
import QRCode from 'qrcodejs2'
import {
    tdld,
    params,
    urls
} from 'settings';
const page = {

    data() {

        return {
            canvasImg:'',
            canvasBase64:"",
            msg:'',
            imgshow:false,
            advertising:false,
            advertisingText:"扫一扫"
        }
    },

    created() {
        this.$nextTick(function () {
            this.qrcode();
        })
    },

    methods: {
        qrcode() {
            let promise = utils.fetch({
                url: urls.makeMoneyPage.getShareUrl,
                api: true,
            })
            promise.then(data => {
                utils.showLoading();
                this.msg = `打开链接:${data.shareUrl}领取您的荣耀黑卡:一分钟洗白资质，还能免费挣钱，最高可赚10000元。`;
                let qrcode = new QRCode('qrcode', {
                    text: data.shareUrl,
                    width: 200,
                    height: 200,
                })
                setTimeout(() => {
                    this.xia();
                }, 2000);
            },error=>{
                if (error.code === 10008) {
                    utils.go("id-card-verify")
                }
            })
        },
        xia(){

            var pic;
            var canvas2 = document.createElement("canvas");
            let _canvas = document.querySelector('.make-money-page-page');
            var w = parseInt(window.getComputedStyle(_canvas).width);
            var h = parseInt(window.getComputedStyle(_canvas).height);
            //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
            canvas2.width = w * 2;
            canvas2.height = h * 2;
            canvas2.style.width = w + "px";
            canvas2.style.height = h + "px";
            //可以按照自己的需求，对context的参数修改,translate指的是偏移量   
            let Page = this;
            var context = canvas2.getContext("2d");
            // if (this.isWeiXin()){ utils.hideLoading(); return} 
            context.scale(2, 2);
            html2canvas(document.querySelector('.make-money-page-page'), { canvas: canvas2 }).then(function (canvas) {
                pic = canvas;
                //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
                // document.querySelector(".down").setAttribute('href', canvas.toDataURL());
                // document.querySelector(".down1").setAttribute('src', canvas.toDataURL());
                document.getElementById("imageId").src = canvas.toDataURL();
                Page.canvasBase64 = canvas;
                Page.canvasImg = canvas.toDataURL();
               
            });
            this.advertising = true;
            this.advertisingText = "保存图片"
            utils.hideLoading();
        },
        close(){
            this.imgshow = false;
        },
        downImg(){
            // if (this.isWeiXin()){return} 
            // let Page = this;
            if(process.env.NODE_PLATFORM != 'app') {
            
                this.imgshow = true;                
            } else {
                
                var permissions = cordova.plugins.permissions;

                if(permissions) {

                    permissions.hasPermission(permissions.WRITE_EXTERNAL_STORAGE, checkPermissionCallback.bind(this), null);
                } else {

                    this.appDownloadImg();

                }
                // var permissions = cordova.plugins.permissions;
                // permissions.hasPermission(permissions.WRITE_EXTERNAL_STORAGE, checkPermissionCallback.bind(this), null);
            }
            

            function checkPermissionCallback(status) {

                if(!status.hasPermission) {
                    
                    let errorCallback = () => {
                        
                        utils.tipInfo({content: '授权失败'})
                    }

                    let successCallback = status => {

                        if(!status.hasPermission) {

                            errorCallback()
                        } else {

                            this.appDownloadImg();
                        }

                    }

                    permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, successCallback, errorCallback);

                    return;
                } 

                this.appDownloadImg();
            }
            // Page.downloadFile('fengxiang.png', this.canvasImg);
        },

        appDownloadImg(){
            let Page = this;
            utils.showLoading();
            window.canvas2ImagePlugin.saveImageDataToLibrary(success, error, Page.canvasBase64);

            function success() {
                
                utils.hideLoading();
                utils.tipInfo({content: "保存成功"})
            }

            function error() {
                
                utils.hideLoading();
                utils.tipInfo({content: '保存失败'})
            }
        },
        // downloadFile(fileName, content) {
        //     let aLink = document.createElement('a');
        //     let blob = this.base64ToBlob(content); //new Blob([content]);

        //     let evt = document.createEvent("HTMLEvents");
        //     evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
        //     aLink.download = fileName;
        //     aLink.href = URL.createObjectURL(blob);
            
        //     // aLink.dispatchEvent(evt);
        //     aLink.click()
        // },
        // base64ToBlob(code) {
        //     let parts = code.split(';base64,');
        //     let contentType = parts[0].split(':')[1];
        //     let raw = window.atob(parts[1]);
        //     let rawLength = raw.length;

        //     let uInt8Array = new Uint8Array(rawLength);

        //     for (let i = 0; i < rawLength; ++i) {
        //         uInt8Array[i] = raw.charCodeAt(i);
        //     }
        //     return new Blob([uInt8Array], {
        //         type: contentType
        //     });
        // },
        // 复制成功
        onCopy(e) {
            // console.log(e);
            // utils.tipInfo({
            //     content: '尊敬的黑卡会员，您还未激活黑卡，需要激活黑卡才能进行资质洗白。'
            // })
        },
        // 复制失败
        onError(e) {
            // alert("失败");
        },
        //判断是否是微信浏览器的函数
        isWeiXin() {
            //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
            var ua = window.navigator.userAgent.toLowerCase();
            //通过正则表达式匹配ua中是否含有MicroMessenger字符串
            if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
            } else {
                return false;
            }
        }
       
    }
}

