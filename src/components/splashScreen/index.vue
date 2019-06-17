<template>
     <div class="splash-screen"  v-if="isShowSplash" v-show-image="splashImg">
        <div class="circle-wrap">
            <div class="left layout">
                <div class="left-circle"></div>
            </div>
            <div class="right layout">
                <div class="right-circle"></div>
            </div>

            <div class="count-down">{{countDownNum}}</div>
        </div>
        <div class="skip" @click="hideSelf">跳过</div>
     </div>
</template>
<script>
    import index from './index';
    export default index;

    import './index.less';
</script>