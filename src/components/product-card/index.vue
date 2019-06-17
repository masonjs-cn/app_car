<template>
    <div class="product-list">
        <ul class="product">
            <li>
                <div class="left">
                    <img src="./images/bg.jpg" alt="" srcset="">
                    <div class="left-title">
                        {{title}}
                    </div>
                </div>

                <div class="right">
                    <div class="right-btn" @click="toGo">
                        Unduh Segera
                    </div>
                </div>
            </li>

            <li>
                <div class="left">
                    <div class="left-amount">
                        {{amount}}
                    </div>
                </div>

                <div class="right">
                    <div class="right-rate  mt">
                       {{rate}}
                    </div>
                </div>
            </li>

            <li>
                <div class="left">
                    <div class="Jumlah">
                        {{jumlah}}
                    </div>
                </div>

                <div class="right">
                    <div class="right-rate">
                        {{time}}
                    </div>
                </div>
            </li>

        </ul>

    </div>
</template>
<script>
    import index from './index.js';
    export default index;

    import './index.less';
</script>
