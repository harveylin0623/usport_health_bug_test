<template>
  <div class="loader"></div>
</template>

<script setup>
defineOptions({
  name: 'Loader'
})
</script>

<style lang="scss" scoped>
.loader {
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}
@keyframes l5 {
    0%  {box-shadow: 15px 0 #0005, -15px 0 #0002;background: #0005 }
    33% {box-shadow: 15px 0 #0005, -15px 0 #0002;background: #0002}
    66% {box-shadow: 15px 0 #0002,-15px 0 #0005; background: #0002}
    100%{box-shadow: 15px 0 #0002,-15px 0 #0005; background: #0005 }
}
</style>