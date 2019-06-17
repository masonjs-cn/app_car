
. 启动server
    npm run server

. 启动项目, 模拟本地数据
    npm run dev

. 本地开发，模拟测试环境数据
    npm run dev:mocktest

. 本地开发，模拟正式环境数据
    npm run dev:mockformal
    
. 打包项目到手机或者模拟器上运行
    npm run test:mock(用的数据是本地模拟的数据)

. 打包项目到手机或者模拟器上运行
    npm run test(用的数据是测试环境的数据)

. 打包项目到手机或者模拟器上运行
    npm run build(用的数据是正式环境的数据)


优化:
1. 为了解决1px的问题，需要在源码node_modules/px2rem/lib/px2rem.js里面添加一行代码，在170行添加if($1 == 1) return $1+'px';



====== 部署服务器 ======
现金贷上到到测试服务器
    npm run test:cashloan && scp -r ./www/** root@47.99.163.162:/home/web/h5/cashloan
    注册页面的测试访问地址: http://47.99.163.162/cashloan/pages/app-register.html
    测试下载地址: http://47.99.163.162/cashloan/pages/app-download.html?channelSid=test
    

现金贷上传到正式服务器
    npm run build:cashloan && scp -r ./www/** root@app1.credan.com:/usr/local/www/cashloan

    注册页面的访问地址: http://www.wangluodaikuankouzi.com/cashloan/pages/app-register.html?channelSid=tiqianba1&firmId=23

====== 部署测试环境app =========

    npm run testapp:cashloan && cordova build

====== 部署正式环境app =========
    npm run buildapp:cashloan && cordova build 



====== 测试包上传方式 =========
ios: 
    scp test.ipa root@app1.credan.com:/usr/local/www/app/packages/xinyongdai/packagetest
android: 
    scp android.apk root@app1.credan.com:/usr/local/www/app/packages/xinyongdai/packagetest



scp ~/Desktop/release/xiaomi.js root@app1.credan.com:/usr/local/www/app/packages/xinyongdai/packagetest/



=======  android打包签名的相关信息=======
签名文件是: 根目录下面的安装密钥
alias: credan
密码全是: Credan!888







