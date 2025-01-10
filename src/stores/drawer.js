import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const eventDescriptionDrawerRef = ref(null)
  const drawerObject = ref({
    direction: 'btt',
    isOpen: false,
    confirmHandler: () => {}
  })

  const toggleButtonsDrawer = (val) => {
    drawerObject.value.isOpen = val
  }

  const updateButtonsDrawer = (updatedProperties) => {
    // 檢查每個要更新的屬性
    for (const property in updatedProperties) {
      if (Object.prototype.hasOwnProperty.call(drawerObject.value, property)) {
        // 更新屬性
        drawerObject.value[property] = updatedProperties[property]
      } else {
        console.error(`Property "${property}" does not exist in drawerObject.`)
      }
    }
  }

  return {
    eventDescriptionDrawerRef,
    drawerObject,
    toggleButtonsDrawer,
    updateButtonsDrawer
  }
})