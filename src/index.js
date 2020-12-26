import './css/home.scss'
import { imgSrc, Glitch } from './components/glitchImg.js'
import colorPallet from './components/colorPallet.js'
import { BrowserD } from './components/helper';

window.globals = new Map();
const promises = [];

function onloadfunc() {
    return new Promise((resolve) => {
        window.onload = () => {
            console.log('window on load')
            resolve()
        }
    })
}

promises.push(onloadfunc())

async function initScrambler() {

    const { default: Scrambler } = await import('scrambling-text')


    const webdev = document.querySelector('#webdev h3')
    const scrambler = new Scrambler();
    const whatIDo = [
        { w:560,str: 'Linux System Adminstrator', color: colorPallet.green },
        { w:500,str: 'Network manager', color: colorPallet.cyan },
        { w:480,str: 'web developer', color: colorPallet.pink },
    ]

    let conter = 0
    setInterval(() => {
        const item = whatIDo[conter % whatIDo.length]
        scrambler.scramble(item['str'], (text) => {
            webdev.innerText = text;
        });
        scrambler.specialCharacters = item.str.split('')
        setTimeout(() => {
            const { color } = item
            webdev.style.color = color
        }, 500);
        conter++
    }, 2500);

}

function transition() {
    const html = document.querySelector('html'),
        loading = document.querySelector('.loading')
    html.style.overflowY = 'hidden'
    var layerClass = "." + 'top' + "-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
        layer.classList.toggle("active");
    }
    setTimeout(() => {
        loading.style.display = 'none'
    }, 1000);
    setTimeout(() => {
        Array.from(document.querySelectorAll('.top-layer'))
            .forEach(element => {
                element.style.display = 'none'
            })
        html.style.overflowY = ''
    }, 2000);
}

async function main() {
    console.log('init main function')
    // scamble I'am ...

    initScrambler();

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

    // setTimeout(() => {
    //     transition()
    // }, 1000);
    return 0;

}



// P5 specific

let windowW = 330;
let windowH = 744;
let isLoaded = false;
let glitch

window.setup = function () {

    console.log(BrowserD.width)
    switch (BrowserD.width) {
        case 'desktop':
            windowW = 300;
            windowH = 400;
            break;
        case 'medium':
            windowW = 350
            windowH = 450
            break;
        default:
            break;
    }
   
    background(0);
    const canvas = createCanvas(windowW, windowH);
    canvas.elt.id = "imgProfile";
    canvas.parent('canvas-pic');
    return new Promise((resolve) => {

        loadImage(imgSrc, function (img) {
            glitch = new Glitch(img);
            isLoaded = true;

            resolve()
        });
        frameRate(10)

    })
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
Promise.all(promises).then(() => {
    console.log('after promise all')
    main()
})