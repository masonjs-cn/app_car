
//第一道题目的答案
function findNext (n, arr) {
    let curr = arr[0];
    let diff = Math.abs (n - curr);
  
    for(let val of arr) {
        var newdiff = Math.abs (n - val);
        if (newdiff <= diff) {
            diff = newdiff;
            curr = val;
        }
    }
    return curr;
}
const arr2 = [1, 5, 9, 15, 28, 33, 55, 78, 99];
console.log(findNext(1, arr2))
console.log(findNext(44, arr2))
console.log(findNext(6, arr2));
console.log(findNext(7, arr2));
console.log(findNext(8, arr2));

//第二道面试题
<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .children div:nth-of-type(2) {
            background: red;
        }
        .children p:nth-of-type(1){
            color:blue;
        }
        .children div[lang="abc"] {
            color:green;
        }
    </style>
    </head><body>
        <!--题目说明--><!--将children下，第3个div子元素，背景颜色置为红色-->
        <!--将children下，第2个子元素，文字颜色置为蓝色-->
        <!--将children下，lang属性包含bcd，文字颜色置为绿色--><div>
    <div class="children">
        <div>test</div>
        <p >test</p>
        <div>test</div>
        <p>test</p>
        <div lang="abc">test</div>
        <div lang="abcd">test</div>
        <div>test</div>
        <div>test</div>
    </div></div></body></html>

// 第三道面试题答案
const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash'

function querySearch(url) {

    let queryString = url.match(/\?(.*)#/)[1];
    let obj = {}
    let stringArr = queryString.split("&")

    for(let item of stringArr) {

        let temArr = item.split('=')
        obj[temArr[0]]=temArr[1] || '';
    }
  
    return obj;
}
const result = querySearch(url);

console.log(result)

// 第四道题目的答案
const originObj = {
    a: {
        b: {
            c: [1, 5, 11, 23, 422]
        }
    },
    d: function () {
        console.log('hello world');
    }
}

function clone(originObj) {

    var obj;
    if(Object.prototype.toString.call(originObj) === '[object Array]'){
        obj = [];
        for(var i = 0, len = originObj.length; i < len; i++){
            obj.push(clone(originObj[i]));
        }
    } else if(Object.prototype.toString.call(originObj) === '[object Object]'){
        obj = {};
        for(var key in originObj){
            obj[key] = clone(originObj[key]);
        }
        
    } else {
        return originObj
    }

    return obj;
}

const newObj = clone(originObj)