<script lang="ts" setup>
import { useAppState } from '~/store/appState';

const appData = useAppState()

const openDialog = ref(true)
const audioEl = ref<HTMLAudioElement[]>([])
const musics = ref([
  {
    isPlaying: false,
    artist: 'Digital Retro',
    title: 'Eye of the Tiger (Synthwave cover)',
    img: 'img/channels4_profile.jpg',
    src: 'mp3/Survivor - Eye of the Tiger (Synthwave cover)-6zW0amE2KRM.mp3'
  },
  {
    isPlaying: false,
    artist: 'Jarvis9999',
    title: 'Prevail',
    img: 'img/prevail.jpg',
    src: 'mp3/Prevail-617557290.mp3'
  },
  {
    isPlaying: false,
    artist: 'Mattie Maguire ',
    title: 'Racing Hearts',
    img: 'img/artworks-NeKTV02HdHfj-0-t500x500.png',
    src: 'mp3/Racing Hearts-675134984.mp3'
  },
  {
    isPlaying: false,
    artist: 'AndrisMusic',
    title: 'Synthwave',
    img: 'img/synthwave.jpg',
    src: 'mp3/Trip To Outer Space-v_tvo81ZKJs.webm'
  }
])

function endMusic (index: number) {
  musics.value[index].isPlaying = false
}

function playpause (index: number) {
  if (musics.value[index].isPlaying) audioEl.value[index].pause()
  else audioEl.value[index].play()

  musics.value[index].isPlaying = !musics.value[index].isPlaying

  for (let i = 0; i < musics.value.length; i++) {
    if (i === index) continue
    else {
      audioEl.value[i].pause()
      audioEl.value[i].currentTime = 0
      musics.value[i].isPlaying = false
    }
  }
}
</script>

<template>
  <div
    class="fixed flex justify-center items-center top-0 z-30 w-full"
    :style="{ height: openDialog ? '100%' : '0%' }"
  >
    <div
      @click="appData.closeMusic()"
      class="absolute h-full justify-center items-center top-0 w-full bg-black bg-opacity-70"
    ></div>
    <!-- @click.stop="close" -->
    <transition
      name="anim"
      @after-leave="openDialog = false"
      @before-enter="openDialog = true"
    >
      <div
        v-show="appData.musicIsOpen"
        id="soundcloud-container"
        class="container sm:w-60 md:w-2/3 lg:w-1/2 relative"
      >
        <div class="bg-black p-3">
          <div class="tui-border relative">
            <h2
              class="text-gray-200 absolute font-chakra bg-black -top-5 left-2 px-3 uppercase flex items-center gap-2"
            >
              <svg
                aria-hidden="true"
                role="img"
                width="1.2rem"
                height="1.2rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10 13h6V5h6v4h-4v10h-8v-6zm2 2v2h4v-2h-4zM2 17h6v2H2v-2zm6-4H2v2h6v-2zM2 9h12v2H2V9zm12-4H2v2h12V5z"
                />
              </svg>
              playlist
            </h2>
            <div class="p-3 flex flex-col gap-3">
              <div
                v-for="(m, index) in musics"
                :key="index"
                class="flex items-center font-archade gap-2"
              >
                <div class="w-16 sm:w-28 flex-shrink-0">
                  <img class="object-cover h-full w-full" :src="m.img" alt="" />
                </div>
                <div
                  class="h-full gap-2 w-full flex justify-between px-0 sm:px-8"
                >
                  <div class="flex flex-col gap-2">
                    <div class="text-gray-100">{{ m.title }}</div>
                    <div class="text-gray-400 text-xs">{{ m.artist }}</div>
                  </div>
                  <div class="mt-auto w-10 flex-shrink-0 ml-auto">
                    <div>
                      <button
                        class="tui-shadow inline-block"
                        @click="playpause(index)"
                      >
                        <svg
                          v-if="m.isPlaying === false"
                          class="text-gray-100"
                          aria-hidden="true"
                          role="img"
                          width="2.5em"
                          height="2.5em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
                          />
                        </svg>
                        <!-- pause -->
                        <svg
                          v-else
                          class="text-gray-100"
                          aria-hidden="true"
                          role="img"
                          width="2.5em"
                          height="2.5em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M10 4H5v16h5V4zm9 0h-5v16h5V4z"
                          />
                        </svg>
                      </button>
                      <audio
                        @ended="endMusic(index)"
                        class="hidden"
                        ref="audioEl"
                        controls
                      >
                        <source :src="m.src" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.anim {
  &-leave-active,
  &-enter-active {
    transition: all 0.2s ease;
    position: fixed;
  }
  &-enter-from,
  &-leave-to {
    position: fixed;

    opacity: 0;
    transform: translate(50vw, 50vh) scale(0.2);
  }
}
.tui-border {
  border: 8px double #b3b3b3;
}

.tui-shadow {
  background: blue;
  box-shadow: 8px 7px #b3b3b3;
  &:hover {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px #b3b3b3;
  }

  &:active {
    background: rgb(0, 221, 255);
    transform: translate(4px, 4px);
    box-shadow: 4px 4px #b3b3b3;
  }
}
</style>
