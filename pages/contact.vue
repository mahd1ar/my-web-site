<script lang="ts" setup>
import anime from 'animejs'
import useNavigation from '~/composables/navigation';
import { useAppState } from '~/store/appState';

// head() {
//   return {
//     title: 'Contact me',
//   }
// },

useNavigation()

const appState = useAppState()

appState.changeStyle({
  background: '#000000',
  color: '#eb94d5',
  border: '1px #a82d93 solid'
})

const route = useRoute()

const socials = [
  {
    sname: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mahdiyar-anari/',
    filename: 'linkedin.jpg'
  },
  { sname: 'telegram', link: 'https://t.me/mahd1ar', filename: 'telegram.png' },
  {
    sname: 'github',
    link: 'https://github.com/mahd1ar',
    filename: 'github.jpg'
  },
  {
    sname: 'instagram',
    link: 'https://twitter.com/mr_mahd1ar',
    filename: 'instagram.jpg'
  },
  {
    sname: 'soundcloud',
    link: 'https://soundcloud.com/mahd1ar',
    filename: 'soundcloud.png'
  },
  {
    sname: 'gmail',
    link: 'mailto:mahdiyaranari@gmail.com',
    filename: 'gmail.jpg'
  }
]

const refrence = route.query.refrence || route.query.ref || ''

const containerw = ref(0)

// computed: {
//   isLoading() {
//     return this.$store.state.isLoaded
//   },
// },

onMounted(async () => {
  await timeout(2000)

  anime({
    targets: 'i',
    rotate: [75, -15],
    opacity: [0, 1],
    delay: anime.stagger(100)
  })
})

function downloadVcard () {
  // download and open vcard file
  window.location.assign('vcard.vcf')
}
</script>

<template>
  <section id="contact" class="page w-full relative">
    <!-- glitch -->
    <div id="clitch-box-pl"></div>
    <!-- goback -->

    <svg
      class="absolute w-full h-full"
      width="1440"
      height="560"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1354")' fill="none">
        <rect
          width="1440"
          height="560"
          x="0"
          y="0"
          fill="url(#SvgjsLinearGradient1355)"
        ></rect>
        <path
          d="M1440 0L1389.52 0L1440 15.53z"
          fill="rgba(255, 255, 255, .1)"
        ></path>
        <path
          d="M1389.52 0L1440 15.53L1440 272.45L1108.48 0z"
          fill="rgba(255, 255, 255, .075)"
        ></path>
        <path
          d="M1108.48 0L1440 272.45L1440 313.40999999999997L1007.83 0z"
          fill="rgba(255, 255, 255, .05)"
        ></path>
        <path
          d="M1007.8299999999999 0L1440 313.40999999999997L1440 473.87L566.8899999999999 0z"
          fill="rgba(255, 255, 255, .025)"
        ></path>
        <path
          d="M0 560L580.43 560L0 431.53999999999996z"
          fill="rgba(0, 0, 0, .1)"
        ></path>
        <path
          d="M0 431.53999999999996L580.43 560L744.65 560L0 264.43999999999994z"
          fill="rgba(0, 0, 0, .075)"
        ></path>
        <path
          d="M0 264.44L744.65 560L853.31 560L0 114.15z"
          fill="rgba(0, 0, 0, .05)"
        ></path>
        <path
          d="M0 114.14999999999998L853.31 560L997.2299999999999 560L0 113.87999999999998z"
          fill="rgba(0, 0, 0, .025)"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1354">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="84.72%"
          y1="-39.29%"
          x2="15.28%"
          y2="139.29%"
          gradientUnits="userSpaceOnUse"
          id="SvgjsLinearGradient1355"
        >
          <stop stop-color="#0e2a47" offset="0"></stop>
          <stop stop-color="rgba(0, 0, 0, 1)" offset="1"></stop>
        </linearGradient>
      </defs>
    </svg>

    <div class="relative w-full">
      <div
        id="contact-container"
        class="container mx-auto flex flex-col md:flex-row"
      >
        <div class="flex md:justify-end justify-center lg:w-1/3 md:w-1/2">
          <div class="image md:w-full w-3/5 relative bottom-0">
            <digital-heart />
          </div>
        </div>

        <div class="content lg:w-2/3 md:w-1/2">
          <div class="heading">
            <h1 class="heading__ctx" v-if="refrence === 'card'">hi there!</h1>
            <h1
              class="heading__ctx text-4xl leading-loose font-archade capitalize"
              v-else
            >
              let's talk!
            </h1>
          </div>

          <div class="social-media">
            <a
              class="social-media__wrap"
              v-for="social in socials"
              :key="social.sname"
              :href="social.link"
            >
              <i class="social-media__tag"> {{ social.sname.toLowerCase() }}</i>

              <img
                class="social-media__icon bg-[#efefef]"
                :alt="social.sname"
                :src="'/social_logos/' + social.filename"
              />
            </a>

            <span
              class="social-media__wrap cursor-pointer"
              @click="downloadVcard"
            >
              <i class="social-media__tag whitespace-normal">contact</i>

              <img
                class="social-media__icon"
                alt="vcard-8bit-logo"
                :src="'~/assets/imgs/logo/vcard.png'"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

section#contact {
  @apply z-0 bg-cover bg-center bg-gray-900;
}

.content {
  @apply px-6 flex flex-col items-start;
  justify-content: center;
}

.ovarlay {
  @apply absolute w-full h-full inset-0 mix-blend-multiply;
  background-color: #4afff2;
}

.heading {
  @apply text-6xl my-7 mx-2 xl:my-14;
}

.heading__ctx {
  @apply text-6xl;
  font-family: 'Monoton', cursive;
  color: #fefaff;
  text-shadow: 3px 3px 0 #4f97db, -3px -3px 0 #b44fdb;
  text-shadow: 3px 3px 0 #21998c, -3px -3px 0 #dd2075;
  text-shadow: 3px 3px 0 #702199c7, -3px -3px 0 #dc26a4d1;
}

.social-media {
  @apply w-full  relative;
}

.social-media__wrap {
  @apply w-16 md:w-20 my-7 inline-flex  lg:mx-5 mx-4 flex-col justify-center  relative;
}
//
.social-media__tag {
  @apply absolute xl:-top-11 -top-8 
  capitalize 
  xl:px-4 
  lg:px-2
  py-1
  px-2 
 tracking-wider
  left-0 transform opacity-0 md:text-lg xl:text-2xl lg:text-xl bg-black text-gray-50 font-bold;
  transform-origin: left center;
}

.social-media__icon {
  @apply object-contain h-full w-24 mr-auto;
  border: 3px solid #2f4b64;
}
</style>
