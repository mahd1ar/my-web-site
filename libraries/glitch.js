class Glitch {
    constructor(img,p) {
        this.p = p;
        this.channelLen = 4;
        this.imgOrigin = img;
        this.imgOrigin.loadPixels();
        this.copyData = [];
        this.flowLineImgs = [];
        this.shiftLineImgs = [];
        this.shiftRGBs = [];
        this.scatImgs = [];
        this.throughFlag = true;
        this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

        // flow line
        for (let i = 0; i < 1; i++) {
            let o = {
                pixels: null,
                t1: this.p.floor(this.p.random(0, 1000)),
                speed: this.p.floor(this.p.random(4, 24)),
                randX: this.p.floor(this.p.random(24, 80))
            };
            this.flowLineImgs.push(o);
        }

        // shift line
        for (let i = 0; i < 6; i++) {
            let o = null;
            this.shiftLineImgs.push(o);
        }

        // shift RGB
        for (let i = 0; i < 1; i++) {
            let o = null;
            this.shiftRGBs.push(o);
        }

        // scat imgs
        for (let i = 0; i < 3; i++) {
            let scatImg = {
                img: null,
                x: 0,
                y: 0
            };
            this.scatImgs.push(scatImg);
        }
    }

    replaceData(destImg, srcPixels) {
        for (let y = 0; y < destImg.height; y++) {
            for (let x = 0; x < destImg.width; x++) {
                let r, g, b, a;
                let index;
                index = (y * destImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                destImg.pixels[r] = srcPixels[r];
                destImg.pixels[g] = srcPixels[g];
                destImg.pixels[b] = srcPixels[b];
                destImg.pixels[a] = srcPixels[a];
            }
        }
        destImg.updatePixels();
    }

    flowLine(srcImg, obj) {

        let destPixels,
            tempY;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        obj.t1 %= srcImg.height;
        obj.t1 += obj.speed;
        //tempY = this.p.floor(noise(obj.t1) * srcImg.height);
        tempY = this.p.floor(obj.t1);
        for (let y = 0; y < srcImg.height; y++) {
            if (tempY === y) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let index;
                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    destPixels[r] = srcImg.pixels[r] + obj.randX;
                    destPixels[g] = srcImg.pixels[g] + obj.randX;
                    destPixels[b] = srcImg.pixels[b] + obj.randX;
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftLine(srcImg) {

        let offsetX;
        let rangeMin, rangeMax;
        let destPixels;
        let rangeH;

        destPixels = new Uint8ClampedArray(srcImg.pixels);
        rangeH = srcImg.height;
        rangeMin = this.p.floor(this.p.random(0, rangeH));
        rangeMax = rangeMin + this.p.floor(this.p.random(1, rangeH - rangeMin));
        offsetX = this.channelLen * this.p.floor(this.p.random(-40, 40));

        for (let y = 0; y < srcImg.height; y++) {
            if (y > rangeMin && y < rangeMax) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let r2, g2, b2, a2;
                    let index;

                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    r2 = r + offsetX;
                    g2 = g + offsetX;
                    b2 = b + offsetX;
                    destPixels[r] = srcImg.pixels[r2];
                    destPixels[g] = srcImg.pixels[g2];
                    destPixels[b] = srcImg.pixels[b2];
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftRGB(srcImg) {

        let randR, randG, randB;
        let destPixels;
        let range;

        range = 16;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        randR = (this.p.floor(this.p.random(-range, range)) * srcImg.width + this.p.floor(this.p.random(-range, range))) * this.channelLen;
        randG = (this.p.floor(this.p.random(-range, range)) * srcImg.width + this.p.floor(this.p.random(-range, range))) * this.channelLen;
        randB = (this.p.floor(this.p.random(-range, range)) * srcImg.width + this.p.floor(this.p.random(-range, range))) * this.channelLen;

        for (let y = 0; y < srcImg.height; y++) {
            for (let x = 0; x < srcImg.width; x++) {
                let r, g, b, a;
                let r2, g2, b2, a2;
                let index;

                index = (y * srcImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                r2 = (r + randR) % srcImg.pixels.length;
                g2 = (g + randG) % srcImg.pixels.length;
                b2 = (b + randB) % srcImg.pixels.length;
                destPixels[r] = srcImg.pixels[r2];
                destPixels[g] = srcImg.pixels[g2];
                destPixels[b] = srcImg.pixels[b2];
                destPixels[a] = srcImg.pixels[a];
            }
        }

        return destPixels;
    }

    getrandomRectImg(srcImg) {
        let startX;
        let startY;
        let rectW;
        let rectH;
        let destImg;
        startX = this.p.floor(this.p.random(0, srcImg.width - 30));
        startY = this.p.floor(this.p.random(0, srcImg.height - 50));
        rectW = this.p.floor(this.p.random(30, srcImg.width - startX));
        rectH = this.p.floor(this.p.random(1, 50));
        destImg = srcImg.get(startX, startY, rectW, rectH);
        destImg.loadPixels();
        return destImg;
    }

    show() {

        // restore the original state
        this.replaceData(this.imgOrigin, this.copyData);

        // sometimes pass without effect processing
        let n = this.p.floor(this.p.random(100));
        if (n > 75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(() => {
                this.throughFlag = true;
            }, this.p.floor(this.p.random(40, 400)));
        }
        if (!this.throughFlag) {
            this.p.push();
            this.p.translate((this.p.width - this.imgOrigin.width) / 2, (this.p.height - this.imgOrigin.height) / 2);
            this.p.image(this.imgOrigin, 0, 0);
            this.p.pop();
            return;
        }

        // flow line
        this.flowLineImgs.forEach((v, i, arr) => {
            arr[i].pixels = this.flowLine(this.imgOrigin, v);
            if (arr[i].pixels) {
                this.replaceData(this.imgOrigin, arr[i].pixels);
            }
        })

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (this.p.floor(this.p.random(100)) > 50) {
                arr[i] = this.shiftLine(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            } else {
                if (arr[i]) {
                    this.replaceData(this.imgOrigin, arr[i]);
                }
            }
        })

        // shift rgb
        this.shiftRGBs.forEach((v, i, arr) => {
            if (this.p.floor(this.p.random(100)) > 65) {
                arr[i] = this.shiftRGB(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            }
        })

        this.p.push();
        this.p.translate((this.p.width - this.imgOrigin.width) / 2, (this.p.height - this.imgOrigin.height) / 2);
        this.p.image(this.imgOrigin, 0, 0);
        this.p.pop();

        // scat image
        this.scatImgs.forEach((obj) => {
           this.p.push();
            this.p.translate((this.p.width - this.imgOrigin.width) / 2, (this.p.height - this.imgOrigin.height) / 2);
            if (this.p.floor(this.p.random(100)) > 80) {
                obj.x = this.p.floor(this.p.random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
                obj.y = this.p.floor(this.p.random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
                obj.img = this.getrandomRectImg(this.imgOrigin);
            }
            if (obj.img) {
                this.p.image(obj.img, obj.x, obj.y);
            }
            this.p.pop();
        })

    }

}

export { Glitch }