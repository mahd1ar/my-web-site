<script lang="ts" setup>
defineProps({
  items: {
    type: Array as PropType<string[]>,
    default: []
  }
})

const errorOccurred = ref(false)
function clog(){
  console.log(...arguments)
}
</script>

<template>
  <div class="text-white w-full">
    <div class="flex gap-2 flex-wrap w-full">
      <div
        v-for="(i, index) in items"
        :key="index"
        class="inline-flex flex-row bg-black rounded p-0.5 items-center justify-center gap-1 flex-wrap"
      >
      <ClientOnly>

        <img 
        ref="imgref"
        v-show="!errorOccurred"
        @error="() => {
          ($refs.imgref as unknown as HTMLImageElement[] )[index].remove()
        }"
        loading="lazy"
        :src="`https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/${i}.png`"
        class="size-6"
        :alt="i"
        />
      </ClientOnly>
        <span class="text-xs font-mono"> {{  i }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
