<template>
    <div class="wrap">
        <div class="cardNo" v-html="replaceStr(cardNoShow)"></div>
        <div class="expirationTime">有效期:  {{time}}</div>
    </div>
</template>
<script>
    import index from './index.js';
    export default index;

    import './index.less';
</script>
