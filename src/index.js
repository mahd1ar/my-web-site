import './css/home.scss'
// import anime from 'animejs'
import { imgSrc, Glitch } from './components/glitchImg.js'
import Scrambler from 'scrambling-text'
import colorPallet from './components/colorPallet.js'

window.onload = main()


window.globals = new Map();

function initScrambler() {
    const webdev = document.querySelector('#webdev h3')
    const scrambler = new Scrambler();
    const whatIDo = [
        { str: 'Linux System Adminstrator', color: colorPallet.green },
        { str: 'Network manager', color: colorPallet.blue },
        { str: 'web developer', color: colorPallet.pink },
    ]
    const handleScramble = (text) => {
        webdev.innerText = text;
    }

    let conter = 0
    setInterval(() => {
        const item = whatIDo[conter % whatIDo.length]
        scrambler.scramble(item['str'], handleScramble);
        setTimeout(() => {
            webdev.style.color = item['color']
        }, 500);
        conter++
    }, 4500);

}

async function main() {

    // scamble I'am ...
    initScrambler()


    var grainedOptions = {
        "animate": true,
        "patternWidth": 267.23,
        "patternHeight": 500,
        "grainOpacity": 0.11,
        "grainDensity": 1.51,
        "grainWidth": 1.5,
        "grainHeight": 1
    }
    
    grained('#main-section', grainedOptions)

    // >
    document.querySelectorAll('div.effect-crt').forEach(f => {

        f.addEventListener('mouseover', e => {
            const mark = document.querySelector('#gtmark')
            const { x, y } = e.target.getBoundingClientRect()

            mark.style.top = y + 'px';
            mark.style.left = x + 'px';

        })
    })


    return 0;

}



// P5 specific

let windowW = 330;
let windowH = 744;
let isLoaded = false;
let glitch

window.setup = function () {
    background(0);
    const canvas = createCanvas(windowW, windowH);
    loadImage(imgSrc, function (img) {
        glitch = new Glitch(img);
        isLoaded = true;
    });
    canvas.elt.id = "imgProfile";
    canvas.parent('canvas-pic');
    frameRate(10)

}

window.draw = function () {
    clear();
    background('rgba(17,17,17, 0.0)');

    if (isLoaded) {
        glitch.show();
    }

    // fill(255, 255, 255);
    // textSize(14);
    // text('FPS: ' + floor(frameRate()), 20, 30);

}
