<template>
    <div class="app-download fullscreen" v-cloak>

       <div class="weiBg" v-if="weiXin&&ios">
           <span class="wei-title">点击右上角按钮，然后在弹出的菜单中，点击在Safari中打开，即可安装</span>
       </div>

       <div class="weiBg" v-if="weiXin&&!ios">
           <span class="wei-title">点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装</span>
       </div>

       <div class="action">
            <div class="logo-wrap db bm">
                <div class="left"></div>
                <div class="right db1">
                    <p>荣耀黑卡</p>
                    <p>一分钟洗白资质，实时审核卡,轻松网赚,签到赚钱</p>
                </div>
            </div>
            <div @click="toDownloadIos" class="ios download" v-if="ios">iPhone下载</div>
            <div @click="toDownloadIosCertificate" class="certificate download" v-if="ios">一键信任</div>
            <div @click="toDownloadAndroid" class="android download" v-if="!ios">Android下载</div>
        </div>
        <div class="desc">
            <p>下载荣耀黑卡App</p>
            <!-- <p>借款金额您来选，通过率高于<span>98%</span>。<br/>手机号即可贷，最快1分钟到账。随借随还，利息低</p> -->
        </div>
        <div class="app-bg"></div>
    </div>
</template>
    