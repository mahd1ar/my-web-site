<script lang="ts" setup >
</script>

<template >
  <div class="sign">
    <span class="sign__word select-none">Scroll down</span>
  </div>
</template>


<style lang="scss" scoped>
.sign {
  @apply text-3xl sm:text-4xl;
  font-family: 'Vibur', cursive;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__word {
    text-align: center;
    line-height: 1;
    color: #f8fcff;

    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
      0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
      0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
      0 0 60px rgba(30, 132, 242, 1);
  }
}
</style>