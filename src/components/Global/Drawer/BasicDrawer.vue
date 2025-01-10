<template>
  <el-drawer
    v-model="drawerIsOpen"
    direction="btt"
    :show-close="props.showClose"
    :modal-class="props.modalClass"
    :with-header="props.withHeader"
    :size="props.size"
    :close-on-click-modal="props.closeOnClickModal"
  >
    <template v-slot:header>
      <slot name="header"></slot>
    </template>
    <slot name="default"></slot>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </el-drawer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  modalClass: {
    type: String,
    default: null
  },
  direction: {
    type: String,
    default: null
  },
  showClose: {
    type: Boolean,
    default: false
  },
  withHeader: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isOpen'])

const drawerIsOpen = computed({
  get () {
    return props.isOpen
  },
  set (val) {
    emit('update:isOpen', val)
  }
})

defineOptions({
  name: 'BasicDrawer'
})
</script>