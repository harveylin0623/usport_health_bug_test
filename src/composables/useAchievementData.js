import i18n from '@/plugins/i18n.js'
import { ref } from 'vue'

const { t } = i18n.global

export const useAchievementData = () => {

  const topTabs = ref([
    { name: t('memberTop50'), type: 'member'},
    { name: t('teamTop50'), type: 'team' }
  ])

  const insideTabsDataMap = [
    { name: t('tabs.walk_steps') + t('tabs.rank'), type: 'walk_steps' },
    { name: t('tabs.stair_times') + t('tabs.rank'), type: 'stair_times' },
    { name: t('tabs.video_times') + t('tabs.rank'), type: 'video_times'},
  ]

  const achievementDataMap = {
    member: {
      activeTopTab: { name: t('memberTop50'), type: 'member'},
      activeInsideTab: { name: t('tabs.walk_steps') + t('tabs.rank'), type: 'walk_steps' },
      activeType: 'member',
      activeTopTabText: t('memberTop50'),
      activeInsideTabType: 'walk_steps',
      activeInsideTabsText: t('tabs.walk_steps') + t('tabs.rank'),
      tableHeadDataMap: {
        walk_steps:  ['table.thead.rank', 'table.thead.name', 'table.thead.jobNumber', 'table.thead.stepCount'],
        stair_times:  ['table.thead.rank', 'table.thead.name', 'table.thead.jobNumber', 'table.thead.auditFloors'],
        video_times:  ['table.thead.rank', 'table.thead.name', 'table.thead.jobNumber', 'table.thead.videoViewsCount']
      },
      dashboard: [t('memberRegisteredAmount'), t('memberCompleteEventMissionTaskAmount')]
    },
    team: {
      activeTopTab: { name: t('teamTop50'), type: 'team' },
      activeInsideTab: { name: t('tabs.walk_steps') + t('tabs.rank'), type: 'walk_steps' },
      activeType: 'team',
      activeTopTabText: t('teamTop50'),
      activeInsideTabType: 'walk_steps',
      activeInsideTabsText: t('tabs.walk_steps') + t('tabs.rank'),
      tableHeadDataMap: {
        walk_steps: ['table.thead.rank', 'table.thead.teamName', 'table.thead.stepCount'],
        stair_times: ['table.thead.rank', 'table.thead.teamName', 'table.thead.auditFloors'],
        video_times: ['table.thead.rank', 'table.thead.teamName', 'table.thead.videoViewsCount']
      },
      dashboard: [t('teamRegisteredAmount'), t('teamCompleteEventMissionTaskAmount')]
    }
  }

  return { topTabs, insideTabsDataMap, achievementDataMap }
}