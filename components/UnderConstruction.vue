<script lang="ts" setup>
const danceState = useDanceState()
</script>

<template>
  <div>
    <div class="flex w-full rotate-12">
      <img
        v-for="i in 6"
        :key="i"
        src="/under-construction.png"
        class="h-10 marquee"
        alt=""
        :class="[danceState.getMusicState === 'play' && 'marquee__rigth']"
      />
    </div>
    <div dir="rtl" class="flex w-full mt-20 -rotate-12">
      <img
        v-for="i in 6"
        :key="i"
        :class="[danceState.getMusicState === 'play' && ' marquee__left']"
        src="/under-construction.png"
        class="h-10 marquee"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.marquee {
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-delay: 800ms;

  &__rigth {
    animation-name: anime-marquee-rigth;
  }

  &__left {
    animation-name: anime-marquee-left;
  }
}

@keyframes anime-marquee-rigth {
  from {
    transform: translate(-100%, 0);
  }

  to {
    transform: translate(0, 0);
  }
}

@keyframes anime-marquee-left {
  from {
    transform: translate(+100%, 0);
  }

  to {
    transform: translate(0, 0);
  }
}
</style>
