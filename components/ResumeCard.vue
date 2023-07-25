<script lang="ts" setup>
import { PropType } from 'nuxt/dist/app/compat/capi';
import { type TechStachPropType } from '../components/TechStack.vue'

defineProps({
  heroImage: String,
  title: String,
  jobTitle: String,
  jobDescription: String,
  techStack: Array as PropType< TechStachPropType>
})
</script>

<template>
  <div class="mt-10 flex flex-col justify-center items-center gap-4 ">
    <img :src="'/resume/nikan-alumni/' + heroImage" alt="" class="max-w-sm" />
    <div>
      <h3 class="uppercase font-bold text-4xl">{{ title }}</h3>
      <ul>
        <li
          class="font-mono mt-4 text-lg text-gray-300 flex gap-1 items-center"
        >
          <svg
            class="  text-cyan-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z"
            />
          </svg>
          <span class="text-cyan-300"> [ {{ jobTitle }} ] </span>
          i design and program this web site
        </li>

        <li
          class="font-mono mt-4 text-lg text-gray-300 flex gap-1 items-center"
        >
          <svg
            class="  text-cyan-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2V2zm5 18v2H5v-2h2zm10 0v2h2v-2h-2zm3-16H4v12h16V4zm-8 4h2v2h-2V8zm-2 4v-2h2v2h-2zm0 0v2H8v-2h2zm6 0h-2v-2h2v2zm0 0h2v2h-2v-2zM8 6H6v2h2V6z"
            />
          </svg>
          <span class="text-cyan-300">
            [ screenshots ]
          </span>
          <a
            href="#"
            class="underline font-bold underline-offset-2 flex items-center gap-1"
            >{{ jobDescription }}

            <span class="bg-black  rounded-sm   inline-block">
              <svg class="w-5 border border-white/50" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z"
                />
              </svg>
            </span>
          </a>
        </li>
        <li
          class="font-mono mt-4 text-lg text-gray-300 flex gap-1 items-center"
        >
          <svg class="text-cyan-400" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 1h2v8h8v4h-2v-2h-8V5h-2V3h2V1zM8 7V5h2v2H8zM6 9V7h2v2H6zm-2 2V9h2v2H4zm10 8v2h-2v2h-2v-8H2v-4h2v2h8v6h2zm2-2v2h-2v-2h2zm2-2v2h-2v-2h2zm0 0h2v-2h-2v2z"
            />
          </svg>
          <span class="text-cyan-300">
            [ tech-stack ]
          </span>
          <span class="relative">
            <TechStack class="absolute -top-3 ml-4" :items="techStack" />
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
