<template>
  <div class="form-fields-block form-textarea relative">
    <textarea
      v-model="textareaValue"
      class="w-full rounded bg-white p-3 pb-[25px] text-sm shadow-[0px_0px_8px_0px_#0000001A]"
      :class="{'error': error}"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="validateInput"
      @keyup="handleChangeValue($event)"
      @compositionstart="compositionStart"
      @compositionend="compositionEnd"
    ></textarea>
    <span class=" absolute bottom-[7px] left-0 w-[95%] rounded-b-[5px] bg-white px-[10px] py-[3px] text-xs text-gray-2">{{ currentWordCount }}/{{ wordLimit }}</span>
  </div>
  <span
    v-if="error"
    class="error-message text-sm text-danger"
  >{{ errorMessage }}</span>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import _ from 'lodash'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  verifyStatus: { type: Boolean, default: false },
  value: { type: String, default: '' },
})
const emit = defineEmits(['verified', 'changeValue'])

const { t } = useI18n()
const wordLimit = ref(100)
const textareaValue = ref(props.value)
const currentWordCount = computed(() => [...textareaValue.value].length)
const error = computed(() => errorMessage.value !== '')
const errorMessage = ref('')
const wordFormationIsComplete = ref(true)

const validateInput = () => {
  const value = textareaValue.value
  if (!value) {
    errorMessage.value = t('formFields.validateMessage.pleaseEnterComments')
    emit('verified', false)
  } else if (currentWordCount.value >  wordLimit.value) {
    errorMessage.value = t('formFields.validateMessage.wordLimitIsExceeded')
    emit('verified', false)
  } else {
    errorMessage.value = ''
    emit('verified', true)
  }
}

const compositionStart = () => {
  wordFormationIsComplete.value = false
}

const compositionEnd = (e) => {
  wordFormationIsComplete.value = true
  onChange(e)
}

const onChange = _.debounce(async function (e) {
  if(wordFormationIsComplete.value) {
    emit('changeValue', e.target.value.trim())
  }
}, 500)

const handleChangeValue = (e) => {
  onChange(e)
}

onBeforeMount(() => {
  if (props.value) {
    emit('verified', true)
  }
})
defineOptions({
  name: 'BaseTextarea'
})
</script>