<template>
  <div
    ref="tabsBlock"
    class="invisible-scrollbar w-full overflow-x-auto rounded-lg pb-0"
  >
    <ul class="flex flex-nowrap gap-2">
      <Tab
        v-for="tab in props.tabs"
        :key="tab.name"
        :tab="tab"
        :active-tab="activeTab"
        :is-small-quantities="isSmallQuantities"
        @handler-click="handlerClick"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import Tab from './Tab.vue'
const props = defineProps({
  tabs: { type: Array, default: () => [] },
  activeTab: { type: String, default: '' }
})

const emit = defineEmits(['handlerClick'])

const tabsBlock = ref(null)

const handlerClick = (tab) => {
  emit('handlerClick', tab)
}

const isSmallQuantities = computed(() => props.tabs <= 3)

// 當 Tabs 項目多時 scrollbar 要滾動到 active 的 Tab 位置
const handlerTabsScrollTo = () => {
  if (tabsBlock.value.scrollWidth > tabsBlock.value.clientWidth) {
    const activeLi = document.getElementsByClassName('tab-active')[0]
    if (activeLi) {
      tabsBlock.value.scrollLeft = activeLi.offsetLeft - tabsBlock.value.offsetLeft - tabsBlock.value.clientWidth / 2 + activeLi.clientWidth / 2
    }
  }
}

onMounted(() => {
  handlerTabsScrollTo()
})

defineOptions({
  name: 'Tabs'
})
</script>