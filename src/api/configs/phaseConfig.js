import axios from 'axios'
import { apiErrorDisposal } from '@/utility/apiErrorDisposal'

const phaseConfig = axios.create({
  baseURL: `${import.meta.env.VITE_PHASE_API_HOST}/api`,
  headers: {
    'Accept-Language': 'zh-TW',
    'app-id': import.meta.env.VITE_APP_ID,
    'device-uuid': import.meta.env.VITE_DEVICE_UUID
    // Can not remove ERR_NGROK_6024 when using Shopify App Proxy get call
    // 'ngrok-skip-browser-warning': '69420'
  }
})

phaseConfig.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

phaseConfig.interceptors.response.use(function (response) {
  return apiErrorDisposal.handleSuccessError(response)
}, function (error) {
  apiErrorDisposal.handleRejectError()
  return Promise.reject(error)
})

export default phaseConfig