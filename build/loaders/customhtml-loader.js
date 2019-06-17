var path = require('path');
var fs = require('fs');

module.exports = function(source){
    
    if(this.request.indexOf('/other/') > -1) {
       
        return source;
    }

    if(this.request.indexOf('/zcommon') > -1) {

        return source;
    }


    if(this.request.indexOf('projects') > -1){

        let baseName = path.basename(this.request, '.js');
        let projectCustomCssPath = path.join(process.cwd(), `./src/projects/${process.env.NODE_PRODUCT}/zcommon/public.less`);
        let projectCustomJsPath = path.join(process.cwd(), `./src/projects/${process.env.NODE_PRODUCT}/zcommon/public.js`);


        let commonHeader = `
            import 'babel-polyfill';
            import Vue from 'vue';
            import App from './${baseName}.vue';
            import FastClick from 'fastclick';
            import { filters, directives } from 'vueExtends'
            import { Confirm, Alert } from 'components';
            import VueClipboard from 'vue-clipboard2'

            Vue.use(VueClipboard)
            
            let CurrentPage;

            if(${fs.existsSync(projectCustomCssPath)}){

                require('${projectCustomCssPath}');
             }

            if(${fs.existsSync(projectCustomJsPath)}){

                CurrentPage = require('${projectCustomJsPath}');
            } else {

                CurrentPage = require('common/js/global_event/currentPage.js');
            }

            FastClick.attach(document.body);

            Vue.use(filters);
            Vue.use(directives);
          
        `;

        let commonFooter = `
                import 'libs/flexible.js';
                import 'common/css/public.less';
                import './${baseName}.less';

                
                utils.extend(App, page);
                new Vue({

                    el: '#app',
                    template: '<div id="app"><App/><Confirm ref="confirm"></Confirm><Alert ref="alert"></Alert></div>',
                    components: { App, Confirm, Alert},

                    mounted() {

                        window.$confirm = this.$refs.confirm;
                        window.$alert = this.$refs.alert;
                        

                        this.$nextTick(() => {
                            
                            let currentPage = new CurrentPage;
                            // setTimeout(function() {
                                // currentPage.init();
                            // },5000)
                            
                        })
                    }
                })
        `;

        source = commonHeader + source + commonFooter;
    }
    return source;
}
