<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const isOpen = defineModel('isOpen', { type: Boolean, default: false })

defineProps({
  images: Array as PropType<string[]>,
  startFromIndex: Number
})

function clickHandler (a: any) {
  if(!a.srcElement.classList.contains('js-image')){
    isOpen.value = false
  }
  
} 


</script>

<template>
  <div v-if="isOpen" @click="clickHandler" class="fixed inset-0 z-50 bg-black/75 backdrop-blur h-screen">
       <ClientOnly>
      <Splide ref="slider"
       dir="ltr" :options="{
        lazyLoad: 'nearby',
        perPage: 1,
  
      }" aria-label="My Favorite Images" class="h-full flex justify-center items-center">
        <!-- @splide:moved="log" -->
        <SplideSlide v-for="(src, inx) in images" :key="inx" class="grid place-items-center">
          <img class="js-image h-full w-full object-contain transition-all duration-500 max-w-sm" :src loading="lazy">
        </SplideSlide>
      </Splide>
    </ClientOnly>
  </div>
</template>

<style scoped></style>
