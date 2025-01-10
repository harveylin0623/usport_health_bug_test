<template>
  <div class="space-y-2 rounded-base bg-white p-5 font-normal">
    <p class="text-[15px] leading-5">第一階段 - 200,000 步</p>
    <div class="relative h-5 overflow-hidden rounded-full bg-opaque-black-3">
      <!-- <div class="size-full rounded-full bg-complementary-1"></div> -->
      <div class="h-full w-[40%] rounded-full bg-gray-4"></div>
      <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white">236,508 / 200,000</p>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex shrink-0 items-center gap-1">
        <div class="size-5 bg-icon-coin bg-cover bg-no-repeat"></div>
        <p class="text-[13px] leading-[15px] text-gray-5">獎勵 30 U 幣</p>
      </div>
      <div class="shrink">
        <p class="text-xs text-gray-4">2025/06/03 12:46<span class="ms-1 text-[13px] leading-[15px] text-complementary-1">已領取</span></p>
        <!-- <p class="text-[13px] leading-[15px] text-gray-4">尚未達成</p> -->
        <!-- <p class="text-[13px] leading-[15px] text-gray-4">尚未開始</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'UwalkProgressCard'
})
</script>