<template>
    <div class="make-money-page-page fullscreen" v-cloak>
        <div class="code-wrap">
            <div class="code">
                <p class='title'>荣耀黑卡APP</p>
                <span class="qr-code">
                     <div id="qrcode" ref="qrcode"></div>
                </span>
                <!-- <img /> -->
            </div>

            <div class="copy">
                <div class="down" href="" @click="downImg()" 
                v-clipboard:copy="msg"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">{{advertisingText}}</div>
            </div>

            <p class="title" v-if="advertising">取之有道</p>
            <p class="desc"  v-if="advertising">&nbsp;&nbsp;&nbsp;&nbsp;这是您的专属二维码，保存为图片后分享到朋友圈、贴吧、论坛等，新客通过您的专属二维码借还一次，您就可以获得10元奖励，无次数限制。</p>
            <p class="example"  v-if="advertising">&nbsp;&nbsp;&nbsp;&nbsp;举个例子，假设您推荐了100个新客，每个新客月借还2次，那您每月轻松入账￥2,000块。</p>

            <div class="propaganda" v-if="!advertising">
                <div class="propaganda-title">一分钟洗白资质，实时审核卡</div>
                <div class="propaganda-title">轻松网赚,签到赚钱</div>
            </div>
            
        </div>

        <div class="imgWindow" v-show=imgshow>
            <div class="zhezhao" id="zhezhao">
                <div class="login" id="login">
                    <img src="" id="imageId">
                    <div class="content">小提示:<span style="color:#52da58">长按图片</span>选择保存至手机相册</div>          
                    <div class="shut" @click="close"></div>
                </div>
            </div>
        </div>


    </div>
</template>
        