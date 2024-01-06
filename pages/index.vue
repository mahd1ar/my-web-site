<script lang="ts" setup>
import { useAppState } from '~/store/appState';
import { Glitch } from '../libraries/glitch.js'

const appState = useAppState()

appState.changeStyle({
  background: 'rgb(42 50 78)',
  border: '1px solid rgb(213 147 232)',
  color: 'rgb(77 162 199)'
})

const navigation = ref([
  { name: 'skills', link: 'skills' },
  { name: 'education', link: 'education' },
  { name: 'contact me', link: 'contact' },
  { name: 'resume', link: 'resume' }
])

const webdev = ref<HTMLDivElement>()
let interval: [number, boolean] = [0, true]

onMounted(() => {
  appState.hideBackBtn()

  interval = [0, true]
  initGlitch()
  typeThis()
})

onUnmounted(() => {
  appState.showBackBtn()
  interval[1] = false
  clearInterval(interval[0])
})

function loadMusic () {
  if (appState.musicIsLoaded === false) {
    appState.loadMusic()
  } else {
    appState.openMusic()
  }
}

async function typeThis (index = 0) {
  const texts = ['web developer', 'linux admin', 'network admin']
  const totalIndex = texts.length

  const txtArray = texts[index % totalIndex].split('')
  const txtArraySize = txtArray.length
  let count = 1

  const setinterval = setInterval(async () => {
    webdev.value!.innerText =
      texts[index % totalIndex].substring(0, count) + '  '
    count++
    if (count === txtArraySize + 1) {
      clearInterval(setinterval)
      await timeout(3000)
      if (interval[1]) typeThis(index + 1)
    }
  }, 50)
  // @ts-ignore
  interval[0] = setinterval
}

async function initGlitch () {
  const canvasClasses = ['transform', 'mx-auto', 'md:scale-100', 'scale-75']
  const { default: p5 } = await import('p5')

  const sketch = function (p: any) {
    let windowW = 330
    let windowH = 744
    let isLoaded = false
    let glitch: Glitch
    const imgSrc = '/me.jpg'

    p.setup = function () {
      switch (BrowserD.width()) {
        case 'desktop':
          windowW = 300
          windowH = 400
          break
        case 'medium':
          windowW = 350
          windowH = 450
          break
        case 'small':
          windowW = 350
          windowH = 350
          break

        case 'supersmall':
          windowW = 350
          windowH = 450
        default:
          break
      }
      p.background(0)
      const canvas = p.createCanvas(windowW, windowH)

      canvas.elt.id = 'imgProfile'
      canvasClasses.forEach(classname => {
        canvas.elt.classList.add(classname)
      })
      canvas.parent('canvas-container')
      return new Promise(resolve => {
        p.loadImage(imgSrc, function (img: any) {
          glitch = new Glitch(img, p)
          isLoaded = true

          resolve(0)
        })
        p.frameRate(10)
      })
    }

    p.draw = function () {
      p.clear()
      p.background('rgba(17,17,17, 0.0)')

      if (isLoaded) {
        glitch.show()
      }

      // fill(255, 255, 255);
      // textSize(14);
      // text('FPS: ' + floor(frameRate()), 20, 30);
    }
  }

  new p5(sketch)
}
const title = 'mahdiyar anari\'s personal website'
const description = 'Hi👋 i\'m mahdiyar and this is my personal website!! im a fullstack web developer and system admin '

useSeoMeta({
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: '[og:image]',
  // ogUrl: '[og:url]',
  twitterTitle: title,
  twitterDescription: description,
  // twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <section id="index" class="page w-full overflow-x-hidden relative">
    <img
      src="@/assets/bgs/home-banner.jpg"
      class="w-full h-full object-cover absolute inset-0"
      alt=""
    />
    <!-- <div id="canvas"> -->
    <div>
      <div
        id="canvas"
        class="container mx-auto flex justify-between items-center flex-col-reverse lg:flex-row"
      >
        <div id="canvas-main" class="relative p-3 w-full lg:w-3/5 z-10">
          <div class="">
            <div id="myname">
              <h1
                class="effect-crt text-primary text-5xl sm:text-7xl md:text-8xl lg:text-9xl c-effect-crt"
              >
                MAHDIAR ANARI
              </h1>
            </div>

            <div
              id="webdev"
              class="font-chakra md:text-6xl text-5xl md:py-5 py-1 font-medium flex flex-col md:flex-row justify-start items-start text-retro-gray"
            >
              <span>I'm a </span>
              <span class="md:ml-6 relative">
                <h3
                  class="glitch2 add-litral-cursor"
                  title="web developer"
                  ref="webdev"
                >
                  web developer
                </h3>
              </span>
            </div>

            <nav
              class="text-xl md:text-2xl lg:text-4xl flex flex-col items-start"
            >
              <nuxt-link
                v-for="{ name, link } in navigation"
                :key="name"
                :to="'/' + link"
                class="skill-item effect-crt flex items-center mt-5 c-effect-crt u-hover  relative"
              >
                <span class="hidden"> &gt; </span>
                {{ name }}
                <svg
                  class="w-10 h-10 text-gray-300 rotate-45 absolute -right-10 -top-2 "
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z"
                  />
                </svg>
              </nuxt-link>

              <div
                @click="loadMusic"
                v-show="!appState.musicIsLoaded"
                class="skill-item effect-crt mt-5 c-effect-crt u-hover"
              >
                <span class="hidden"> &gt; </span>
                Play Music
              </div>
            </nav>
          </div>
        </div>
        <div
          id="canvas-pic"
          class="w-full lg:w-2/5 relative overflow-hidden flex justify-center items-center"
        >
          <div
            class="relative h-80 sm:h-96 flex justify-center items-center"
            id="canvas-container"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section {
  @apply z-0;
  background: center center / cover;
}
.u-hover {
  &:hover span {
    display: inline-block;
  }
  &:hover svg {
    display: none;
  }
}

canvas {
  object-fit: cover;
}

.add-litral-cursor {
  position: relative;
  &::after {
    content: '_';
    position: absolute;
    right: 0;
    transform: translateX(100%);
    animation: blink 1s infinite;
  }
}

@keyframes blink {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#webdev {
  font-weight: 900;
  color: #4aa7d0;
  text-shadow: 2px 1px 0px #2968b1;
}
</style>
