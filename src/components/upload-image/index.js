import { utils } from 'libs';
import EXIF from './exif.js';
import MegaPixImage from './MegaPixImage';

export default {

    props:{

        preViewImgEle:{

            type:String,
            required:true
        }
    },

    methods: {

        watchChangeFile(e) {

            let target = e.target;
            let file = target.files[0];

            if (!/image\/\w+/ig.test(file.type)) {

                utils.tipInfo({ content: '请上传图片类型的文件' });
                return;
            }

            let orientation = 1;

            EXIF.getData(file, () => {

                orientation = EXIF.getTag(file, 'Orientation')

                let mImg = new MegaPixImage(file);

                let max = 320;
                
                let preViewImgEle = document.querySelector(this.preViewImgEle);
                
                mImg.render(preViewImgEle, {

                    maxHeight: max,
                    orientation: orientation
                })
            })
        }
    }
}