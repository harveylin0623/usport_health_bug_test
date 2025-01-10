<template>
  <div class="space-y-3">
    <TitleBlock
      title="任務獎勵"
      sub-title="結算自 2025/06/30，不會再累積步數"
    />
    <ProgressCard
      v-for="item in 2"
      :key="item"
    />
  </div>
</template>

<script setup>
import TitleBlock from '@/components/Pages/Uwalk/TitleBlock/index.vue'
import ProgressCard from '@/components/Pages/Uwalk/ProgressCard/index.vue'

defineOptions({
  name: 'UwalkQuestRewardsBlock'
})
</script>