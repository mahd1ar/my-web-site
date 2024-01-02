<script lang="ts" setup>

import { type TechStachPropType } from '../components/TechStack.vue'
import { LottieAnimation } from "lottie-web-vue"
import WatermelonJSON from "../public/lottie/animation_lkijkh54.json"

const resume: {
  heroImage: string,
  title: string,
  jobTitle: string,
  jobDescription: string,
  techStack: TechStachPropType
}[] = [
    {
      title: 'nikan-alumni website',
      heroImage: 'hero.jpg',
      jobTitle: 'fullstack web dev',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind', 'nuxt', 'wordpress', 'ubuntu'
      ]

    },
    {
      title: 'nikan-alumni website',
      heroImage: 'hero.jpg',
      jobTitle: 'fullstack web dev',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind', 'nuxt', 'wordpress', 'ubuntu'
      ]

    },
  ]


</script>

<template>
  <div class="w-full text-gray-50 relative ">
    <img class="hidden md:block absolute w-full opacity-70 top-0" src="/resume/the-90s-branding-patterns-.png" />
    <img class="md:hidden absolute w-full opacity-70 top-0" src="/resume/the-90s-branding-patterns-mobile-2.png" />
    <!-- v-if="danceState.getMusicState === 'play'" -->
    <LazyDiscoBackgrounds />
    <DiscoBall class="" />

    <span style="font-family: Monoton"
      class="bg-black/60 p-4 rainbows text-center  relative text-6xl  items-center mt-32 mb-10 font-mono">
      MY RESUME
    </span>

    <!-- <svg viewBox="0 0 200 30" class="w-full ">
      <text style="stroke-width: 0.3px; stroke: aqua;" y="20" font-family="Nintendoid1">MY Resume</text>
    </svg> -->

    <!--     
    <ResumeBigPlayButton class="my-28" /> -->
    <CassetteTape />

    <!-- <LottieAnimation
      :animation-data="WatermelonJSON"
      :auto-play="true"
      :loop="true"
      :speed="2"
      ref="anim"
    /> -->

    <!-- scroll down -->
    <div class="mt-4 w-16 p-1 bg-black animate-bounce text-white ">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2V7zm-2 4v2H7v-2h2zm8 0h-2v2h2v-2z" />
      </svg>
    </div>
    <underConstruction />
    <div class="flex relative flex-wrap items-baseline">
      <img class="w-48"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMThvaWFxMWptYmFqa2UxNnAxdzF2MzYzdWR3ZGhhNWl6Y2h1N3FoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TF6ZSOZWtXVBOeMIc6/giphy.gif"
        alt="" />
      <img class="w-48"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZ5ZGVjZDJiN2c5NDdzYmJtNzFneXBwc3Vod2NsZHI3emZsMGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4PMPdM08TcBjRl1ukU/giphy.gif"
        alt="" />
      <!-- <img
        class="w-48"
        src="https://media.giphy.com/media/13i9ZtOyDp7UK4/giphy.gif"
      /> -->
      <img class="w-48" src="https://media.giphy.com/media/ZXC0PxDlsO9Vv29iy4/giphy.gif" />
      <img class="w-48" src="https://media.giphy.com/media/0cM4V36f68NqYrravk/giphy.gif" />
      <img class="w-48" src="https://media.giphy.com/media/qhiusSnQzQVZsoF9Tj/giphy.gif" />
      <img class="w-48" src="https://media.giphy.com/media/QzD2McTKDsvQlS6aUd/giphy.gif" />
    </div>
    <div class="container mx-auto relative">
      <div v-for="(i, index) in resume" :key="index">
        <ResumeCard :title="i.title" :heroImage="i.heroImage" :jobDescription="i.jobDescription" :jobTitle="i.jobTitle"
          :techStack="i.techStack" />
      </div>
    </div>
    <RetroPalm />
    <div class="h-28 flex justify-center items-center ">gap</div>
  </div>
</template>

<style>
.neon2 {
  color: #fff;
  text-shadow: 0 0 10px #fff, 0 0 30px #fff, 0 0 50px #e3e98e, 0 0 70px #e3e98e, 0 0 90px #e3e98e;
}

.rainbows {
  color: white;
  text-shadow:
    -0.2px 0.2px 0 hsla(7.2, 60%, 45%, 1),
    -0.4px 0.4px 0 hsla(14.4, 60%, 45%, 1),
    -0.6px 0.6px 0 hsla(21.6, 60%, 45%, 1),
    -0.8px 0.8px 0 hsla(28.8, 60%, 45%, 1),
    -1px 1px 0 hsla(36, 60%, 45%, 1),
    -1.2px 1.2px 0 hsla(43.2, 60%, 45%, 1),
    -1.4px 1.4px 0 hsla(50.4, 60%, 45%, 1),
    -1.6px 1.6px 0 hsla(57.6, 60%, 45%, 1),
    -1.8px 1.8px 0 hsla(64.8, 60%, 45%, 1),
    -2px 2px 0 hsla(72, 60%, 45%, 1),
    -2.2px 2.2px 0 hsla(79.2, 60%, 45%, 1),
    -2.4px 2.4px 0 hsla(86.4, 60%, 45%, 1),
    -2.6px 2.6px 0 hsla(93.6, 60%, 45%, 1),
    -2.8px 2.8px 0 hsla(100.8, 60%, 45%, 1),
    -3px 3px 0 hsla(108, 60%, 45%, 1),
    -3.2px 3.2px 0 hsla(115.2, 60%, 45%, 1),
    -3.4px 3.4px 0 hsla(122.4, 60%, 45%, 1),
    -3.6px 3.6px 0 hsla(129.6, 60%, 45%, 1),
    -3.8px 3.8px 0 hsla(136.8, 60%, 45%, 1),
    -4px 4px 0 hsla(144, 60%, 45%, 1),
    -4.2px 4.2px 0 hsla(151.2, 60%, 45%, 1),
    -4.4px 4.4px 0 hsla(158.4, 60%, 45%, 1),
    -4.6px 4.6px 0 hsla(165.6, 60%, 45%, 1),
    -4.8px 4.8px 0 hsla(172.8, 60%, 45%, 1),
    -5px 5px 0 hsla(180, 60%, 45%, 1),
    -5.2px 5.2px 0 hsla(187.2, 60%, 45%, 1),
    -5.4px 5.4px 0 hsla(194.4, 60%, 45%, 1),
    -5.6px 5.6px 0 hsla(201.6, 60%, 45%, 1),
    -5.8px 5.8px 0 hsla(208.8, 60%, 45%, 1),
    -6px 6px 0 hsla(216, 60%, 45%, 1),
    -6.2px 6.2px 0 hsla(223.2, 60%, 45%, 1),
    -6.4px 6.4px 0 hsla(230.4, 60%, 45%, 1),
    -6.6px 6.6px 0 hsla(237.6, 60%, 45%, 1),
    -6.8px 6.8px 0 hsla(244.8, 60%, 45%, 1),
    -7px 7px 0 hsla(252, 60%, 45%, 1),
    -7.2px 7.2px 0 hsla(259.2, 60%, 45%, 1),
    -7.4px 7.4px 0 hsla(266.4, 60%, 45%, 1),
    -7.6px 7.6px 0 hsla(273.6, 60%, 45%, 1),
    -7.8px 7.8px 0 hsla(280.8, 60%, 45%, 1),
    -8px 8px 0 hsla(288, 60%, 45%, 1),
    -8.2px 8.2px 0 hsla(295.2, 60%, 45%, 1),
    -8.4px 8.4px 0 hsla(302.4, 60%, 45%, 1),
    -8.6px 8.6px 0 hsla(309.6, 60%, 45%, 1),
    -8.8px 8.8px 0 hsla(316.8, 60%, 45%, 1),
    -9px 9px 0 hsla(324, 60%, 45%, 1),
    -9.2px 9.2px 0 hsla(331.2, 60%, 45%, 1),
    -9.4px 9.4px 0 hsla(338.4, 60%, 45%, 1),
    -9.6px 9.6px 0 hsla(345.6, 60%, 45%, 1),
    -9.8px 9.8px 0 hsla(352.8, 60%, 45%, 1),
    -10px 10px 0 hsla(360, 60%, 45%, 1),
    0px 0px 0px hsla(0, 0%, 0%, 0);
}
</style>