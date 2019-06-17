<template>
    <div class="withdraw-page fullscreen" v-cloak>
        <div class="real-money layout">
            <span>连接状态</span>
            <span>连接成功</span>
        </div>

        <div class="get-money layout">
            <span>IP地址</span>
            <input placeholder="请输入ip地址" @input="trim" v-model="money"/>
        </div>

         <div class="get-money layout">
            <span>端口地址</span>
            <input placeholder="请输入端口地址" @input="trim" v-model="money"/>
        </div>

        <!-- <p class="warn">*每笔提现手续费为2元</p> -->

        <button class="btn" @click="withdrawal">连接</button>
    </div>
</template>
    