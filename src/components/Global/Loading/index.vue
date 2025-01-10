<template>
  <div
    v-show="commonStore.isLoading"
    class="fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center space-x-1 bg-mask"
  >
    <div
      v-for="count in 3"
      :key="count"
      class="dot size-[23px] scale-0 rounded-full bg-primary-1"
    ></div>
  </div>
</template>

<script setup>
import { watch, onBeforeUnmount } from 'vue'
import { useCommonStore } from '@/stores/common.js'

const commonStore = useCommonStore()

watch(() => commonStore.isLoading, (val) => {
  const method = val ? 'add' : 'remove'
  document.body.classList[method]('overflow-hidden')
})

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden')
})

defineOptions({
  name: 'Loading'
})
</script>

<style lang="scss" scoped>
$animDelay: 0.25s;
.dot {
  @for $i from 0 to 3 {
    &:nth-child(#{$i + 1}) {
      animation-delay: $animDelay * $i;
    }
  }
  animation: dotanim 1.5s infinite ease-in-out;
}

@keyframes dotanim {
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  90% { transform: scale(0); }
  100% { transform: scale(0); }
}
</style>