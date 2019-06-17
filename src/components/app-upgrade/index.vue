<template>
    <div class="wrap">
        <div id="background" class="back">
            <div id="div1" class="content">
                <div id="close">
                    <h2 class="title">{{title}}</h2>
                </div>
                <div id="div2">
                    <div v-html="updateContent"></div>
                </div>
                <p id="prompt">&nbsp;&nbsp;&nbsp;&nbsp;安卓手机请使用自带浏览器打开连接</p>
                <p id="prompt">&nbsp;&nbsp;&nbsp;&nbsp;苹果手机请使用safari打开连接</p>
                <div id="foot" @click="onCopy">打开下载地址</div>
            </div>
        </div>
    </div>
</template>
<script>
    import index from './index.js';
    export default index;

    import './index.less';
</script>
