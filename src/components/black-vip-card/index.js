import storage from 'good-storage';

export default {
  name: 'blackVipCard',
  props: {
    //代表哪个页面调用了该登录组件
    // cardNo: {
    //   type: String,
    //   default: '1234567890129012'
    // },
    expirationTime: {
      type: String,
      default: '2018/9/20'
    }
  }, // 父组件传入数据， 数组形式 [ "连雨不知春去"，"一晴方觉夏深"]
  data() {
    return {
      cardNoShow: '1234567890129012',
      time: "2018/9/20"
    }
  },
  methods: {
    replaceStr(str) {
      return str.replace(/(\s)/g, '').replace(/(\d{4})/g, '$1&nbsp;&nbsp;');
    }
  },
  mounted: function () {
    let blackCardInfo = storage.get("blackCardInfo");

    if (blackCardInfo) {
      this.cardNoShow = blackCardInfo.cardNo;
      this.time = blackCardInfo.expirationTime;
    }
    
  }
}
