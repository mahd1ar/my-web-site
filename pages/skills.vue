<script lang="ts" setup>
import { timeout } from '~/libraries/helpers'
import anime from 'animejs'
import { useAppState } from '~/composables/appState'
import useBox from '@/mixin/BoxMixin'
import useNavigation from '@/mixin/navigation'

const appState = useAppState()
// useBox()
useNavigation()

appState.changeStyle({
  background: '#171b1a',
  color: '#f8ca9a',
  border: '1px #0ffbfb solid'
})

const skills = [
  { name: 'Javascript & TS', progress: 99 },
  { name: 'HTML/CSS', progress: 99 },
  { name: 'Nodejs', progress: 70 },
  { name: 'Linux and Devops', progress: 80 },
  { name: 'Local Network', progress: 88 },
  { name: 'English lang ', progress: 79 }
]

// const isLoading = ref( true);
// computed: {
//   ...mapGetters(['level']),
// },

onMounted(async () => {
  await timeout(2000)

  const percentage = document.querySelectorAll('.progress-percentage')!
  anime({
    targets: '.skills__progress-width',
    width: (el: HTMLDivElement) => {
      return el.dataset.progress + '%'
    },
    delay: (_: any, i: number) => (i + 2) * 150
  })

  percentage.forEach((i, index) => {
    const datap = {
      perscent: 0
    }

    anime({
      targets: datap,
      perscent: skills[index].progress,
      round: 1,
      easing: 'linear',
      update: function () {
        i.innerHTML = String(datap.perscent)
      }
    })
  })
})
</script>

<template>
  <section id="skill" class="page w-full relative">
    <img
      src="@/assets/bgs/space.jpeg"
      class="w-full h-full object-cover absolute inset-0"
      alt=""
    />

    <div class="container mx-auto relative"></div>
    <div class="flex flex-col sm:flex-row md:container m-auto relative">
      <div class="page-image__container">
        <img
          alt="rocket"
          id="rocket"
          class="border-2 border-gray-400"
          src="~/assets/gifs/rocket.webp"
        />
      </div>
      <div class="page-main__container">
        <div id="skills" class="my-auto">
          <h1 class="skills__title">skills</h1>
          <div class="skills__wrap">
            <ul class="skills__list">
              <li
                v-for="(item, inx) in skills"
                :key="inx"
                class="skills__list-item"
              >
                <div
                  class="
                    skill-items-title
                    overflow-hidden
                    font-bold
                    w-full
                    lg:w-1/3
                  "
                >
                  <span>{{ item.name }}</span>
                </div>
                <span class="skills__progress-wrap">
                  <div class="skills__progress-bar">
                    <div
                      class="skills__progress-width"
                      :data-progress="item.progress"
                    ></div>
                  </div>
                  <div class="skills__progress-percent">
                    <span class="progress-percentage"> 00 </span>
                    <span class="text-gray-400">%</span>
                  </div>
                </span>
              </li>
            </ul>

            <!-- <div class="gap" :style="{ height: 80 * level + 'px' }">--</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply z-0 bg-cover bg-center;
}

.page-image__container {
  @apply w-8/12 mx-auto sm:w-5/12 lg:w-1/3 h-full flex justify-center;
}

.page-main__container {
  @apply text-white flex flex-col justify-center ml-4
          sm:w-7/12
          lg:w-8/12
          xl:ml-0;
}

.skills__title {
  @apply mb-4 w-4/5 my-10 mx-auto sm:mx-px sm:my-auto;
  font-size: 2.5rem;
  color: cyan;
}

.skills__wrap {
  @apply flex flex-col font-chakra text-3xl;
}

.skills__list {
  @apply w-4/5 mx-auto sm:w-full;
}

.skills__list-item {
  @apply flex h-20 mb-1 lg:mb-3 flex-col lg:h-auto lg:flex-row;
}

.skills__item-title {
}

.skills__progress-wrap {
  @apply flex lg:w-2/3 items-center;
}

.skills__progress-bar {
  @apply h-7 w-full relative border-white border-2 lg:ml-6 lg:w-56 rounded-sm;
}

.skills__progress-percent {
  @apply ml-3 text-2xl w-20 lg:w-16 bg-gray-800 text-center;
}

.skills__progress-width {
  @apply h-full relative flex justify-center bg-yellow-300 w-0;
  &::after {
    content: '';
    width: 90%;
    position: absolute;
    top: 3px;
    background-color: #d6f5ff;
    background-color: #f3ffd6;
    height: 4px;
  }
}
</style>
