<script lang="ts" setup>
import { useDanceState } from '~/store/DanceState';

const danceState = useDanceState()
const audioEl = ref<HTMLAudioElement | null>(null)
const buttenIsPressedForTheFirstTime = ref(false)

const { playing,
  currentTime,
  duration,
  volume, } = useMediaControls(audioEl, {
    src: '/mp3/blue.mp3',
  })
function buttonIsClicked() {
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

const percentage = computed({
  
   get() {
    return (currentTime.value / duration.value ) * 100
  },
  set(val){
    console.log(val)
    currentTime.value = val * ( duration.value ) / 100
  }
  
})
</script>

<template>
  <div class="" :style="{
    '--progress': ~~((currentTime / duration) * 100), /*percent of progress*/
    '--progress-right': 'calc((130px * var(--progress)) / 100)',
    '--progress-left': 'calc(130px - var(--progress-right))',
    '--speed-spool': ['stoped', 'pause'].includes(danceState.getMusicState) ? '50s' : '5s',
    '--background': '#1d1d1d'

  }">

    <div class="container p-4 h-60 md:h-auto flex justify-center items-end">
      <div class="absolute md:relative ">

        <div class="scale-75 sm:scale-90 md:scale-100 tape">
          <div class="tape-screws">
            <div class="tape-screw">
              <div class="tape-screw-overflow">
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="tape-screw">
              <div class="tape-screw-overflow">
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="tape-screw">
              <div class="tape-screw-overflow">
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="tape-screw">
              <div class="tape-screw-overflow">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div class="tape-header">A
            <div class="tape-title">
              Back to the future
            </div>
          </div>
          <div class="tape-body">
            <div class="tape-window">
              <div class="tape-spools">
                <div class="tape-spool">
                  <div class="tape-spoolbar">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="tape-film-container">
                    <div class="tape-film"></div>
                  </div>
                </div>
                <div class="tape-spool">
                  <div class="tape-spoolbar">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div class="tape-film-container">
                    <div class="tape-film"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tape-footer">
            <div class="tape-holes">
              <div class="tape-hole tape-hole-radial"></div>
              <div class="tape-hole tape-hole-square"></div>
            </div>
            <div class="tape-screw">
              <div class="tape-screw-overflow">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="relative flex justify-center gap-2 -translate-y-4 md:translate-y-4 bg-black sm:border-4 border-pink-400/20 sm:px-2 "
  
  >
      <ClientOnly>
        <audio ref="audioEl" controls @loadedmetadata="danceState.setMusicIsloaded()"
          @pause="danceState.setMusicState('pause')" @play="danceState.setMusicState('play')"
          @ended="danceState.setMusicState('stoped')" class="sr-only" />

      </ClientOnly>

      <img v-if="buttenIsPressedForTheFirstTime === false"
        class="absolute translate-x-full -translate-y-1/2 top-0 -right-10 max-w-sm" src="/donotclickonthisbutton.png"
        alt="" />
      <!-- retro play button -->
      <button class="relative group shrink-0 ">
        <div @click="buttonIsClicked" style="background-color: #ff3470;color: #61274d;"
          class=" relative w-24 sm:w-[104px]  p-2 border-spacing-2  group-hover:top-2 group-hover:left-2 border-8 border-[#61274d]">
          <div style="background: #ef1549;" class="w-full h-4 absolute left-0 bottom-0 "></div>
          <div style="background: #fe6d99;" class="w-full h-1/2 absolute left-0 top-0 "></div>
          <svg v-if="danceState.getMusicState === 'stoped' ||
            danceState.getMusicState === 'pause'
            " class="w-full h-full relative" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" />
          </svg>
          <svg v-else-if="danceState.getMusicState === 'halt'" class="w-full h-full p-4 relative scale-125  animate-pulse"  viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M18 2H6v6h2v2h2v4H8v2H6v6h12v-6h-2v-2h-2v-4h2V8h2V2zm-2 6h-2v2h-4V8H8V4h8v4zm-2 6v2h2v4H8v-4h2v-2h4z" />
          </svg>
          <svg class="w-full h-full relative" v-else-if="danceState.getMusicState === 'play'" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" />
          </svg>
        </div>
      </button>
      <div class="w-full" >
        <div  class="flex items-center gap-2 px-4 w-full flex-nowrap" >
          <svg class="flex-shrink-0 text-pink-300" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6zm0 10H4v4h4zm10 0h-4v4h4z"/></svg>
          <span class="text-xl sm:text-2xl font-mono whitespace-nowrap">Blue (Da Ba Dee)  </span>
        </div>
        <div  class="flex items-center gap-2 px-4 w-full flex-nowrap" >
          <svg class="flex-shrink-0 text-pink-300" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2H9v2H7v6h2V4h6zm0 8H9v2h6zm0-6h2v6h-2zM4 16h2v-2h12v2H6v4h12v-4h2v6H4z"/></svg>
          <span class=" text-lg sm:text-xl font-mono">8 Bit Universe  </span>
        </div>
        <div class="h-16 w-full p-2 relative ">
          <div class="relative p-2 h-full" >
            <i
            style="left: 0.5rem ; top: 0.5rem" 
            class="absolute w-2 h-2 bg-black inline-block  z-10" />
            <i
            style="right: 0.5rem ; top: 0.5rem" 
            class="absolute w-2 h-2 bg-black inline-block  z-10" />
            <i
            style="right: 0.5rem ; bottom: 0.5rem" 
            class="absolute w-2 h-2 bg-black inline-block  z-10" />
            <i
            style="left: 0.5rem ; bottom: 0.5rem" 
            class="absolute w-2 h-2 bg-black inline-block  z-10" />
          
            
            
            <div class="  h-full w-full border-8 border-[#fe6d99]">
              
              <div class="bg-white h-full relative" :style="{width: percentage +'%'}"  >
    
                <span class="w-10 h-10 right-0 absolute z-10 pointer-events-none translate-x-1/2 -translate-y-1/2 " >
  
                  <img
  class="pointer-events-none" 
    src="/pixel-heart.svg"
  />
                  <!-- <svg 
                  stroke-width="1px"
      stroke="#E91E63"
                  class="text-rose-500 w-full h-full " viewBox="0 0 24 24">
                    <path fill="currentColor" stroke=""
                      d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4z" />
                  </svg> -->
                </span>
              </div>
              
              <input v-model="percentage" type="range" class="w-full absolute inset-0 opacity-0" min="0" max="100" >
            
              <div class="flex justify-between mt-2 font-mono z-50 relative bg-black" >
  
            <div>{{ "0"+ ~~(duration * percentage/100 / 60) +  ":" + ~~(duration * percentage/100)%60 }}</div>
            <div>{{ "0"+ ~~(duration/60) +  ":" + ~~duration%60 }}</div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/cassette-tape-css/base";
@use "~/assets/css/cassette-tape-css/tape";
</style>
