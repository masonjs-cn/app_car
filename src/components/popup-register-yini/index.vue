<template>
    <div class="full-screen" v-show="isShow">
        <div class="popup-window"></div>

        <div class="global-register-action" :class="[theme]">
            <div class="phone layout">
                <input type="tel" placeholder="Masukkan nomor HP" v-model="phone">
            </div>
            <div class="img-wrap db layout">
                <div class="left db1 bm">
                    <input type="text" placeholder="Masukkan Captcha" v-model="imageCode">
                </div>
                <div class="right bm bc" @click="toChangeImgCode">
                    <img :src="base64Image" alt="">
                </div>
            </div>
            <div class="code-wrap db layout">
                <div class="left db1 bm">
                    <input type="text" placeholder="Masukkan kode verifikasi" v-model="code">
                </div>
                <div class="right bm bc">
                    <ValidateCode class="custom-code" :phone="phone" :kaptchaCode="imageCode" :kaptchaCodeToken="token" :pageName="pageName" @toChangeImgCode="toChangeImgCode"></ValidateCode>
                </div>
            </div>
            <div class="register-btn" @click="toSubmit">{{ btnText }}</div>
        </div>

        <img class="close" src="./images/close.png" alt="" srcset="" @click="close">
    </div>
</template>

<script>
import index from './index';
export default index;

import './index.less';
</script>
