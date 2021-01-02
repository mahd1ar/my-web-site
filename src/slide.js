import "./css/slide.scss";
import anime from 'animejs/lib/anime.es.js';
import 'alpinejs'

window.alpinefn = function () {

    return {
        open: false,
        currentSlide: 1,
        sections: [
            {
                id: 1,
                imgs: 'https://source.unsplash.com/pbMu5q0hYbg/900x400',
                txt: "touch my body"
            },
            {
                id: 2,
                imgs: "https://source.unsplash.com/0Oaxh0Jip9s/900x400",
                txt: "chetori"
            }
        ],
        nextPage() {
            this.currentSlide++
            this.runAnimation('next')
        },
        runAnimation(direction) {
            const selection = document.querySelectorAll('[data-id]')
            const targets = Array.from(selection).filter(e => {
                return e.dataset.id == String(this.currentSlide) || e.dataset.id == String(this.currentSlide-1)
            })

            anime({
                targets,
                translateX: (element,index)=>{
                    return index !== 0 ? false : ["-100%","0%"]
                },
                opacity:(element,index)=>{
                    return index === 0 ? [0,1] : [1,0]
                },
                duration: 1200,
                easing:"easeOutExpo"
            })

            anime({
                targets: targets.map(e=>e.children[1].children[0]),
                width:['0','100%'],
                delay: 880,
                easing:"easeInOutExpo"
            })

        }
    }
}