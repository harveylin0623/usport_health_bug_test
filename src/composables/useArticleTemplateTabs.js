import i18n from '@/plugins/i18n.js'
import { ref } from 'vue'

const { t } = i18n.global

export const useArticleTemplateTabs = () => {

  const articleTemplateTabsList = ref([
    t('tabs.pleaseNote'),
    t('tabs.frequentlyAsked'),
    t('tabs.contactInformation'),
  ])

  const articleTemplateActiveTab = ref(t('tabs.pleaseNote'))

  return { articleTemplateTabsList, articleTemplateActiveTab }
}