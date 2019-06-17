import { utils } from 'libs';
export default {
  name: 'productCard',
  props: {
    title: {
      type: String,
      default: 'Akulaku'
    },
    img:{
      type: String,
      default: 'Rp.5.000.000-Rp.2.000.000'
    },
    amount:{
      type: String,
      default: 'Rp.5.000.000-Rp.2.000.000'
    },
    rate:{
      type: String,
      default: '1% Bunga'
    },
    jumlah:{
      type: String,
      default: '1% Bunga'
    },
    time:{
      type: String,
      default: 'Tenor 8-30 hari'
    }
  }, 
  data() {
    return {
      
    }
  },
  methods: {
   toGo() {
    utils.go("product-details")
   }
  },
}
