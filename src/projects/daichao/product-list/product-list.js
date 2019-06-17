import { utils } from 'libs';
import productName from './other/product-name'
import productCard from 'components/product-card/index.vue';

const page = {

    components: {
        productCard
    },

    data() {

        return {
            
            productName: productName,
            productList: [{
                 title: "Akulaku",
                 img: "Rp.5.000.000-Rp.2.000.000",
                 amount: "Rp.5.000.000-Rp.2.000.000",
                 rate: "1% Bunga",
                 jumlah: "Jumlah Pinjaman",
                 time: "Tenor 8-30 hari"
             }]
        }
    },

    created() {

        // let productName = utils.getParams('productName');
        let productName = "phone"
        this.productName.forEach(item => {
            
            if(item.symbol == productName) {

                item.selected = true;
            } else {

                item.selected = false;
            }
        })

        this.getProductData(productName);

        utils.addEvent('产品列表页面到达')
    },

    methods: {
        
        switchDiffProduct(name) {
          
            this.productName.forEach(item => {

                if(item.symbol == name) {

                    item.selected = true;
                } else {

                    item.selected = false;
                }
            })

            this.getProductData(name)
        },

        getProductData(name){
            
            let url = ''

            switch(name){
                case 'phone':

                    url = 'http://47.98.136.225/h5/place/daichao/daichaolist/shoujihaojiunengdai.json'
                break;
                case 'identity' :
                    
                    url = 'http://47.98.136.225/h5/place/daichao/daichaolist/shenfenzhen.json';
                break;
                case 'black':
                    url = "http://47.98.136.225/h5/place/daichao/daichaolist/heihuyenengdai.json"
                break;
                case 'new':
                    url = "http://47.98.136.225/h5/place/daichao/daichaolist/xinpinkouzi.json"
                break
            }


            let promise = utils.fetch({
                
                method: 'get',
                url, 
                isNeedIdentity:false
            })

            promise.then(data => {
                
                this.productList = data.list;
            })

        },
        toOtherWebSite(item) {

            utils.addEvent(item.title);
            
            utils.tipInfo({

                content: '正在前往...',
                callback() {

                   utils.openBrowser({

                        url: item.url
                   }) 
                }
            })
            
            // location.href = url;
         
        }
    }
}

