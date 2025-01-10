import baseConfig from './config'
import phaseConfig from './phaseConfig'
import { getTimeStamp } from '@/utility/getDate.js'
import { getFormData } from '@/utility/getFormData.js'
import { wmSign } from '@/utility/crypto.js'
import { apiErrorDisposal } from '@/utility/apiErrorDisposal'
const authKey = 'member_access_token'

/** 第一階段使用的 API */
const baseAxios = (option) => {
  let { data, ...other } = option
  data = data === undefined ? {} : data
  const requestSchema = {
    member_access_token: localStorage.getItem(authKey) || '',
    request_parameter: {
      ...data,
    },
    timestamp: getTimeStamp()
  }
  const sign = wmSign(requestSchema)
  return baseConfig({ ...other, data: { sign } }).then(res => res.data)
}

/** 後面階段使用的 API */
/**
 *
 * @param {Object} option // method、url
 * @param {Object} params // 傳送給伺服器的資料參數
 * @param {Boolean} loginRequired // 是否需要登入
 * @param {Boolean} signRequired // 是否需要 sign
 * @returns
 */

const phaseAxios = async (option, params = {}, loginRequired = true, isImageUpload = false ) => {
  try {
    const authToken = localStorage.getItem(authKey)
    if (loginRequired && !authToken) {
      apiErrorDisposal.handleNoTokenError()
      return
    }
    let body = isImageUpload ? {
      member_access_token: authToken,
      ...params,
    } : {
      member_access_token: authToken,
      request_parameter: {
        ...params
      },
      timestamp: getTimeStamp()
    }
    const sign = wmSign(body)
    const data = isImageUpload ? getFormData(body) : { sign: sign }
    const res = await phaseConfig({ ...option, data: data })
    return res.data.results
  } catch (error) {
    console.log('error:', error)
  }
}

export { baseAxios, phaseAxios }