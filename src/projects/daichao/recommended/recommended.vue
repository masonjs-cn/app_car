<template>
    <div class="recommended-page fullscreen" v-cloak>
        <div class="head">
            <img class="logo" src="./images/logo.png" alt="" srcset="">
        </div>

        <div class="car">
            <div class="carInfos">
                <img class="carImg" src="./images/car.png" alt="" srcset="">
                <div class="carTitle">{{carName}}</div>
            </div>

            <div class="circle-bw">
                <div class="circle"  @click="imgshowFrom()">
                    <img class="setUpImg" src="./images/setUp.png" alt="" srcset="">
                </div>

                <div class="circle"  @click="queryCar()">
                    <img class="setUpImg" src="./images/sousuo.png" alt="" srcset="">
                </div>
            </div>

        </div>

        <div class="operatingbk">
            <div class="operating">
                <div class="operatingTitle">
                <span class="operatingStatus">{{stateTitle}}</span>
                <span v-if="stateTitle=='启动中'" class="operatingSudu">速度  {{data1}}</span>
                </div>

                <div class="operatingBottom">
                <div class="circle" @click="start()">
                    <img v-if="state" class="setUpImg" src="./images/close.png" alt="" srcset="">
                    <img v-else class="setUpImg" src="./images/close-bg.png" alt="" srcset="">
                </div>
                <div class="circle"  @click="stop()">
                    <img v-if="!state" class="setUpImg" src="./images/stop.png" alt="" srcset="">
                    <img v-else class="setUpImg" src="./images/stop-bg.png" alt="" srcset="">
                </div>
                </div>

            </div>
        </div>

        <div class="rang-data">
            <range v-if="state" v-model="data1" @on-touchend="onChange"></range>
        </div>

        <div class="imgWindow" v-if=imgshow>
            <div class="zhezhao" id="zhezhao">
                <div class="login" id="login">
                    <div class="content">
                        <div class="content-title">请输入ip地址</div>

                        <div class="content-list">
                            <div class="content-qq">小车称呼:</div>
                            <div class="content-neirong">
                                <input class="content-shuru" type="text" placeholder="输入小车称呼" v-model="form.carName">
                            </div>
                        </div>

                        <div class="content-list">
                            <div class="content-qq">ip地址:</div>
                            <div class="content-neirong">
                                <input class="content-shuru" type="text" placeholder="输入ip地址" v-model="form.ipName">
                            </div>
                        </div>

                        <div class="content-list">
                            <div class="content-qq">端口地址:</div>
                            <div class="content-neirong">
                                <input class="content-shuru" type="text" placeholder="输入端口地址" v-model="form.duanName">
                            </div>
                        </div>

                        <div class="queding-list">
                            <div class="queding" @click="determine()">确定</div>
                            <div class="queding" @click="close">取消</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
