type BackBtnStyle = {
    background: string;
    border: string;
    color: string;
    'box-shadow'?: string;
};

function isDesktop() {
    return window.innerWidth > 700;
}

export const useAppState = defineStore('appState', {
    state: () => ({
        isLoaded: false,
        navigator: {
            backBtnStyle: {
                background: '',
                border: '',
                color: '',
                'box-shadow': '',
            } as BackBtnStyle,
            music: {
                isLoaded: false,
                isOpen: false,
                showInNav: false,
                showText: false,
            },
            back: {
                showInNav: true,
                showText: false,
            },
        },
    }),
    actions: {
        // loading
        doneLoadingApp() {
            this.isLoaded = true;
        },
        // music

        loadMusic() {
            this.navigator.music.isLoaded = true;
            this.navigator.music.isOpen = true;
            this.navigator.music.showInNav = true;
        },

        openMusic() {
            this.navigator.music.isOpen = true;
        },

        closeMusic() {
            this.navigator.music.isOpen = false;
        },

        changeStyle(style: BackBtnStyle) {
            this.navigator.backBtnStyle['box-shadow'] = '';
            Object.assign(this.navigator.backBtnStyle, style);
        },

        // back btn
        showBackBtn() {
            this.navigator.back.showInNav = true;
        },
        hideBackBtn() {
            this.navigator.back.showInNav = false;
        },

        // show text of buttons
        specifyStatusOfNavTextBtns() {
            if (isDesktop()) {
                this.navigator.music.showText = true;
                this.navigator.back.showText = true;
            } else {
                this.navigator.music.showText = false;
                this.navigator.back.showText = false;
            }
        },
        showBackText() {
            this.navigator.back.showText = true;
            if (isDesktop() === false)
                setTimeout(() => {
                    this.navigator.back.showText = false;
                }, 5100);
        },

        showMusicText() {
            this.navigator.music.showText = true;
            if (isDesktop() === false)
                setTimeout(() => {
                    this.navigator.music.showText = false;
                }, 5100);
        },
    },
    getters: {
        level: (state) => {
            return (
                Number(state.navigator.music.showInNav) +
                Number(state.navigator.back.showInNav)
            );
        },

        backBtnStyle: (state) => {
            return state.navigator.backBtnStyle;
        },

        isShowBackBtn: (state) => {
            return state.navigator.back.showInNav;
        },

        isShowBackText: (state) => {
            return state.navigator.back.showText;
        },

        musicIsLoaded: (state) => {
            return state.navigator.music.isLoaded;
        },

        musicIsOpen: (state) => {
            return state.navigator.music.isOpen;
        },

        showMusicBtn: (state) => {
            return state.navigator.music.showInNav;
        },

        isShowMusicText: (state) => {
            return state.navigator.music.showText;
        },
    },
});
