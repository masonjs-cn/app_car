import {CurrentPageBase} from 'globalEvent';
import { utils } from 'libs';

module.exports = class CurrentPage extends CurrentPageBase {

    constructor() {

        super()
    }

    addEventToTabBar() {

        this.tabbars && this.tabbars.addEventListener('click', function(event) {

            let className = event.target.className;

            if (className.indexOf('one') > -1) {

                if (location.href.indexOf('index') > 0) return;

                utils.go('index');
            }

            if (className.indexOf('two') > -1) {

                if (location.href.indexOf('recommended') > 0) return;

                utils.go('recommended');
            }

            if (className.indexOf('three') > -1) {

                if (location.href.indexOf('personal-center') > 0) return;

                utils.go('personal-center');
            }
        })
    }
}