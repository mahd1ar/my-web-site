<script lang="ts" setup>
const danceState = useDanceState()

// const colors = reactive(['#0fc0fc', '#7b1daf', '#ff2fb9', '#d4ff47', '#1b3649'])
const counter = ref(0)

const sunIsLoaded = ref(false)

useIntervalFn(() => {
  counter.value = (counter.value + 1) % 6
},  5000)
</script>

<template>
  <div id="sun" class="fixed inset-0 flex justify-center overflow-hidden  ">
    <div
      id="sun__container"
      class="relative transition-all  "
      v-if="danceState.getMusicState === 'play'"
      >
      <!-- :class="[sunIsLoaded ? 'ready' : 'not_ready']" -->
    <div 
    id="img_box"
    
    >
      <img
        @load="sunIsLoaded = true"
        src="/pngwing.com.png"
        class="animate-spin relative transition-all"
        style=" animation-duration:10000ms;"
        alt=""
        :style="{
          filter: `hue-rotate(${counter *  60}deg)`,
          transitionDuration: '5000ms',
        }"
      />
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ready {
  clip-path: circle(80% at 50% 50%) !important;
}
.not_ready {
  clip-path: circle(0% at 50% 50%);
}

#sun {
  @apply  h-full w-full flex justify-center   overflow-hidden pointer-events-none opacity-80 ;
}

#sun__container {
  @apply flex-shrink-0 w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] duration-[2000ms] ease-out ;
}

#img_box{
  transform: translateY( calc(-50% + 80px ) );
}

</style>
