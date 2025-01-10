<template>
  <div
    ref="target"
    class="target"
  ></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'

let observer = null
const target = ref(null)

const emit = defineEmits(['intersect'])

const observeIntersection = (entries) => {
  const [entry] = entries
  if (entry.isIntersecting) {
    emit('intersect')
  }
}

onMounted(() => {
  observer = new IntersectionObserver(observeIntersection)

  if (target.value) {
    observer.observe(target.value)
  }
})

onBeforeUnmount(() => {
  if (observer && target.value) {
    observer.unobserve(target.value)
  }
})

defineOptions({
  name: 'Observer'
})
</script>