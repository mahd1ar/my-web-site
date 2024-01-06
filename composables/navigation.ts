import { useAppState } from '~/store/appState';

export default function useNavigation() {
    const appState = useAppState();
    let counter = 0,
        stateIsPending = false;
    const timeoutes = [5.1, 11.1, 14, 30, 45, 60];

    onMounted(async () => {
        stateIsPending = true;
        const ms =
            (timeoutes[counter] || timeoutes[timeoutes.length - 1]) * 1000;
        await timeout(ms);

        if (stateIsPending) {
            appState.showBackText();
            await timeout(700);
            appState.showMusicText();
            stateIsPending = false;
            counter++;
        }
    });

    onUnmounted(() => {
        stateIsPending = false;
    });
}
