import storage from 'good-storage';

export default function() {
    
    let showSplashTime = storage.get('showSplashTime');

    let time = showSplashTime ? showSplashTime : 0;
    let nowTime = Date.now();

    if(time < nowTime){
       
        this.isShowSplash = true;
        storage.set('showSplashTime', nowTime + 5*60*60*1000);

        return true;
    }
}