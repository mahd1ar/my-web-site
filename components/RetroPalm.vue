<script lang="ts" setup></script>

<template>
  <div class="x-container">
    <div class="gradient"></div>
    <div class="tree"></div>
    <div class="lines"></div>
  </div>
</template>

<style scoped>
.x-container {
  width: 66vmin;
  height: 66vmin;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.gradient {
  height: 100%;
  background: linear-gradient(#A12BFB 25%,
      #FC2DFC,
      #EB209B 75%);
}

.lines {
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background: repeating-linear-gradient(rgba(0, 0, 0, .725),
      rgba(0, 0, 0, .725) 2.5%,
      transparent 2.5%,
      transparent 5.25%);
  animation: lines linear infinite .75s;
}

.tree {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://78.media.tumblr.com/6fbf1edc445d7210e02d20e6e342287a/tumblr_ozop06XvsX1vq64mxo1_1280.png) 55% 5vmin no-repeat;
  background-size: 70%;
  filter:
    brightness(0%) blur(.5px);
}

@keyframes lines {
  to {
    background-position: 0 4vmin;
  }
}
</style>
