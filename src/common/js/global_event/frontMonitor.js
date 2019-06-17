import storage from 'good-storage';
import axios from 'axios'

// 前端监控脚本

const getInfo = () => {

    let phone = storage.get('phone');
    let productName = storage.get('productName');
    let pageName = storage.get('pageName');
    let userAgent = navigator.userAgent;

    return { phone, userAgent, productName, pageName }

}

const postErrorInfo = (data) => {

    let info = getInfo();

    Object.assign(data, info);


    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'dev') {

        axios({

            method: 'POST',
            headers: {

                "Content-Type": "application/json;charset=UTF-8"
            },
            // url: 'http://fontlog.miaozhirui.com/api/errordata',
            url: 'http://frontmonitor.miaozhirui.com/api/frontMonitor',
            // url:'http://60.205.231.190:7001/api/frontMonitor',
            data
        })

        var params = new URLSearchParams();
        let info = '{"message": "' + data.message + '", "methodName": "' + data.methodName + '","pageName": "' + data.pageName + '","phone":"' + data.phone + '","productName":"' + data.productName + '","requestStatus": "' + data.requestStatus + '","requestUrl": "' + data.requestUrl + '","userAgent": "' + data.userAgent + '"}';
        params.append('infoJson', info);
        params.append('Columnid', '55E017A8-94FA-4BFE-0623-3D4563E6F18B');
        params.append('send', '1');
        // axios.post("http://admin.shanghai70.com/public/admin/Program/AddInfos", params)
        //      .then(function (response) {　　
        //     // console.log(response.data);
        // }).catch(function (error) {　　
        //     // alert(error);
        // });
    }

}
/**
 * 监控用户网络错误情况
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
 const saveNetWorkError = (error) => {

    try {

        let requestData = {

            requestUrl: error.config.url,
            requestStatus: error.request.status,
            responseData: error.response,
            message: error.message,
            methodName: 'saveNetWorkError监控用户网络错误情况'
        }


        postErrorInfo(requestData);
    } catch (e) {

        console.log(e)
    }
}


/**
 * 监控服务器接口错误(500, 502, 504等异常情况)
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
 const saveServerError = (error) => {

    try {

        let requestData = {

            requestUrl: error.config.url,
            responseStatus: error.response.status,
            responseData: error.response.data,
            message: error.message,
            methodName: 'saveServerError监控服务器接口错误(500, 502, 504等异常情况)'
        }

        postErrorInfo(requestData);

    } catch (e) {}
}

/**
 * 监控后台接口数据未按照约定返回
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
 const saveServerDataError = (error) => {

    try {

        let requestData = {

            requestUrl: error.config.url,
            responseStatus: error.status,
            responseData: error.data,
            message: error.data.message,
            methodName: "saveServerDataError监控后台接口数据未按照约定返回"
        }

        postErrorInfo(requestData);

    } catch (e) {

    }
}

export default {
    saveNetWorkError,
    saveServerError,
    saveServerDataError
}