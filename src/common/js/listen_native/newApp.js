/**
 * 更新
 */
import { utils } from 'libs';
import storage from 'good-storage';

export default {

    init(url) {
        cordova.plugins.externalExtension.openURL(url);
    },
    
}