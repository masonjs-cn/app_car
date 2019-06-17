<template>
    <div class="global-register-action" :class="[theme]">
        <div class="phone layout">
            <input type="tel" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="img-wrap db layout">
            <div class="left db1 bm">
                <input type="text" placeholder="输入图形验证码" v-model="imageCode">
            </div>
            <div class="right bm bc" @click="toChangeImgCode">
                <img :src="base64Image" alt="">
            </div>
        </div>
        <div class="code-wrap db layout">
            <div class="left db1 bm">
                <input type="text" placeholder="输入验证码" v-model="code">
            </div>
            <div class="right bm bc">
                 <ValidateCode
                class="custom-code"
                :phone="phone"
                :kaptchaCode="imageCode"
                :kaptchaCodeToken="token"
                :pageName="pageName"
                @toChangeImgCode = "toChangeImgCode"
                ></ValidateCode>
            </div>
        </div>
        <div class="register-btn" @click="toSubmit">{{ btnText }}</div>
    </div>
</template>

<script>
    import index from './index';
    export default index;
    
    import './index.less';
</script>
