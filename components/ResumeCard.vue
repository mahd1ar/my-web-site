<script lang="ts" setup>
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
defineProps({
  index: Number,
  avatar: String,
  images: Array as PropType<string[]>,
  title: String,
  description: String,
  jobTitle: String,
  jobDescription: String,
  techStack: Array as PropType<string[]>
})

defineEmits<{
  selected: [inx: number] 
}>()
</script>

<template>
  <li class="mt-10 flex flex-col justify-center items-center gap-4 ">
    <img class="w-48" :src="avatar" alt="">
    <h3 class="px-4 uppercase font-bold text-4xl md:hidden">
      <span class="text-cyan-300 text-3xl">{{ index }}.</span>
      {{ title }}
    </h3>

    <ClientOnly>
      <Splide ref="slider" dir="ltr" :options="{
        lazyLoad: 'nearby',
        perPage: 1,
        pagination: false,
        arrows: false,
        gap:'20px'
      }" aria-label="My Favorite Images" class="max-w-sm">
        <!-- @splide:moved="log" -->
        <SplideSlide v-for="(src, inx) in images?.map(i => '/resume/resume_card_pics/' + i) ||[]" :key="inx" class="w-full">
          <img class="h-full w-full object-contain transition-all duration-500 " :src loading="lazy" @click="$emit('selected',inx)" >
        </SplideSlide>
      </Splide>
    </ClientOnly>

    <div class="p-4">
      <h3 class="uppercase font-bold text-4xl hidden md:block">
        <span class="text-cyan-300 text-3xl">{{ index }}.</span>
        {{ title }}
      </h3>
      <div class="max-w-md pl-10 text-gray-200 ">
        {{ description }}
      </div>
      <ul>
        <li
          class="font-mono mt-4 text-based sm:text-lg text-gray-300 flex sm:flex-row flex-col gap-1 items-start sm:items-center">
          <div class="flex items-center gap-1 flex-shrink-0">

            <svg class="  text-cyan-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z" />
            </svg>
            <span class="text-cyan-300"> [ job title ] </span>
          </div>
          {{ jobTitle }}

        </li>

        <li class="font-mono mt-4 text-lg text-gray-300 flex sm:flex-row flex-col gap-1 items-start sm:items-center">
          <div class="flex items-center gap-1">

            <svg class="  text-cyan-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2V2zm5 18v2H5v-2h2zm10 0v2h2v-2h-2zm3-16H4v12h16V4zm-8 4h2v2h-2V8zm-2 4v-2h2v2h-2zm0 0v2H8v-2h2zm6 0h-2v-2h2v2zm0 0h2v2h-2v-2zM8 6H6v2h2V6z" />
            </svg>
            <span class="text-cyan-300 flex-shrink-0">
              [ screenshots ]
            </span>
          </div>
          <a href="#" class="underline font-bold underline-offset-2 ">{{ jobDescription }}

            <span class="  rounded-sm   inline-block">
              <svg class="w-5 " viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z" />
              </svg>
            </span>
          </a>
        </li>
        <li class="font-mono mt-4 text-lg text-gray-300 flex gap-1  sm:flex-row flex-col  items-start sm:items-center">
          <div class="flex items-center">

            <svg class="text-cyan-400" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z" />
            </svg>
            <span class="text-cyan-300 flex-shrink-0">
              [ tech-stack ]
            </span>
          </div>
          <span class="relative inline-block h-6 sm:h-auto mt-4 sm:mt-0">
            <TechStack class=" sm:-top-3" :items="techStack" />
          </span>
        </li>
      </ul>
    </div>
  </li>
</template>

<style scoped>
a {
  color: rgb(168, 168, 255);
}
</style>
