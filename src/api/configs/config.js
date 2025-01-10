import axios from 'axios'
import { useCommonStore } from '@/stores/common.js'

const baseConfig = axios.create({
  baseURL: `${import.meta.env.VITE_PHASE_API_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'zh-TW',
    'app-id': import.meta.env.VITE_APP_ID,
    'device-uuid': import.meta.env.VITE_DEVICE_UUID
  }
})

baseConfig.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

baseConfig.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const commonStore = useCommonStore()
  commonStore.setLoading(false)
  commonStore.toggleApiModal(true)
  return Promise.reject(error)
})

export default baseConfig