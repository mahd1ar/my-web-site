<script lang="ts" setup>

import { type TechStachPropType } from '../components/TechStack.vue'
const danceState = useDanceState()
const resume : {
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
            'ubuntu', 'tailwind', 'nuxt','wordpress','ubuntu'
        ]

    },
    {
        title: 'nikan-alumni website',
        heroImage: 'hero.jpg',
        jobTitle: 'fullstack web dev',
        jobDescription: 'see screenshot on my Google Drive folder',
        techStack: [
            'nginx',
            'ubuntu', 'tailwind', 'nuxt','wordpress','ubuntu'
        ]

    },
]
</script>

<template>
  <div class="w-full text-gray-50 relative ">
    <!-- v-if="danceState.getMusicState === 'play'" -->
    <LazyDiscoBackgrounds />
    <DiscoBall class="" />
    <h1
      class="relative font-press  mb-6 bg-white text-black text-5xl p-1 mt-10"
    >
      My RESUME
    </h1>

    <ResumeBigPlayButton class="my-28" />

    <!-- scroll down -->
    <div class="w-16 p-1 bg-black animate-bounce text-white ">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2V7zm-2 4v2H7v-2h2zm8 0h-2v2h2v-2z"
        />
      </svg>
    </div>
    <underConstruction />
    <div class="flex relative flex-wrap items-baseline">
      <img
        class="w-48"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMThvaWFxMWptYmFqa2UxNnAxdzF2MzYzdWR3ZGhhNWl6Y2h1N3FoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TF6ZSOZWtXVBOeMIc6/giphy.gif"
        alt=""
      />
      <img
        class="w-48"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzZ5ZGVjZDJiN2c5NDdzYmJtNzFneXBwc3Vod2NsZHI3emZsMGZ1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4PMPdM08TcBjRl1ukU/giphy.gif"
        alt=""
      />
      <!-- <img
        class="w-48"
        src="https://media.giphy.com/media/13i9ZtOyDp7UK4/giphy.gif"
      /> -->
      <img
        class="w-48"
        src="https://media.giphy.com/media/ZXC0PxDlsO9Vv29iy4/giphy.gif"
      />
      <img
        class="w-48"
        src="https://media.giphy.com/media/0cM4V36f68NqYrravk/giphy.gif"
      />
      <img
        class="w-48"
        src="https://media.giphy.com/media/qhiusSnQzQVZsoF9Tj/giphy.gif"
      />
      <img
        class="w-48"
        src="https://media.giphy.com/media/QzD2McTKDsvQlS6aUd/giphy.gif"
      />
    </div>
    <div class="container mx-auto relative">
      <div v-for="(i, index) in resume" :key="index">
        <ResumeCard
          :title="i.title"
          :heroImage="i.heroImage"
          :jobDescription="i.jobDescription"
          :jobTitle="i.jobTitle"
          :techStack="i.techStack"
        />
      </div>
    </div>

    <div class="h-28 flex justify-center items-center ">gap</div>
  </div>
</template>
