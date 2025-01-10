import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const metaRouters = import.meta.glob('./modules/*.js', { eager: true })

const routerArray = []
for (const key in metaRouters) {
  const mod = metaRouters[key]
  routerArray.push(...mod.default)
}

const router = createRouter({
  history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      if (to.name === 'commentsShare') {
        return { top: 0 }
      }
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/'
    },
    ...routerArray,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router