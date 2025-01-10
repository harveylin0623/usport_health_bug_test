import { useCommonStore } from '@/stores/common.js'

export const useUpDateTitle = (newTitle) => {
  const commonStore = useCommonStore()
  if (newTitle) {
    commonStore.setToolbarTitle(newTitle)
  }
}