import { onMounted, onUnmounted } from 'vue';
import Box from '@/libraries/Box';

export default function useBox() {
    let int: number;
    onMounted(() => {
        const oldTv = new Box(22);
        oldTv.start();

        const boxesInterval = setInterval(() => {
            oldTv.start();
        }, 1100);
        // TODO
        // @ts-ignore
        int = boxesInterval;
    });

    onUnmounted(() => {
        clearInterval(int);
    });
}
