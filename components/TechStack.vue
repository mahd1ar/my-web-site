<script lang="ts" setup>

export type Logo =
  | 'tailwind'
  | 'nuxt'
  | 'vue'
  | 'nginx'
  | 'ubuntu'
  | 'wordpress'
  | 'webpack'
  | 'prisma'
  | 'vueuse'
  | 'express'
  | 'graphql'

export type TechStachPropType = { logo: Logo; label: string } | Logo[]

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
          :src="`/tech_logos/${i.logo || i}.svg`"
          class="w-7 h-7"
          :alt="i.label || i"
        />
        <span class="text-xs font-mono"> {{ i.label || i }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
