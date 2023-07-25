<script lang="ts" setup>
import { useAppState } from '~/composables/appState'

const appState = useAppState()
</script>

<template>
  <div id="floating-nav">
    <transition name="enter-nav">
      <div
        @click="$router.push('/')"
        class="floating-nav__item"
        v-if="appState.isShowBackBtn"
        :style="appState.backBtnStyle"
      >
        <span class="text-2xl p-1"> &lt; </span>
        <transition name="floating-nav__text">
          <div v-show="appState.isShowBackText" class="text-lg p-1">back</div>
        </transition>
      </div>
    </transition>

    <transition name="enter-nav">
      <div
        @click="appState.openMusic()"
        class="floating-nav__item mt-2"
        v-if="appState.showMusicBtn"
        :style="appState.backBtnStyle"
      >
        <span class="text-2xl p-1">
          <svg
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
                fill="currentColor"
              />
            </g>
          </svg>
        </span>
        <transition name="floating-nav__text">
          <div v-show="appState.isShowMusicText" class="text-lg p-1">music</div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.floating-nav__item {
  @apply flex items-center w-full font-archade text-xl relative;
  // max-width: 400px;
  transition: all 0.8s ease;
}
#floating-nav {
  @apply fixed right-4  bottom-6 md:right-10;
}

.enter-nav {
  &-enter-active {
    transition: all 0.4s ease;
  }
  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  &-enter-from, &-leave-to
/* &-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}

.floating-nav__text {
  &-leave-active,
  &-enter-active {
    transition: all 0.5s ease;
    clip-path: circle(120% at 100% 50%);
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
    clip-path: circle(1% at 100% 50%);
  }
}
</style>
