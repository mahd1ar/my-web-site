<script lang="ts" setup>
import { useAppState } from '@/composables/appState'
import { grained } from '~/libraries/grained'

const appState = useAppState()
const loadingIsDone = useState<boolean>('loadingIsDone')

onMounted(() => {
  const grainedOptions = {
    animate: true,
    patternWidth: 267.23,
    patternHeight: 500,
    grainOpacity: 0.11,
    grainDensity: 1.51,
    grainWidth: 1.5,
    grainHeight: 1
  }

  grained('#js-grained', grainedOptions)
  const grainedElement = document.querySelector('#js-grained') as HTMLDivElement

  if (grainedElement) grainedElement.style.position = 'fixed'
})
</script>

<template>
  <main
    id="main"
    class="min-h-screen flex flex-col justify-center items-center z-0 overflow-x-hidden"
    :class="{ 'overflow-hidden': !appState.isLoaded }"
  >
    <!-- v-if="$nuxt.context.isDev" -->
    <div
      class="sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-yellow-500 2xl:bg-gray-700 fixed top-10 left-10 z-50"
    >
      <span class="hidden sm:block">sm</span>
      <span class="hidden md:block">md</span>
      <span class="hidden lg:block">lg</span>
      <span class="hidden xl:block">xl</span>
      <span class="hidden 2xl:block">2xl</span>
    </div>

    <!-- <img
      src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      alt=""
    /> -->

    <div v-if="!appState.isLoaded" class="z-40">
      <SandGlass v-if="$route.name === 'index'" />
      <loading text="trust the process" v-else />
    </div>

    <slot
      ref="page"
      class="h-full flex-1"
      id="xxx"
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    />
    <div
      id="js-grained"
      class="w-screen h-screen inset-0 pointer-events-none"
    ></div>

    <GoHome />
    <client-only>
      <music-player v-if="appState.musicIsLoaded" />
    </client-only>
  </main>
</template>

<style lang="scss">
main {
  transition: all 1s ease;
}

.fa {
  position: absolute;
  inset: 0;
}
</style>
