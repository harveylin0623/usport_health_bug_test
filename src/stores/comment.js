import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCommentStore = defineStore('comment', () => {
  const commentsInfo = ref({})
  const commentEditId = ref(null)
  const commentEditItemInfo = computed(() => commentsInfo.value.filter((item) => item.id === commentEditId.value )[0])

  const setCommentsInfo = (value) => {
    commentsInfo.value = value
  }

  const setCommentEditId = (value) => {
    commentEditId.value = value
  }

  return {
    commentsInfo,
    commentEditId,
    setCommentsInfo,
    setCommentEditId,
    commentEditItemInfo
  }
}, {
  persist: {
    key: 'comment_info',
  }
})