import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDynamicWallsStore = defineStore('dynamicWalls', () => {
  const postsDetail = ref({})

  const setPostsDetail = (value) => {
    postsDetail.value = value
  }

  return {
    postsDetail,
    setPostsDetail
  }
})