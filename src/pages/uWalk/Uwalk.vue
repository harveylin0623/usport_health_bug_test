<template>
  <div class="min-h-screen bg-gray-2 pb-[66px]">
    <Banner />
    <EventsDescriptionButtonBlock @handler-click="handlerEventDescriptionBtnClick" />
    <div class="container px-4 py-5">
      <Tabs
        v-if="monthTabs.length > 1"
        :tabs="monthTabs"
        :active-tab="activeMonthTab"
        @handler-click="handlerClick"
      />
      <div class="space-y-6 pt-[7px]">
        <QuestRewardsBlock />
        <CurrentMonthWalkStepsBlock />
      </div>
    </div>
    <EventDescriptionDrawer ref="eventDescriptionDrawerRef" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import Tabs from '@/components/Global/Tabs/index.vue'
import EventsDescriptionButtonBlock from '@/components/Pages/Uwalk/EventsDescriptionButtonBlock/index.vue'
import Banner from '@/components/Pages/Uwalk/Banner/index.vue'
import QuestRewardsBlock from '@/components/Pages/Uwalk/QuestRewardsBlock/index.vue'
import CurrentMonthWalkStepsBlock from '@/components/Pages/Uwalk/CurrentMonthWalkStepsBlock/index.vue'
import EventDescriptionDrawer from '@/components/Global/Drawer/EventDescriptionDrawer.vue'

const {t} = useI18n()

const monthTabs = computed(() => Array.from(Array(13).keys()).map((item) => { return  { name: t('tabs.month', { month: item }), number: item }}).slice(1, 12))
const activeMonthTab = ref('11 月')
const eventDescriptionDrawerRef = ref(null)

const handlerClick = (tab) => {
  activeMonthTab.value = tab.name
}

const handlerEventDescriptionBtnClick = () => {
  eventDescriptionDrawerRef.value.toggle(true)
}

useHead({ title: t('seo.title.uWalk') })
</script>