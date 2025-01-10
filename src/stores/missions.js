import { defineStore } from 'pinia'
import { ref } from 'vue'
import dayjs from 'dayjs'

export const useMissionsStore = defineStore('missions', () => {
  const missionsInfo = ref({})

  const setMissionsInfo = (value) => {
    missionsInfo.value = {...value, expire: dayjs().add(5, 'day').format('YYYY-MM-DD')}
  }

  return { missionsInfo, setMissionsInfo }
}, {
  persist: {
    key: 'missions_info',
  }
})