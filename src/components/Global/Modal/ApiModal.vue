<template>
  <el-dialog
    v-model="isOpen"
    :show-close="false"
    :close-on-click-modal="false"
    align-center
    class="modal"
  >
    <template v-slot:header>
      <div class="break-all text-center text-lg">{{ modalTitle }}</div>
    </template>
    <div class="text-center">{{ modalContent }}</div>
    <template v-slot:footer>
      <div class="flex divide-x border-t text-center text-primary-1">
        <div
          v-if="showCancel"
          class="basis-1/2 cursor-pointer px-3 py-2"
          @click="isOpen = false"
        >
          {{ $t('button.cancel') }}
        </div>
        <div
          class="cursor-pointer px-3 py-2"
          :class="buttonWidth"
          @click="confirmHandler"
        >
          {{ $t('button.ok') }}
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'
import { useCommonStore } from '@/stores/common.js'

const props = defineProps({
  modalTitle: { type: String, default: '提示' },
  modalContent: { type: String, default: 'API發生錯誤' },
  showCancel: { type: Boolean, default: false },
})

const commonStore = useCommonStore()

const buttonWidth = computed(() => {
  return props.showCancel ? 'basis-1/2' : 'basis-full'
})

const isOpen = computed({
  get() {
    return commonStore.apiModalIsOpen
  },
  set(val) {
    commonStore.toggleApiModal(val)
  }
})

const confirmHandler = () => {
  commonStore.toggleApiModal(false)
}

defineOptions({
  name: 'ApiModal'
})
</script>