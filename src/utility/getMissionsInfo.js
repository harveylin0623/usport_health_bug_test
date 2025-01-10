import { useMissionsStore } from '@/stores/missions.js'
import { missionsApi } from '@/api/missions.js'
import dayjs from 'dayjs'

/**
 * call api
 */
export const fetchMissionsInfoData = async () => {
  const missionsStore = useMissionsStore()
  const res = await missionsApi.getMissionsByCode({
    type: 'showByCode',
    id: 'health_bank' // 2024 年度活動 missions code: health_bank
  })
  // 資料保存在 pinia store
  missionsStore.setMissionsInfo(res.mission)
  return res.mission
}

/**
 * 確認此資料是否不存在與過期
 * @returns
 */
export const hasExpiredMissionsInfo = () => {
  const missionsStore = useMissionsStore()
  if (!missionsStore.missionsInfo.expire) {
    return true
  }
  return dayjs().isAfter(dayjs(missionsStore.missionsInfo.expire))
}

/**
 * 取得 MissionsInfo ，會先判斷資料是否不存在與過期，是才會在 call api
 * @returns
 */
export const getMissionsInfo = async () => {
  const hasExpired = hasExpiredMissionsInfo()
  if (hasExpired) {
    const missionsInfo = await fetchMissionsInfoData()
    return missionsInfo
  }
  return
}