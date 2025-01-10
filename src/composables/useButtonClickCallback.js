import { useRouter } from 'vue-router'

export const useButtonClickCallback = () => {
  const router = useRouter()

  const createClickCallback = (payload) => {
    return () => {
      const { name = 'article', category = '',  id = '', toolbarTitle = '', backUrl = '/'  } = payload
      router.push({
        name,
        params: { category, id },
        query: { title: toolbarTitle, backUrl: backUrl }
      })
    }
  }

  return { createClickCallback }
}