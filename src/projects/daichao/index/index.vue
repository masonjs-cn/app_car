<template>
    <div class="index-page fullscreen" v-cloak>
        <div class="head">
            <img class="logo" src="./images/logo.png" alt="" srcset="">
        </div>
        
        <div class="weather">
            <h5>- 空气质量检查</h5>
        </div>

       <div class="withdrawal">
            <div class="withdrawal-money">
                <div class="round">
                    <p class="round-rate">{{availableQuota}}</p>
                    <p class="round-title">噪音检测</p>
                </div>
            </div>
            <div class="with-step">
               <div class="with-step-title">pm2.5: 0</div>
               <div class="with-step-title">pm10: 0</div>
            </div>
        </div>

        <div class="menu-list">
            <div>查询风向</div>
            <div>北风</div>
        </div>

        <div class="menu-list">
            <div>风速</div>
            <div>100</div>
        </div>

        <div class="menu-list">
            <div>雨量</div>
            <div>440</div>
        </div>
        
       
    </div>
</template>
