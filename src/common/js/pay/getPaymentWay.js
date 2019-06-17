export default data => {
    
    data.forEach(item => {

        switch (item.accountType) {

            case "501":
                item.name = "快捷支付"; //支付名称
                item.class = "kuaijie"; //用来显示图标的class
                item.selected = !!item.selected ? true : false; //用来判断是否选中了
                break;
            case "801":
                item.name = "微信支付";
                item.class = "weixin";
                item.selected = !!item.selected ? true : false;
                break;
            case "1001":
                item.name = "易宝支付";
                item.class="yibao";
                item.selected = !!item.selected ? true: false;
                break;
            case "1101":
                item.name = "合利宝支付";
                item.class="helibao";
                item.selected = !!item.selected ? true: false;
                break;
        }
    })
    
    data = data.filter(item => {
        
        if(process.env.NODE_PLATFORM === 'app') {

            if(item.class === 'weixin') return false;
        }
        
        return true;
    })


    return data;
}