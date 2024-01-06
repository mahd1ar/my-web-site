<script lang="ts" setup>
import { useDanceState } from '~/store/DanceState';

const danceState = useDanceState()
const audioEl = ref<HTMLAudioElement | null>(null)
const buttenIsPressedForTheFirstTime = ref(false)

function buttonIsClicked () {
  buttenIsPressedForTheFirstTime.value = true
  if (danceState.getMusicState === 'halt') return

  if (audioEl.value) audioEl.value.volume = 0.05
  if (
    danceState.getMusicState === 'pause' ||
    danceState.getMusicState === 'stoped'
  )
    audioEl.value?.play()
  else if (danceState.getMusicState === 'play') audioEl.value?.pause()
}
</script>

<template>
  <div class="relative">
    <ClientOnly>
      <audio
        ref="audioEl"
        @loadedmetadata="danceState.setMusicIsloaded()"
        @pause="danceState.setMusicState('pause')"
        @play="danceState.setMusicState('play')"
        @ended="danceState.setMusicState('stoped')"
        controls
        class="sr-only"
      >
        <source src="/mp3/blue.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </ClientOnly>

    <img
      v-if="buttenIsPressedForTheFirstTime === false"
      class="absolute translate-x-full -translate-y-1/2 top-0 -right-10 max-w-sm"
      src="/donotclickonthisbutton.png"
      alt=""
    />
    <button class="relative group">
      <div class="w-full h-full absolute left-4 top-4 bg-gray-400 "></div>
      <div
        @click="buttonIsClicked"
        style="background-color: blue;"
        class=" relative  w-40 h-40 p-2 border-spacing-2  text-gray-300 group-hover:top-2 group-hover:left-2"
      >
        <svg
          v-if="
            danceState.getMusicState === 'stoped' ||
              danceState.getMusicState === 'pause'
          "
          class="w-full h-full"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
          />
        </svg>
        <svg
          v-else-if="danceState.getMusicState === 'halt'"
          class="w-full h-full p-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18 2H6v6h2v2h2v4H8v2H6v6h12v-6h-2v-2h-2v-4h2V8h2V2zm-2 6h-2v2h-4V8H8V4h8v4zm-2 6v2h2v4H8v-4h2v-2h4z"
          />
        </svg>
        <svg
          class="w-full h-full"
          v-else-if="danceState.getMusicState === 'play'"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" />
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped></style>
