<template>
  <el-space
    direction="vertical"
    alignment="flex-center"
    :class="'w-full'"
  >
    <el-skeleton
      :loading="props.isLoading"
      animated
      :class="'w-full'"
    >
      <template v-slot:template>
        <el-skeleton-item
          variant="image"
          :class="'w-full h-[211px]'"
        />
        <div class="p-5 pt-6">
          <div class="mb-4 border-b-2 border-solid pb-3">
            <el-skeleton-item
              variant="h3"
              :class="'h-[28px] w-4/5 mb-1'"
            />
            <el-skeleton-item
              variant="text"
              :class="'w-2/5 h-5'"
            />
          </div>
          <el-skeleton-item
            variant="text"
          />
          <el-skeleton-item
            variant="text"
          />
          <el-skeleton-item
            variant="text"
            :class="'w-4/5'"
          />
          <el-skeleton-item
            variant="text"
            :class="'w-3/5'"
          />
        </div>
      </template>
      <template v-slot:default>
        <slot></slot>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script setup>
const props = defineProps({
  isLoading: { type: Boolean, default: false}
})

defineOptions({
  name: 'PostPageSkeleton'
})
</script>