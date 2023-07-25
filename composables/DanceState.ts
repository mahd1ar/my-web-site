export const useDanceState = definePiniaStore('DanceState', {
    state: () => ({
        _musicState: 'stoped' as 'play' | 'pause' | 'stoped',
        _isMusicLoaded: false,
        _isDiscoBallLoaded: false,
    }),
    actions: {
        setDiscobalIsLoaded() {
            console.log(8888);
            this._isDiscoBallLoaded = true;
        },

        setMusicIsloaded() {
            console.log(9999);
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
