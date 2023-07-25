export default class Box {
    constructor(count, fr) {
        this.fr = fr;
        this.count = count;
        this.boxs = [];
        this.placeholder = document.querySelector('#glitch-box-pl');
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
            element.style.clipPath = clipPathArray[Math.floor(Math.random() * clipPathArray.length)]
        } catch (error) {

        }
    }

    start() {
        Array.from(this.placeholder.children)
            .forEach( div => {

                const rnd = String(this.rand()) + 'px',
                    positionX = String(this.rand(0, window.innerWidth)) + 'px',
                    positionY = String(this.rand(0, window.innerHeight)) + 'px';

                div.style.width = rnd;
                div.style.height = rnd;
                div.style.top = positionY;
                div.style.left = positionX;
                this.applyEffects(div)
            })


    }

    reset() {
        this.boxs.length = 0;
        this.placeholder.innerHTML = "";
    }
}