<template>
    <div class="user-login fullscreen" v-cloak>
        <div class="banner-bg">
            <img @click="returnPage()" class="fork" src="./images/fork.png" alt="">
            <div class="banner"></div>     
        </div>
         <Register
            @registerSuccessCb = "registerSuccessCb"
            pageName="userLogin"
            theme="blackcard"
            ></Register>
    </div>
</template>
    