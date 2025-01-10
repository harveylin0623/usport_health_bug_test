import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import _ from 'lodash'

export const useAuthStore = defineStore('auth', () => {
  const profile = ref({})
  const isLogin = computed(() => _.size(profile.value) > 0)
  const setProfile = (value) => {
    profile.value = value
  }
  return { isLogin, profile, setProfile }
}, {
  persist: {
    key: 'profile',
  }
})