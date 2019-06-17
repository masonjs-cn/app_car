import { utils } from 'libs';
import storage from 'good-storage';

export const toLLPay = (params, paymentWay) => {
    params.paymentWay = paymentWay;
    
    params = JSON.stringify(params);

    if (process.env.NODE_PLATFORM != 'app') {

        //浏览器端的支付方式=======
        storage.set('payInfo', params);
        
        utils.go("ll2pay-page");

        return;
    }

    var browser = utils.openBrowser({

        url: `ll2pay-page.html`,
        start(event) {

            // {"type":"loadstart","url":"http://www.baidu.com/"}
            if (event.url.indexOf('ll2pay-page' > -1)) {

                browser.executeScript({
                    code: `window.payInfo = ${params}`
                })
            }
        },
        exit(event) {

            // alert(11111)
            // utils.go('user-account-homepage');
            // window.location.reload();
        }
    })


}