<template>
    <div class="withdraw-page fullscreen" v-cloak>
        <div class="real-money layout">
            <span>可提现金额</span>
            <span>{{totalAmount}}元</span>
        </div>
        <div class="get-money layout">
            <span>提现金额</span>
            <input placeholder="请输入本次提现金额" @input="trim" v-model="money"/>
        </div>

        <p class="warn">*每笔提现手续费为2元</p>

        <button class="btn" @click="withdrawal">提现</button>
    </div>
</template>
    