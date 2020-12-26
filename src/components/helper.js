const timeout = (t) => {
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, t))
}

class BrowserD {
    // supersmall = 411;
    // small = 576;
    // medium = 768;
    // tablet = 840;
    // desktop = 960;
    // navbarbreack = 995;
    // widescreen = 1200;
    // superwidescreen = 1400;

    static get width() {
        const x = window.innerWidth
        if (x > 1200)
            return "superwidescreen"
        else if (x > 995)
            return 'widescreen'
        else if (x > 960)
            return 'widescreen'
        else if (x > 840)
            return 'desktop'
        else if (x > 760)
            return 'tablet'
        else if (x > 576)
            return 'medium'
        else if (x > 411)
            return 'small'
        else
            return 'supersmall'
    }
}

export { timeout, BrowserD }