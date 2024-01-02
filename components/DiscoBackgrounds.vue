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
  <div id="sun" class="fixed inset-0  ">
    <div
      id="sun__container"
      class="relative transition-all  "
      v-if="danceState.getMusicState === 'play'"
      :class="[sunIsLoaded ? 'ready' : 'not_ready']"
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
    <!-- <div
      v-for="(color, index) in colors"
      v-show="index === counter"
      :key="index"
      :style="{ backgroundColor: color }"
      class="w-full h-full absolute"
    >
      <div class="flex w-full flex-wrap ">
        <span
          class="w-5 h-5 bg-white border-black border "
          v-for="i in 1000"
          :key="i"
          :style="{
            opacity: Math.random()
          }"
        ></span>
      </div>
    </div> -->
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
  @apply h-full w-full flex justify-center overflow-hidden;
}

#sun__container {
  @apply lg:w-[1000px] lg:h-[1000px] -translate-y-1/2 duration-[2000ms] ease-out;
}
img {
  @apply top-20;
}
</style>
