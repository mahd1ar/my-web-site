export const useDanceState = defineStore('DanceState', {
    state: () => ({
        _musicState: 'stoped' as 'play' | 'pause' | 'stoped',
        _isMusicLoaded: true,
        _isDiscoBallLoaded: false,
    }),
    actions: {
        setDiscobalIsLoaded() {
            this._isDiscoBallLoaded = true;
        },

        setMusicIsloaded() {
            this._isMusicLoaded = true;
        },

        setMusicState(state: typeof this._musicState) {
            this._musicState = state;
        },
    },
    getters: {
        getMusicState: (state) => {
            const isReadyToPlay =
                state._isMusicLoaded && state._isDiscoBallLoaded;
            return isReadyToPlay ? state._musicState : 'halt';
        },
    },
});
