<template>
    <div class="vip-card-page fullscreen" v-cloak>
        <div class="header">
            <div class="lunbo-wrap">
                <blackVipCard></blackVipCard>
            </div>
        </div>

        <div class="pay-now vip" @click="openVipJump" v-show='!openVip'>
            <div class="real-pay">立即开通</div>
        </div>

        <div class="loadmore-tips" v-show='!openVip'>
            <div class="line"></div>
            <div class="loadmore-tips">开卡后即可享受4大会员权益</div>
            <div class="line"></div>
        </div>

        <div class="content" v-show='!openVip'>
            <ul>
                <li v-for="(item,index) in productList" :key=index>
                    <img :src="item.logo" class="icon"/>
                    <span>{{item.name}}</span>
                    <span>{{item.desc ? item.desc: ''}}</span>
                </li>
            </ul>
        </div>

        <div class="card" v-show='openVip'>

            <div class="card-list">
                <div class="card-name">黑卡状态: </div>
                <div class="card-activation">{{cardstatus}}</div>
                <div @click="openBack" v-if='activeStatus==3'>去激活 >> </div>
                <div @click="backHome" v-else>退还200元押金</div>
            </div>

            <div class="card-list" v-if=evaluate>
                <div class="card-name">黑卡级别: </div>
                <div v-for="(item,index) in level.integer" :key="index">
                    <div class="start"></div>
                </div>
                    <div class="start1" v-show="level.show"></div>
            </div>

            <div class="card-list" v-else>
                <div class="card-name">黑卡级别: </div>
                <div>待评估</div>
            </div>

            <div class="card-list" v-if=evaluate>
                <div class="card-name">授信额度: </div>
                <div>{{quota}}元</div>
            </div>

            <div class="card-list" v-else>
                <div class="card-name">授信额度: </div>
                <div>待评估</div>
            </div>

            <div class="card-list"  v-if=evaluate>
                <div class="card-name">可用额度: </div>
                <div>{{availableQuota}}元</div>
            </div>

            <div class="card-list" v-else>
                <div class="card-name">可用额度: </div>
                <div>待评估</div>
            </div>

        </div>

        <div class="pay-now no-vip" @click="myOrder" v-show='openVip'>
            <div class="real-pay">我的订单</div>
        </div>

    </div>
</template>