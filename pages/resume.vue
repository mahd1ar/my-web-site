<script lang="ts" setup>
import { UseElementVisibility } from '@vueuse/components'
import { LottieAnimation } from "lottie-web-vue"
import WatermelonJSON from "../public/lottie/Animation - 1704279204978.json"

const resume = [
    {
      avatar: '/gifs/resume/ZXC0PxDlsO9Vv29iy4.webp',
      title: 'nikpeyvand',
      description: 'Nikpeyvand is a comprehensive application for the communication network of alumni centers, commissioned by the Nikan Cultural Institute.',
      href: 'https://nikpeyvand.com/discover',
      images: ['nikpeyvand.jpg','zistdialogue.jpg'],
      jobTitle: 'lead developer / IT manager',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind_css', 'nuxt_js', 'wordpress', 'prisma_js'
      ]
      
    },
    {
      avatar: '/gifs/resume/TF6ZSOZWtXVBOeMIc6.webp',
      title: 'nikan-alumni website',
      images: ['hero.jpg'],
      jobTitle: 'fullstack web dev',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind_css', 'nuxt_js', 'wordpress', 'linux'
      ]
    },
    {
      avatar: '/gifs/resume/4PMPdM08TcBjRl1ukU.webp',
      title: 'zistdialogue website',
      images: ['zistdialogue.jpg'],
      jobTitle: 'fullstack web dev',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind_css', 'nuxt_js', 'wordpress', 'linux'
      ]
    },
    {
      avatar: '/gifs/resume/0cM4V36f68NqYrravk.webp',
      title: 'bisansair website',
      images: ['bisansair.jpg'],
      jobTitle: 'fullstack web dev',
      jobDescription: 'see screenshot on my Google Drive folder',
      techStack: [
        'nginx',
        'ubuntu', 'tailwind_css', 'nuxt_js', 'wordpress', 'linux'
      ]
    },
  ]


const imageViewer = reactive({
  isOpen: false,
  images: [] as string[],
  startFromIndex: 0
})

function openImageViewer (resumeItemIndex: number, startFromIndex: number) {

  imageViewer.images.splice(0,imageViewer.images.length)
  
  resume.at(resumeItemIndex)?.images.forEach(i => {
    imageViewer.images.push(i)
  })

  const [nthItem] = imageViewer.images.splice(startFromIndex,1)
  
  imageViewer.images.unshift(nthItem)
  
  imageViewer.isOpen = true
}

</script>

<template>
 
  <div class="w-full text-gray-50 relative ">

     <ImageViewer v-model:is-open="imageViewer.isOpen" 
  :images="imageViewer.images.map(i => '/resume/resume_card_pics/' + i)" />
    <img class="hidden md:block absolute w-full opacity-70 top-0" src="/resume/the-90s-branding-patterns-.webp" />
    <img class="md:hidden absolute w-full opacity-70 top-0" src="/resume/the-90s-branding-patterns-mobile-2.webp" />
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

    <!-- scroll down -->
    <div class="mt-4 w-16 p-1 bg-black animate-bounce text-white ">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2V7zm-2 4v2H7v-2h2zm8 0h-2v2h2v-2z" />
      </svg>
    </div>
    <underConstruction />
    
    
    <div class="container mx-auto relative">
      <ul v-for="(i, index) in resume" :key="index">
        <ResumeCard @selected="inx => { openImageViewer(index,inx) }" v-bind="i" :index="index + 1" />
      </ul>

      <div class=" my-10 flex items-center justify-center">

        <UseElementVisibility v-slot="{ isVisible }">
          <!-- <i class="fixed z-40 bg-black top-0" >{{ {isVisible} }}</i>  -->
          <div :class="!isVisible && 'h-36'">

            <LottieAnimation v-if="isVisible" :animation-data="WatermelonJSON" :auto-play="true" :loop="true" :speed="1"
              class="relative" ref="anim" />
            </div>
          </UseElementVisibility>
        <a href="https://www.cake.me/mahdiyar-anari" target="_blank"
          class="text-lg flex h-12 bg-gradient-to-r from-pink-600 to-purple-500 text-white rounded-lg capitalize absolute mt-10">
          <div class=" px-4 flex items-center gap-1" >

            <svg class="w-7 " viewBox="0 0 48 48">
              <path fill="currentColor"
              d="M17.457 31.51a2.673 2.673 0 0 0 3.08.008c.404-.288.722-.682.916-1.139l1.236-3.769a6.159 6.159 0 0 1 3.9-3.9l3.631-1.183a2.67 2.67 0 0 0 0-5.036l-3.7-1.193a6.176 6.176 0 0 1-3.895-3.888l-1.179-3.629a2.663 2.663 0 0 0-.976-1.291a2.713 2.713 0 0 0-3.085 0a2.68 2.68 0 0 0-.987 1.32l-1.193 3.667a6.166 6.166 0 0 1-3.796 3.818l-3.627 1.178a2.67 2.67 0 0 0 .03 5.047l3.587 1.165a6.185 6.185 0 0 1 3.902 3.91l1.18 3.623c.183.521.524.973.975 1.292m1.704-2.122l-.062.081a.179.179 0 0 1-.199-.006a.195.195 0 0 1-.052-.052l-1.17-3.6a8.608 8.608 0 0 0-2.092-3.401a8.704 8.704 0 0 0-3.405-2.1l-3.569-1.154a.185.185 0 0 1-.083-.064a.164.164 0 0 1-.03-.1a.18.18 0 0 1 .032-.1a.22.22 0 0 1 .052-.051l3.62-1.175a8.7 8.7 0 0 0 3.344-2.109a8.725 8.725 0 0 0 2.027-3.28l1.188-3.661a.17.17 0 0 1 .163-.114a.179.179 0 0 1 .153.085l1.172 3.6a8.692 8.692 0 0 0 2.093 3.385a8.716 8.716 0 0 0 3.4 2.1l3.6 1.168l.066.019a.169.169 0 0 1 .09.151c0 .036-.01.07-.03.1a.286.286 0 0 1-.049.05l-3.61 1.171a8.653 8.653 0 0 0-5.489 5.49zm13.714 11.254a1.95 1.95 0 0 0 1.124.359l.005.003a1.946 1.946 0 0 0 1.844-1.328l.569-1.75a2.382 2.382 0 0 1 1.499-1.502l1.79-.582a1.946 1.946 0 0 0 .94-2.958a1.961 1.961 0 0 0-1.005-.73l-1.757-.569a2.375 2.375 0 0 1-1.5-1.5l-.582-1.789a1.944 1.944 0 0 0-3.679.03l-.572 1.757a2.377 2.377 0 0 1-1.46 1.495l-1.79.582a1.943 1.943 0 0 0 .029 3.677l1.752.57a2.368 2.368 0 0 1 1.5 1.506l.582 1.788c.134.38.382.709.71.941M30.86 34.04l-.118-.039l.14-.049a4.877 4.877 0 0 0 3.043-3.091l.04-.121l.04.128a4.87 4.87 0 0 0 3.092 3.089l.156.05l-.121.04a4.871 4.871 0 0 0-3.093 3.095l-.04.121l-.04-.123a4.872 4.872 0 0 0-3.1-3.1" />
            </svg>
            download full resume
          </div>
          <div class=" bg-black/30  relative w-12 h-full flex justify-center items-center" >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"/></svg>
          </div>
        </a>
      </div>
      
    </div>


    <RetroPalm class="my-44" />
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