<template>
  <div class="flex flex-row items-center justify-center gap-[2px] pt-5">
    <button
      v-if="!buttonDisplay && currentPage > 1"
      class="size-9 rounded-full bg-icon-arrow-left bg-center bg-no-repeat disabled:opacity-25"
      @click="previousPage"
    ></button>
    <button
      v-for="item in displayedPages"
      :key="item"
      class="size-9 rounded-full"
      :class="buttonStyle(item)"
      @click="toPage(item)"
    >
      {{ item }}
    </button>
    <button
      v-if="!buttonDisplay && currentPage < totalPage"
      class="active: size-9 rounded-full bg-icon-arrow-right bg-center bg-no-repeat disabled:opacity-25"
      @click="nextPage"
    ></button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  current: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  pageSize: { type: Number, default: 10 },
})
const emit = defineEmits(['changePage'])

let currentPage = ref(props.current)
let perPage = ref(props.pageSize)

const nextPage = () => {
  if (currentPage.value < totalPage.value) {
    currentPage.value += 1
  }
  emit('changePage', currentPage.value)
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1
  }
  emit('changePage', currentPage.value)
}

const toPage = (numPage) => {
  if (typeof numPage === 'number') {
    currentPage.value = numPage
    emit('changePage', currentPage.value)
  }
}

const totalPage = computed(() => Math.ceil(props.total / perPage.value))
const buttonDisplay = computed(() => totalPage.value <= 1)
const buttonStyle = computed(() => (item) => item === currentPage.value ? 'bg-primary-1 text-white' : 'bg-transparent text-primary-1')

const displayedPages = computed(() => {
  if (totalPage.value <= 4) {
    return Array.from({ length: totalPage.value }, (_, index) => index + 1)
  } else {
    if (currentPage.value <= 2) {
      return [1, 2, '...', totalPage.value]
    } else if (currentPage.value >= totalPage.value - 1) {
      return [1, '...', totalPage.value - 1, totalPage.value]
    } else {
      return [1, '...', currentPage.value - 1, currentPage.value, currentPage.value + 1, '...', totalPage.value]
    }
  }
})

defineOptions({
  name: 'Pagination'
})
</script>