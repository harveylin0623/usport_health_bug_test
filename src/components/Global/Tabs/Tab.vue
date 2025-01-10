<template>
  <li
    class="test-black w-full cursor-pointer whitespace-nowrap rounded-full  text-center text-xl font-black leading-5"
    :class="tabStyle"
    @click="handlerClick"
  >
    {{ props.tab.name }}
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tab: {
    type: Object,
    required: true
  },
  activeTab: {
    type: String,
    default: ''
  },
  isSmallQuantities: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['handlerClick'])

const tabStyle = computed(() => {
  return {
    'bg-primary-1 text-white tab-active': props.tab.name === props.activeTab,
    'bg-white text-gray-4': props.tab.name !== props.activeTab,
    'px-[35.5px] py-[12.5px]': !props.isSmallQuantities
  }
})

const handlerClick = () => {
  emit('handlerClick', props.tab)
}

</script>