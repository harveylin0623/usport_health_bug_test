<template>
  <button
    class="btn-square flex w-full items-center justify-start px-3"
    :class="[buttonClass, buttonSize, buttonType]"
    :disabled="disabled"
    @click="clickHandler"
  >
    <img
      v-if="showImg"
      :src="imgUrl"
      class="size-12 shrink-0 grow-0"
      :class="[imgUrlClass]"
      alt=""
    />
    <span
      class="shrink grow"
      :class="[buttonTextClass]"
      v-html="buttonText"
    ></span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  imgUrl: { type: String, default: '' },
  imgUrlClass: { type: String, default: '' },
  buttonClass: { type: String, default: '' },
  buttonTextClass: { type: String, default: '' },
  buttonType: { type: String, default: 'btn-square-main' }, // btn-square-main: 橘底 白字 | btn-square-second: 透明底 灰字 灰框 | btn-square-obvious: 紅底 白字 ｜ btn-square-green: 綠底 白字
  clickCallback: { type: Function, default: () => {} },
  disabled:  { type: Boolean, default: false },
  size: { type: String, default: 'm' } // m: padding: 12px | s: padding: 4px 12px
})

const showImg = computed(() => props.imgUrl !== '')
const buttonText = computed(() => props.text.replace(/\n/g, '<br/>'))
const buttonSize = computed(() => props.size === 'm' ? 'py-3' : 'py-1')

const clickHandler = () => {
  props.clickCallback()
}

defineOptions({
  name: 'SquareButton'
})
</script>