import { utils } from 'libs';
import appSettings from 'projects/zcommon/appSettings';
import storage from 'good-storage';

export default () => {
    
    let cancelUpdateApp = storage.get('cancelUpdateApp');

    if(cancelUpdateApp >= 5) return;
    
    let localAppVersion = appSettings.appVersion;

    let promise = utils.fetch({
        
        method: 'get',
        url: 'http://47.98.136.225/h5/place/daichao2/version/release.json',
        loadingTip: false,
        isNeedIdentity:false
    })

    promise.then(data => {

        let releaseVersion = data.list[0].release;
        
        //如果线上版本大于用户本地的版本的话，需要用户去更新的
        // if(thisAppVersion != releaseVersion) {
        if(releaseVersion > localAppVersion){

            $confirm.show({

                content: '币有钱app更新啦，请前往下载',

            }).then(res => {
                
                if(res) {
                    
                    cordova.plugins.ToSafari.toSafari('http://www.wangluodaikuankouzi.com/recycling/pages/aiguigou-download.html');
                }

            })
        }
    })
}