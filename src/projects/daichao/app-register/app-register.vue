<template>
    <div class="app-register fullscreen" v-cloak>
        <div class="banner"></div>
        <div class="action">
            <Register
                @registerSuccessCb = "registerSuccessCb"
                theme="activity"
                pageName = "appRegister"
            ></Register>

            <!-- <button class="submit-btn" @click="toSubmit">立即领取</button> -->

            <div class="logo db bm bc" v-if="isShowLogo">
                <span class="icon"></span>
                <span>信用贷</span>
            </div>
            
            <!-- <p class="company" v-if="isShowCompany">上海旦弘信息科技服务中心  沪ICP备15004467号-3</p> -->
        </div>
    </div>
</template>
    