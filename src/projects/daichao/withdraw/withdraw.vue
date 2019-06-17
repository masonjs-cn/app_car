<template>
    <div class="withdraw-page fullscreen" v-cloak>
        <div class="real-money layout">
            <span>选择充值项目</span>
           
            <popup-picker
                :title="请选择"
                :data="bankList"
                :columns="1"
                cancelText="取消"
                confirmText="完成"
                v-model="bankName"
                ref="picker">
            </popup-picker>

        </div>
        <div class="get-money layout">
            <span>充值金额</span>
            <input placeholder="请输入充值金额" @input="trim" v-model="money"/>
        </div>

        <!-- <p class="warn">*每笔提现手续费为2元</p> -->

        <button class="btn" @click="withdrawal">提现</button>
    </div>
</template>
    