<template>
  <div
    class="form-fields-block relative flex w-full flex-row rounded bg-white p-1"
    :class="{'error': error}"
  >
    <label
      v-if="props.labelInInput"
      class="shrink-0 grow-0 p-1"
    >{{ props.label }}</label>
    <input
      v-model="inputValue"
      type="text"
      class="shrink grow p-1 text-sm leading-4 text-gray-4"
      :class="{'text-right': props.labelInInput, 'error': error}"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="validateInput"
      @keyup="handleChangeValue($event)"
      @compositionstart="compositionStart"
      @compositionend="compositionEnd"
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
import _ from 'lodash'

const props = defineProps({
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  labelInInput: { type: Boolean, default: true },
  modelValue: { type: String, default: '' },
  verify: { type: Boolean, default: false },
  debounce: { type: Boolean, default: false }
})
const emit = defineEmits(['verified', 'changeValue'])

const { t } = useI18n()
const errorMessage = ref('')
const inputValue = ref(props.modelValue)
const error = computed(() => errorMessage.value !== '')
const time = computed(() => props.debounce ? 500 : 0)
const wordFormationIsComplete = ref(true)

const validateInput = () => {
  if (!props.verify) {
    return
  }
  const value = inputValue.value
  if (!value) {
    errorMessage.value = t('formFields.validateMessage.required')
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
  if (wordFormationIsComplete.value) {
    emit('changeValue', e.target.value.trim())
  }
}, time.value)

const handleChangeValue = (e) => {
  onChange(e)
}

defineOptions({
  name: 'BaseInput'
})
</script>
