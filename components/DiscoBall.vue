<script lang="ts" setup>
import { useDanceState } from '~/store/DanceState';

const danseState = useDanceState()
</script>

<template>
  <div class="w-40 overflow-hidden fixed top-0 z-10">
    <ClientOnly>
      <img
        @load="danseState.setDiscobalIsLoaded()"
        src="/gifs/resume/wAMDg2ie2x7CQtFPcZ.webp"
        alt="discoball"
        class="w-full  transition-transform will-change-transform duration-1000 ease-out"
        :class="[
          danseState.getMusicState === 'play'
            ? 'translate-y-0'
            : '-translate-y-full'
        ]"
      />

      <!-- <img
        src="https://media.giphy.com/media/wAMDg2ie2x7CQtFPcZ/giphy.gif"
        alt="discoball"
        class="w-40 z-10  top-0 fixed  transition-transform will-change-transform duration-1000 ease-out"
        v-if="targetIsVisible === false && danseState.getMusicState === 'play'"
      /> -->
    </ClientOnly>
  </div>
</template>

<style scoped></style>
