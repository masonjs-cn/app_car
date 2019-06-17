<template>
    <div class="personal-center fullscreen" v-cloak>
        
        <div class="user-info">

            <div class="make-money">总金额</div>
        
            <div class="withdrawal">
                <div class="money-img"></div>
                <div class="withdrawal-money">{{amount.getEnableAmount}}<span class="expected-yuan">元</span></div>
            </div>

            <div class="income">

                <div class="expected">
                    <div class="expected-income">
                        <div class="expected-title">etc余额</div>
                        <!-- <div class="expected-img" @click="expectedPopup()"></div> -->
                    </div>
                    
                    <div class="expected-money">{{amount.getProspectAmountMonth}}<span class="expected-yuan">元</span></div>
                </div>

                <div class="line"></div>

                <div class="expected">
                    <div class="expected-income">
                        <div class="expected-title">停车费</div>
                    </div>
                    
                    <div class="expected-money">{{amount.getNewAddAmountMonth}}<span class="expected-yuan">元</span></div>
                </div>

            </div>

        </div>

        <ul class="list">

             <li class="db" @click="toGo('connection')" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>连接设备</span>
                </div>
                <span class="icon-right"></span>
            </li>

            <!-- <li class="db" @click="withdrawal()" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>提现</span>
                </div>
                <span class="icon-right"></span>
            </li> -->

            <li class="db" @click="withdrawal()" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>充值余额</span>
                </div>
                <span class="icon-right"></span>
            </li>

            <!-- <li class="db" @click="orderList('ranking-list')" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>收入排行榜</span>
                </div>
                <span class="icon-right"></span>
            </li> -->

            <li class="db" @click="toGo('pusat-layanan')" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>帮助文档</span>
                </div>
                <span class="icon-right"></span>
            </li>

            <!-- <li class="db" @click="toGo('business')" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>Kerjasama Bisnis </span>
                </div>
                <span class="icon-right"></span>
            </li> -->

            <!-- <li class="db" @click="orderList('make-money-page')" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>去赚钱</span>
                </div>
            </li> -->

            <li class="db" @click="safetyExit()" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>退出登录</span>
                </div>
                <span class="icon-right"></span>
            </li>

            <li class="db" @click="toGo('user-login')" v-show=login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>立即登录</span>
                </div>
                <span class="icon-right"></span>
            </li>

            <!-- <li class="db" @click="setMillionInfo()" v-show=!login>
                <div class="left db1 bm">
                    <span class="icon"></span>
                    <span>贺岁百万现金大奖</span>
                    <span :class="[millionInfo ? arrow : arrowSelected]"></span>
                </div>
            </li> -->
        </ul>

        <ul class="activity-list" v-show="millionInfo">
            <li v-for="(item,index) in million" :key=index v-show=!login>
                <div class="left db1 bm">
                    <div class="title">{{item.title}}</div>
                    <div class="activity">
                        <div>{{item.lotteryDate}}</div>
                        <div>{{item.lotteryAmount}}</div>
                    </div>
                </div>
            </li>
        </ul>


        <!-- <div class="pay-now" @click="toGo('make-money-page')" v-show=!login>
            <div class="real-pay">去赚钱</div>
        </div> -->

    </div>
</template>
    