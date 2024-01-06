<script lang="ts" setup >
</script>
<template>
  <div class="c-glitch-down">
    <div v-for="i in [0, 1, 2]" :key="i" :style="'--count: ' + i * 100 + 'ms;'" class="c-glitch-down__item">
    </div>
  </div>
</template>


<style lang="scss" scoped>
$neon-text-color: #f40;
$neon-border-color: #08f;
$icon : url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' focusable='false' role='img' viewBox='0 0 448 512'%3E%3Cpath fill='%23fff' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'%3E%3C/path%3E%3C/svg%3E%0A");

.c-glitch-down {
  @apply text-white text-3xl mx-4 flex flex-col leading-4 font-chakra;

  padding: 14px 0;
  border: 0.2rem solid #fff;
  border-radius: 5px;
  animation: flicker 1.5s infinite alternate;

  &__item {
    width: 20px;
    height: 12px;
    background-repeat: no-repeat;
    background-image: $icon ;
    background-position-x: center;
    background-position-y: center;
    animation: blink 2s infinite;
    animation-delay: var(--count, 100ms);
    transform: translate(0px, 6px);
  }
}

@keyframes blink {

  0%,
  32%,
  66%,
  100% {
    opacity: 1;
  }

  33%,
  65% {
    opacity: 0.6;
  }
}

h1::-moz-selection {
  background-color: $neon-border-color;
  color: $neon-text-color;
}

h1::selection {
  background-color: $neon-border-color;
  color: $neon-text-color;
}

h1:focus {
  outline: none;
}

/* Animate neon flicker */
@keyframes flicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
      0 0 2rem $neon-text-color, 0 0 4rem $neon-text-color,
      0 0 6rem $neon-text-color, 0 0 8rem $neon-text-color,
      0 0 10rem $neon-text-color;

    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
      0 0 2rem $neon-border-color, inset 0 0 2rem $neon-border-color,
      0 0 4rem $neon-border-color, inset 0 0 4rem $neon-border-color;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
    box-shadow: none;
  }
}
</style>