<template>
  <input
    id="upload"
    type="file"
    class="hidden"
    @change="onFileChange"
  />
  <div class="uploadStyle flex min-h-[105px] w-full flex-col gap-2 rounded bg-gray-0 p-3">
    <label
      type="button"
      for="upload"
    >
      <div
        v-if="image"
        class="img-block flex min-h-[153px] w-full items-center justify-center overflow-hidden rounded bg-gray-1"
      >
        <img
          :src="image"
          class="w-full object-cover"
        />
      </div>
      <div
        v-else
        class="mx-auto size-[60px] bg-icon-upload"
      ></div>
      <div class="d">
      </div>
      <p
        v-if="!image"
        class="text-center text-xs text-gray-4"
      >{{ $t('formFields.placeholder.selectFile') }}</p>
    </label>
    <div
      v-if="image"
      class=" flex justify-center gap-5"
    >
      <label
        type="button"
        for="upload"
        class="text-center text-xs text-gray-4"
      >
        {{ $t('formFields.placeholder.reselectFile') }}
      </label>
      <button
        class="text-xs text-danger"
        @click="imageRemove"
      >
        {{ $t('button.removeImage') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { convertImageType } from '@/utility/compressAndConvertImageFile.js'

const props = defineProps({
  image: { type: [Object, String] , default: null }
})
const emit = defineEmits(['imageFile'])
const image = ref(props.image)

const imageLoaded = (e) => {
  const imageFile = e.target.result
  image.value = imageFile
}

const imageRemove = () => {
  // 取消選取圖片
  image.value = null
  emit('imageFile', null)
  return
}

const onFileChange = async (e) => {
  if (e.target.files.length === 0) {
    imageRemove()
    return
  }
  let file = e.target.files[0]
  if (!['image/jpeg', 'image/jpg'].includes(file.type)) {
    file = await convertImageType(file)
  }
  const reader = new FileReader()
  reader.addEventListener('load', imageLoaded)
  reader.readAsDataURL(file)
  emit('imageFile', file)
}

defineOptions({
  name: 'BaseFileUpload'
})
</script>