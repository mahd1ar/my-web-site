import 'bootstrap-4-grid/css/grid.min.css';
import "./css/education.scss";

const h1 = import('./img/frame/1.png');
const h2 = import('./img/frame/2.png');
const h3 = import('./img/frame/3.png');
const h4 = import('./img/frame/4.png');
const h5 = import('./img/frame/5.png');

Promise.all([h1, h2, h3, h4, h5]).then((valuse) => {
    const img = document.querySelector('#love img');

    let i = 0;
    let d = true;
    setInterval(() => {
        img.src = valuse[i].default;
        if (i === 4)
            d = false;
        else if (i === 0)
            d = true;

        d ? i++ : i--;
    }, 250);
});

import('./giphy/studycat.webp').then(({ default: gif }) => {
    document.querySelectorAll('img')[0].src = gif;
});

import('./giphy/fail.webp').then(({ default: gif2 }) => {
    document.querySelectorAll('img')[1].src = gif2;
});

import('./giphy/hackerman.webp').then(({ default: gif3 }) => {
    document.querySelectorAll('img')[3].src = gif3;
});

import('./giphy/mrmobile.webp').then(({ default: gif }) => {
    document.querySelectorAll('img')[2].src = gif;
});

class Box {
    constructor(count, fr) {
        this.fr = fr;
        this.count = count;
        this.boxs = [];
        this.placeholder = document.querySelector('#clitch-box-pl');
        this.create();
    }

    rand(min = 1, max = 7) {
        return (Math.random() * max) + min;
    }

    create() {
        for (let i = 0; i < this.count; i++) {

            const div = document.createElement('DIV');

            div.classList.add('giltch-box');

            this.placeholder.appendChild(div);
        }
    }

    applyEffects(element) {
        const clipPathArray = [
            "polygon(50% 0%, 100% 38%, 100% 100%, 18% 100%, 0% 38%)",
            "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            "polygon(50% 0%, 100% 0, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 0 83%, 0% 43%, 17% 12%)",
            "inset(5% 0 15% 0)"
        ];

        try {
            element.style.clipPath = clipPathArray[Math.floor(Math.random() * clipPathArray.length)];
        } catch (error) {

        }
    }

    start() {
        Array.from(this.placeholder.children)
            .forEach((div) => {

                const rnd = `${String(this.rand())}px`;
                const positionX = `${String(this.rand(0, window.innerWidth))}px`;
                const positionY = `${String(this.rand(0, window.innerHeight))}px`;

                div.style.width = rnd;
                div.style.height = rnd;
                div.style.top = positionY;
                div.style.left = positionX;
                this.applyEffects(div);
            });


    }

    reset() {
        this.boxs.length = 0;
        this.placeholder.innerHTML = '';
    }
}

const oldTv = new Box(22);
oldTv.start();

setInterval(() => {
    oldTv.start();
}, 1100);

window.onload = async () => {
    console.log('win loaded')
    const options = {
        "animate": true,
        "patternWidth": 267.23,
        "patternHeight": 500,
        "grainOpacity": 0.11,
        "grainDensity": 1.51,
        "grainWidth": 1.5,
        "grainHeight": 1
    };
    grained("#sec", options);


};