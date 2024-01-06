<script lang="ts" setup>
import { useAppState } from '~/store/appState';


const appState = useAppState()

appState.changeStyle({
  background: '#f25239',
  color: '#1b1d1c',
  border: '2px #ffffff solid',
  'box-shadow': '0px 0px 6px 1px #977a56'
})

const education = ref([
  {
    img_src: '',
    school: 'Nikan School',
    isLoaded: false,
    description: ['High School Diploma - Mathematics'],
    from: 2000,
    to: 2011
  },
  {
    img_src: '',
    school: `Islamic Azad University <br />
            (South Tehran Branch)`,
    isLoaded: false,
    description: ['Bachelor of science - Information Technology'],
    from: 2012,
    to: 2017
  },
  {
    img_src: '',
    school: `Tehran institute of technology`,
    isLoaded: false,
    description: [
      'Microsoft Server Administration - MSCE 2012',
      'Network+ and A+'
    ],
    from: 2016,
    to: null
  },
  {
    img_src: '',
    school: `Nooran`,
    isLoaded: false,
    description: [
      'Mikrotik MTCNA',
      'International Mikrotik Certificate No.1705NA1180'
    ],
    from: 2012,
    to: 2017
  }
])

function imageLoaded (i: number) {
  education.value[i].isLoaded = true
}

onMounted(async () => {
  const gifs = [
    'studycat.webp',
    'killmyself.gif',
    'computer-reddit.gif',
    'samljackson.webp'
  ].map(i => '/gifs/' + i)

  if ('IntersectionObserver' in window) {
    const entries = document.querySelectorAll('.c-elixir')

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver(entry => {
      entry.forEach(i => {
        if (i.isIntersecting)
          for (let j = 0; j < entries.length; j++)
            if (entries[j] === i.target)
              if (education.value[j].img_src === '') {
                // find image for its index
                education.value[j].img_src = gifs[j]
              }
      })
    }, options)

    entries.forEach(element => {
      observer.observe(element)
    })
  } else {
    await timeout(2000)

    gifs.forEach((element, index) => {
      education.value[index].img_src = element
    })
  }
})
</script>

<template>
  <section id="sss" class="ma-page w-full relative">
    <img
      src="@/assets/bgs/ligths.jpg"
      class="w-full h-full object-cover absolute inset-0"
      alt=""
    />

    <div class="container mx-auto relative">
      <div class="my-32">
        <div class="mb-2 flex justify-center">
          <RetroHeader title="Education" />
        </div>

        <div class="text-white flex flex-col items-center font-chakra">
          <div class="mt-20 mb-6">
            <NeonSign class="hidden" />
          </div>

          <ChevronBlink />
        </div>
      </div>

      <div class="">
        <div
          v-for="(edu, index) in education"
          :key="index"
          :class="index % 2 === 0 ? 'card__flow-rigth' : 'card__flow-left'"
          class="card"
        >
          <!-- picture -->
          <div class="card__img-container">
            <img
              v-if="!edu.isLoaded"
              src="../assets/gifs/elixir-1.gif"
              class="c-elixir h-24 w-32 self-center"
            />
            <transition name="fade">
              <img
                v-show="edu.isLoaded"
                :src="edu.img_src"
                @load="imageLoaded(index)"
                class="c-expresion opacity-75 sm:opacity-100"
              />
            </transition>
          </div>
          <!-- info -->
          <div class="card__info">
            <div class="card__info-container">
              <div class="my-auto">
                <h2 class="card__title" v-html="edu.school"></h2>

                <code class="text-gray-300"
                  >[
                  <div
                    v-for="(about, index2) in edu.description"
                    :key="(index2 + 1) * 100"
                    class="text-gray-200 pl-2"
                  >
                    <!-- &nbsp;&nbsp;&nbsp; -->
                    {{ about }} , <br />
                  </div>
                  ]
                </code>
              </div>

              <div class="card__date">
                {{ edu.from }} {{ edu.to ? '- ' + edu.to : '' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply z-0;
  background: center center/cover;
}

img {
  width: 100%;
  object-fit: cover;
  &.c-elixir {
    @apply w-14 object-contain mx-auto rounded-full p-2;
    background: #182642;
  }
  &.c-expresion {
    border: 2px solid rgb(236, 236, 236);
    // box-shadow: 14px 14px #e3e3e3;
  }
}

.card {
  @apply my-5 text-white flex flex-col w-4/5 mx-auto;
}

.card__flow-rigth {
  @apply sm:flex-row;
}

.card__flow-left {
  @apply sm:flex-row-reverse;
}

.card__img-container {
  @apply md:w-5/12 xl:w-4/12 px-2 flex w-full my-5 sm:my-0;
}

.card__info {
  @apply md:w-7/12 xl:w-8/12 mx-2 flex flex-col justify-center bg-black bg-opacity-25;
}

.card__info-container {
  @apply my-auto font-chakra h-full flex flex-col justify-center;
}

.card__title {
  @apply text-3xl bg-black p-1;
}

.card__date {
  @apply self-end mr-5 mb-5 text-blue-300 font-bold font-mono;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
