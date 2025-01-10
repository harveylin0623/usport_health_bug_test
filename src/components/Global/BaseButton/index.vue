<template>
  <button
    class="btn flex w-full items-center justify-start"
    :class="[buttonType]"
    @click="clickHandler"
  >
    <img
      v-if="showImg"
      :src="imgUrl"
      class="size-12 shrink-0 grow-0"
      alt=""
    />
    <span
      class="shrink grow"
      v-html="buttonText"
    ></span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  imgUrl: { type: String, default: '' },
  buttonType: { type: String, default: 'btn-primary' },
  clickCallback: { type: Function, default: () => {} }
})

const showImg = computed(() => props.imgUrl !== '')

const buttonText = computed(() => props.text.replace(/\n/g, '<br/>'))

const clickHandler = () => {
  props.clickCallback()
}

defineOptions({
  name: 'BaseButton'
})
</script>