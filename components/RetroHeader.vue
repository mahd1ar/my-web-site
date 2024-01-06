<script lang="ts" setup >

defineProps({
  title: String
})

</script>

<template >
  <div class="overflow-hidden">
    <h1
      class="text-6xl whitespace-nowrap sm:text-7xl md:text-8xl"
      :data-text="title"
    >
      {{ title }}
    </h1>
  </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@700&display=swap');

h1 {
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Saira', sans-serif !important;
  display: block;
  position: relative;

  background: linear-gradient(
    to bottom,
    #00f2ff 0%,
    #e2fbff 50%,
    #0a343f 51%,
    #0094f7 100%
  );
  background-blend-mode: multiply;
  background-size: 10px; //$font-size;
  background-repeat: repeat;
  line-height: 1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: unset;
  // Noise
  &::before {
    background: none;
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: +2;
    background-image: url('/Ym9HCsT.gif');
    background-blend-mode: screen;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.5;
  }

  // Shadows
  &::after {
    background: none;
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    text-shadow: 1px -1px 0 rgba(255, 255, 255, 0.5),
      3px 1px 3px rgba(255, 0, 255, 0.85), -3px -2px 3px rgba(0, 0, 255, 0.85),
      1px -2px 0 rgba(255, 255, 255, 0.8);
    z-index: -2;
  }
}
</style>