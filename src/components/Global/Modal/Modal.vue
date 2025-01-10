<template>
  <el-dialog
    v-model="modalIsOpen"
    :show-close="false"
    :close-on-click-modal="false"
    align-center
    class="modal"
  >
    <template v-slot:header>
      <div class="break-all text-center text-lg">{{ modalTitle }}</div>
    </template>
    <div
      class="text-center"
      style="white-space: pre-line"
      v-html="modalContent"
    ></div>
    <template v-slot:footer>
      <div class="flex divide-x border-t text-center text-primary-1">
        <div
          v-if="showCancel"
          class="basis-1/2 cursor-pointer px-3 py-2"
          @click="commonStore.toggleModal(false)"
        >
          {{ leftButtonText }}
        </div>
        <div
          class="cursor-pointer px-3 py-2"
          :class="buttonWidth"
          @click="confirmHandler"
        >
          {{ rightButtonText }}
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { useCommonStore } from '@/stores/common.js'

const commonStore = useCommonStore()

const buttonWidth = computed(() => {
  return commonStore.modalObject.showCancel ? 'basis-1/2' : 'basis-full'
})

const modalIsOpen = computed({
  get() {
    return commonStore.modalObject.isOpen
  },
  set(val) {
    commonStore.toggleModal(val)
  }
})

const modalTitle = computed({
  get() {
    return commonStore.modalObject.title
  },
  set(val) {
    commonStore.updateModal('title', val)
  }
})

const modalContent = computed({
  get() {
    return commonStore.modalObject.content
  },
  set(val) {
    commonStore.updateModal('content', val)
  }
})

const showCancel = computed({
  get() {
    return commonStore.modalObject.showCancel
  },
  set(val) {
    commonStore.updateModal('showCancel', val)
  }
})

const leftButtonText = computed({
  get() {
    return commonStore.modalObject.leftButtonText
  },
  set(val) {
    commonStore.updateModal('leftButtonText', val)
  }
})

const rightButtonText = computed({
  get() {
    return commonStore.modalObject.rightButtonText
  },
  set(val) {
    commonStore.updateModal('rightButtonText', val)
  }
})

const confirmHandler = async() => {
  await commonStore.modalObject.confirmHandler()
  commonStore.toggleModal(false)
}

defineOptions({
  name: 'Modal'
})
</script>