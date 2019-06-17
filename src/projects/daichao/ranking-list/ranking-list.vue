<template>
    <div class="ranking-list-page fullscreen" v-cloak>

        <div class="ranking">
            <div class="ranking-id">名次</div>
            <div class="ranking-id">姓名</div>
            <div class="ranking-id">省份</div>
            <div class="ranking-title">收入</div>
            <div class="ranking-secret" @click="mackMoneyJump"><div class="ranking-miji">赚钱秘籍</div></div>
        </div>

        <div class="list" v-for="(item,index) in list" :key='index'>
            <div class="ranking-list" v-if="index==0">
                <div class="ranking-id">
                    <img class="ranging-tu" src="./images/first.png" alt="">
                </div>
                <div class="ranking-id">{{(item.name.replace(/.(?=.)/g, '*'))}}</div>
                <div class="ranking-id">{{item.provinces}}</div>
                <div class="ranking-title">{{get_thousand_num(item.amount)}}元</div>
            </div>
            <div class="ranking-list" v-else-if="index==1">
                <div class="ranking-id">
                    <img class="ranging-tu" src="./images/second.png" alt="">
                </div>
                <div class="ranking-id">{{item.name.replace(/.(?=.)/g, '*')}}</div>
                <div class="ranking-id">{{item.provinces}}</div>
                <div class="ranking-title">{{get_thousand_num(item.amount)}}元</div>
            </div>
            <div class="ranking-list" v-else-if="index==2">
                <div class="ranking-id">
                    <img class="ranging-tu" src="./images/third.png" alt="">
                </div>
                <div class="ranking-id">{{item.name.replace(/.(?=.)/g, '*')}}</div>
                <div class="ranking-id">{{item.provinces}}</div>
                <div class="ranking-title">{{get_thousand_num(item.amount)}}元</div>
            </div>
            <div class="ranking-list" v-else>
                <div class="ranking-id">{{index+1}}</div>
                <div class="ranking-id">{{item.name.replace(/.(?=.)/g, '*')}}</div>
                <div class="ranking-id">{{item.provinces}}</div>
                <div class="ranking-title">{{get_thousand_num(item.amount)}}元</div>
            </div>
        </div>

        <div class="bootom"></div>

        <div class="make-money">
            <div class="pay-now" @click="methodOfPayment">
                <div class="real-pay">我要挣钱</div>
            </div>
        </div>


    </div>
</template>
    