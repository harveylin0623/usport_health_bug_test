import { onMounted } from 'vue'
import { useCommonStore } from '@/stores/common.js'

export const useToolbar = (payload) => {
  const commonStore = useCommonStore()

  const setToolbarData = (payload = {}) => {
    const { title = '', backUrl = '/' } = payload
    commonStore.setToolbarTitle(title)
    commonStore.setToolbarBackUrl(backUrl)
  }

  onMounted(() => {
    setToolbarData(payload)
  })

  return { setToolbarData }
}