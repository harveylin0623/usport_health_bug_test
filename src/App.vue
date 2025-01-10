<template>
  <component
    :is="layoutName"
    v-if="hasLayout"
  >
    <router-view />
  </component>
  <Loading />
  <ApiModal />
  <Modal />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import DefaultLayout from '@/layouts/Default.vue'
import OtherLayout from '@/layouts/Other.vue'
import Loading from '@/components/Global/Loading/index.vue'

const { t } = useI18n()
const route = useRoute()

const layoutName = computed(() => {
  const { layout } = route.meta
  return layout !== undefined ? layout : ''
})

const hasLayout = computed(() => layoutName.value !== '')

useHead({ titleTemplate: `${t('seo.title.projectName')} | %s` })

defineOptions({
  components: {
    DefaultLayout,
    OtherLayout,
  }
})

</script>