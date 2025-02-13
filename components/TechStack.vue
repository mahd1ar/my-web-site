<script lang="ts" setup>
defineProps({
  items: {
    type: Array as PropType<TechStachPropType>,
    default: []
  }
})
</script>

<template>
  <div class="text-white">
    <div class="flex gap-4">
      <div
        v-for="(i, index) in items"
        :key="index"
        class="flex flex-col items-center justify-center gap-1 flex-wrap"
      >
        <img
        loading="lazy"
          :src="`https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/${i}.png`"
          class="w-7 h-7"
          :alt="i.label || i"
        />
        <span class="text-xs font-mono"> {{ i.label || i }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
