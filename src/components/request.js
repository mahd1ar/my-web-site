// import axios from 'axios';
import { isMobile, browserVer } from './helper';

export
    class Rquest {
    // static URI = 'https://glitch.me'
    constructor(params) {
        this.params = params;
        Array
            .from(document.querySelectorAll('[data-ref]'))
            .forEach(element => {
                element.addEventListener('click', () => {
                    this.onClick(element);
                });
            });
    }

    onClick(element) {
        const bv = browserVer();

        const info = { link: element.dataset.ref };
        info.date = Date();
        info.os = Math.round((new Date()).getTime() / 1000);
        info.device = isMobile() ? 'mobile' : 'desktop';
        info.os = navigator.platform;
        info.browser = `${bv.browserName  }-${  bv.browserVersion}`;

        console.log(info);
        if (this.params.blank === true)
            window.open(info.link);
        else
            window.location.href = info.link;
    }

    async post(params) {
        // console.log(params);
    }
}