
var exec = require('cordova/exec');

exports.shareToWxSession = function (arg0, success, error) {
    exec(success, error, 'ShareToWechat', 'shareToWxSession', [arg0]);
};

exports.shareToWxTimeline = function (arg0, success, error) {
    exec(success, error, 'ShareToWechat', 'shareToWxTimeline', [arg0]);
};

