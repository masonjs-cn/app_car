

export default {
  name: 'runHorse',
  props: ['lists'], // 父组件传入数据， 数组形式 [ "连雨不知春去"，"一晴方觉夏深"]
  data() {
    return {
      text: '' // 数组文字转化后的字符串
    }
  },
  methods: {
    move() {
      // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
      let width = document.getElementById('node').getBoundingClientRect().width+1000
      let box = document.getElementById('box')
      let copy = document.getElementById('copy')
      copy.innerText = this.text // 文字副本填充
      let distance = 0 // 位移距离
      //设置位移
      setInterval(function () {
        distance = distance - 1
        // 如果位移超过文字宽度，则回到起点
        if (-distance >= width) {
          distance = 16
        }
        box.style.transform = 'translateX(' + distance + 'px)'
      }, 20)
    },
    parentHandleclick(lists) {
      this.text = ''
      for (let i = 0; i < lists.length; i++) {
        this.text += '   ' + lists[i]
      }
      this.move();
    }
  },
  // 把父组件传入的arr转化成字符串
  mounted: function () {
    for (let i = 0; i < this.lists.length; i++) {
      this.text += '   ' + this.lists[i]
    }
  },
  created(){
     for (let i = 0; i < this.lists.length; i++) {
       this.text += '   ' + this.lists[i]
     }
  },
  // 更新的时候运动
  updated: function () {
    // this.move()
  }
}
