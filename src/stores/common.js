import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
  const isLoading = ref(false)
  const toolbarTitle = ref('')
  const toolbarBackUrl = ref('/')
  const apiModalIsOpen = ref(false)
  const modalObject = ref({
    isOpen: false,
    title: '提示',
    content: 'API發生錯誤',
    showCancel: false,
    leftButtonText: '取消',
    rightButtonText: '確定',
    confirmHandler: () => {}
  })

  const setLoading = (value) => {
    isLoading.value = value
  }

  const setToolbarTitle = (text) => {
    toolbarTitle.value = text
  }

  const setToolbarBackUrl = (path) => {
    toolbarBackUrl.value = path
  }

  const toggleApiModal = (val) => {
    apiModalIsOpen.value = val
  }

  const toggleModal = (val) => {
    modalObject.value.isOpen = val
  }

  const updateModal = (updatedProperties) => {
    // 檢查每個要更新的屬性
    for (const property in updatedProperties) {
      if (Object.prototype.hasOwnProperty.call(modalObject.value, property)) {
        // 更新屬性
        modalObject.value[property] = updatedProperties[property]
      } else {
        console.error(`Property "${property}" does not exist in modalObject.`)
      }
    }
  }

  return {
    isLoading,
    toolbarTitle,
    toolbarBackUrl,
    setLoading,
    setToolbarTitle,
    setToolbarBackUrl,
    apiModalIsOpen,
    toggleApiModal,
    modalObject,
    toggleModal,
    updateModal
  }
})