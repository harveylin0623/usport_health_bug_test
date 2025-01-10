<template>
  <div
    class="form-fields-block relative flex w-full flex-row rounded bg-white p-1"
    :class="{'error': error}"
  >
    <label
      v-if="props.labelInInput"
      class="shrink-0 grow-0 p-1"
    >{{ props.label }}</label>
    <el-input-number
      v-model="inputValue"
      class="shrink grow p-1 text-sm leading-4 text-gray-4"
      :controls="false"
      :placeholder="props.placeholder"
      @blur="validateInput"
      @keyup="handleChangeValue($event)"
      @keydown="inputLimit($event)"
    />
  </div>
  <span
    v-if="error"
    class="error-message text-sm text-danger"
  >{{ errorMessage }}</span>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  labelInInput: { type: Boolean, default: true },
  value: { type: Number, default: null },
  verify: { type: Boolean, default: false }
})
const emit = defineEmits(['verified', 'changeValue'])

const { t } = useI18n()
const errorMessage = ref('')
const inputValue = ref(props.value)
const error = computed(() => errorMessage.value !== '')

// 驗證數值，三位以內整數，小數點後最多兩位數
const handleValuesValidations = () => {
  const regexThreeDigitInteger = /\b\d{1,3}\b/
  const regexTwoPositiveIntegers = /\b\d{1,2}\b/
  const verifyValue = String(inputValue.value).split('.')
  if (verifyValue[1]) {
    return regexThreeDigitInteger.test(verifyValue[0]) && regexTwoPositiveIntegers.test(verifyValue[1])
  }
  return regexThreeDigitInteger.test(verifyValue[0])
}

const validateInput = () => {
  if (!props.verify) {
    return
  }
  const value = inputValue.value
  if (!value) {
    errorMessage.value = t('formFields.validateMessage.required')
    emit('verified', false)
  } else if (!handleValuesValidations()) {
    errorMessage.value = t('modal.content.verifyValues')
    emit('verified', false)
  } else {
    errorMessage.value = ''
    emit('verified', true)
  }
}

// 處理 el-input-number 允許輸入 'e', '+', '-' 的問題，限制不可輸入
const inputLimit = (e) => {
  const notAllowList = ['e', '+', '-']
  if(notAllowList.includes(e.key)){
    e.returnValue = false
    return false
  }
  return true
}

const handleChangeValue = (e) => {
  emit('changeValue', e.target.value.trim())
}

defineOptions({
  name: 'BaseInputNumber'
})
</script>
