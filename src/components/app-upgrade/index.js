

import {newApp} from 'listenNative';

export default {
  name: 'AppUpgrade',
  props:{
      title: {
        type: String,
      },
      updateContent: {
        type: String
      },
      url:{
        type: String
      }
  },
  data() {
    return {
    
    }
  },
  created () {
     
  },
  methods: {
    // 复制成功
    onCopy() {
      var _this = this;
      if (process.env.NODE_PLATFORM == 'app') {
        document.addEventListener('deviceready', () => {
          newApp.init(_this.url);
        }, false);
      }
    },
  }
}
