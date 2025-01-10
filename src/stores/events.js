import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { eventsApi } from '@/api/events.js'

export const useEventsStore = defineStore('events', () => {
  const eventsCode = 'events_health_exercises' // 2024 年度健康體適能活動 events code: events_health_exercises'
  const eventMissionType = ref('') // 活動任務 event mission code
  const firstEnabledEventMissionInfo = ref({}) // 第一個活動任務資訊
  const eventsInfo = ref({}) // 健康體適能活動資訊
  const eventIsRunning = computed(() =>  eventsInfo.value?.runningEventMissionCount > 0) // 是否有子活動在進行中
  const eventsMissionsSummary = ref({}) // 健康體適能活動任務總數(活動首頁數據儀表板)

  const setFirstEnabledEventMissionInfo = (value) => {
    firstEnabledEventMissionInfo.value = value
  }

  const setEventMissionType = (value) => {
    eventMissionType.value = value
  }

  const setEventsInfo = async(value) => {
    eventsInfo.value = value
    // 當前有無進行的活動任務
    if (eventIsRunning.value) {
      setEventMissionType(value.runningEventMission.code)
    } else {
      // 當前無進行的活動任務，取得第一個活動任務資訊
      const res = await eventsApi.getFirstEnabledMission({
        type: 'getFirstEnabledMission',
        events_code: eventsCode
      })
      if (res?.firstEnabledEventMission) {
        // 有取得第一個活動
        setEventMissionType(res.firstEnabledEventMission.code)
        setFirstEnabledEventMissionInfo(res.firstEnabledEventMission)
      } else {
        // 未取得第一個活動
        setEventMissionType('events_health_exercises_walk')
      }
    }
  }

  const setEventsMissionsSummary = (value) => {
    eventsMissionsSummary.value = value
  }

  return {
    eventsCode,
    eventMissionType,
    firstEnabledEventMissionInfo,
    eventsInfo,
    eventIsRunning,
    eventsMissionsSummary,
    setEventsInfo,
    setEventMissionType,
    setEventsMissionsSummary,
  }
}, {
  persist: {
    key: 'events_info',
  }
})