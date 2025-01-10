import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTeamsStore = defineStore('teams', () => {
  const teamsInfo = ref({})

  const setTeamsInfo = (value) => {
    teamsInfo.value = value
  }

  return { teamsInfo, setTeamsInfo }
})