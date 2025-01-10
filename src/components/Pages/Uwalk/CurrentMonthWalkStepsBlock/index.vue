<template>
  <div class="space-y-3">
    <TitleBlock title="當月步數" />
    <div class="space-y-2 rounded-base bg-white px-3 py-5">
      <div class="flex items-center justify-center gap-2">
        <p class="text-2xl leading-7 text-primary-1">236,508</p>
        <span class="pt-0.5 text-sm text-gray-5">步</span>
      </div>
      <p class="text-center text-xs text-gray-4">2025/06/01~2025/06/30 有效步數總和</p>
    </div>
    <div class="space-y-2 rounded-base bg-white p-3">
      <p class="text-center text-xs text-gray-4">
        每日最高有效步數為 12,000，超過則不列入<br />
        今天的步數明天才會更新
      </p>
      <el-scrollbar max-height="280px">
        <BaseTable
          :type="1"
          :list-data="listData"
          :field-description="fieldDescription"
        />
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TitleBlock from '@/components/Pages/Uwalk/TitleBlock/index.vue'
import BaseTable from '@/components/Global/BaseTable/index.vue'

const fieldDescription = ref(['table.thead.recordDate', 'table.thead.totalStepsForTheDay', 'table.thead.stepCount'])
const listData = ref([
  {
    'date': '2024-05-20',
    'amountText': '2,000',
    'auditAmountText': '2,000'
  },
  {
    'date': '2024-05-19',
    'amountText': '1,000',
    'auditAmountText': '1,000'
  },
])
defineOptions({
  name: 'UwalkCurrentMonthWalkStepsBlock'
})
</script>