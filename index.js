let content = [
    {
        settle_by_price: "settle_by_price",
        key:"key",
        test1:"test1"
    },
    {
        settle_by_price: "settle_by_price1",
        key:"key1",
        test2:"test2"
    },
    {
        key:"key2",
        test3:"test3"
    }
]
let data = [];

let newContent = content.filter(item => {

    if(item.settle_by_price) return item;
})

