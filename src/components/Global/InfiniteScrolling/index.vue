<template>
  <div
    class="flex w-full flex-col "
    :class="props.styleClass"
  >
    <slot></slot>
    <div
      v-show="props.isLoading"
      class="flex justify-center p-5"
    >
      <Loader />
    </div>
    <Observer @intersect="emit('intersect')" />
  </div>
</template>

<script setup>
import Loader from '@/components/Global/InfiniteScrolling/Loader.vue'
import Observer from '@/components/Global/InfiniteScrolling/Observer.vue'

const props = defineProps({
  isLoading: { type: Boolean, default: false },
  styleClass: { type: String, default: 'gap-3' }
})
const emit = defineEmits(['intersect'])

defineOptions({
  name: 'InfiniteScrolling'
})
</script>