import dayjs from 'dayjs'
import i18n from '@/plugins/i18n.js'
import { ref, reactive, computed } from 'vue'

const { t } = i18n.global

export const usePersonalExerciseRecordsData = () => {

  const topTabs = ref([
    { name: t('tabs.daily', {type: t('tabs.walk_steps')}), type: 'walk_steps' },
    { name: t('tabs.daily', {type: t('tabs.stair_times')}), type: 'stair_times' },
    { name: t('tabs.monthly', {type: t('tabs.video_times')}), type: 'video_times' }
  ])

  const personalExerciseRecordsDataMap = {
    walk_steps: {
      activeType: 'walk_steps',
      activeTabText: t('tabs.daily', {type: t('tabs.walk_steps')}),
      totalAccumulationType: t('tabs.walk_steps'),
      tableHead: ['table.thead.recordDate', 'table.thead.totalStepsForTheDay', 'table.thead.stepCount']
    },
    stair_times: {
      activeType: 'stair_times',
      activeTabText:  t('tabs.daily', {type: t('tabs.stair_times')}),
      totalAccumulationType: t('tabs.stair_times'),
      tableHead: ['table.thead.recordDate', 'table.thead.totalStairsForTheDay']
    },
    video_times: {
      activeType: 'video_times',
      activeTabText: t('tabs.monthly', {type: t('tabs.video_times')}),
      totalAccumulationType: t('tabs.video_times'),
      tableHead: ['table.thead.recordDate', 'table.thead.totalVideoClicksOfTheDay']
    }
  }

  const firstQueryMonth = ref(1)

  const getFirstQueryMonth = () => {
    firstQueryMonth.value = dayjs().isAfter(dayjs('2024-12-31')) ? 12 : dayjs().month() + 1
  }

  const months = reactive({
    currentMonth: dayjs().month() + 1,
    minMonth: 1,
    maxMonth: dayjs().month() + 2
  })

  const monthTabs = computed(() => Array.from(Array(13).keys()).map((item) => { return  { name: t('tabs.month', { month: item }), number: item }}).slice(months.minMonth, months.maxMonth).reverse())

  return { topTabs, personalExerciseRecordsDataMap, getFirstQueryMonth, firstQueryMonth, monthTabs, months }
}