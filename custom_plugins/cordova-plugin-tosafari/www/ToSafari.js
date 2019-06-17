var exec = require('cordova/exec');

exports.toSafari = function (arg0, success, error) {
    exec(success, error, 'ToSafari', 'toSafari', [arg0]);
};
