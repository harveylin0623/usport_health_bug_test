<template>
  <div class="space-y-2 text-center">
    <p class="text-[17px] leading-5 text-gray-5">{{ props.title }}</p>
    <span class="text-xs text-gray-4">{{ props.subTitle }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    default: null
  }
})
defineOptions({
  name: 'UwalkTitle'
})
</script>