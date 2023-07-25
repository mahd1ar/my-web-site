<script lang="ts" setup>
defineProps({
  text: {
    type: String
  }
})
</script>

<template>
  <div class="loading">
    <span class="loading__text"> {{ text }} </span>
    <span class="loading__pip"> | </span>
  </div>
</template>

<style lang="scss">
.loading {
  @apply w-screen h-screen fixed z-50 bg-black inset-0 text-white flex justify-center items-center font-archade;

  &__text {
    @apply uppercase mx-1 relative;
  }

  &__pip {
    @apply font-bold mx-1 origin-center;
    animation: rotates 600ms forwards ease infinite;
  }
}

@keyframes rotates {
  0%,
  24% {
    transform: rotate(-45deg);
  }
  25%,
  49% {
    transform: rotate(0deg);
  }
  50%,
  74% {
    transform: rotate(45deg);
  }
  75%,
  100% {
    transform: rotate(90deg);
  }
}

#loader-sceen {
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 1212;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid rgba(255, 255, 255, 0.5);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 0px;
    left: 0px;
    width: 0;
    height: 0;
    opacity: 1;
    transform-origin: center center;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 2px;
    height: 2px;
    transform: scale(8);
    opacity: 0;
  }
}
</style>
