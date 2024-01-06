<script lang="ts" setup>
import { onBeforeMount } from 'vue'

const appState = useAppState()
const isMounted = ref(false)
const isWindowLoaded = ref(false)

onMounted(() => {
  isMounted.value = true
  appState.specifyStatusOfNavTextBtns()
})

watch([isMounted, isWindowLoaded], nvals => {
  // console.log(isMounted, isWindowLoaded)
  if (nvals[0] && nvals[0]) appState.doneLoadingApp()
})

onBeforeMount(() => {
  window.addEventListener('load', () => {
    if (window.history && !!window.history.pushState) {
      // window.history.pushState('back', null, '/')

      window.addEventListener('popstate', event => {
        const sessionHistoryValue = sessionStorage.getItem('history')
        const history = sessionHistoryValue
          ? sessionHistoryValue.split(',')
          : []
        history.push(location.href)
        sessionStorage.setItem('history', history.join(','))
      })
    }

    isWindowLoaded.value = true
  })
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage
        ref="page"
        class="h-full flex-1 flex items-center justify-center flex-col"
      />
    </NuxtLayout>
    <div id="glitch-box-pl"></div>
  </div>
</template>
