<template>
  <el-space
    direction="vertical"
    alignment="items-normal"
    :class="'w-full'"
  >
    <el-skeleton
      :loading="props.isLoading"
      animated
    >
      <template v-slot:template>
        <div class="flex w-full flex-col gap-3">
          <template
            v-for="item in 3"
            :key="item"
          >
            <div class="w-full bg-white">
              <div class="p-3 pt-5">
                <div class="flex">
                  <div class="flex w-1/2 gap-1">
                    <el-skeleton-item
                      variant="text"
                      :class="'h-3 w-2/5'"
                    />
                    <el-skeleton-item
                      variant="text"
                      :class="'h-3 w-4/5'"
                    />
                  </div>
                </div>
                <div class="mb-1 mt-2 w-full">
                  <el-skeleton-item variant="h3" />
                  <el-skeleton-item variant="h3" />
                  <el-skeleton-item variant="h3" />
                </div>
                <div class="img-block aspect-video overflow-hidden rounded-md">
                  <el-skeleton-item
                    variant="image"
                    :class="'h-full'"
                  />
                </div>
              </div>
              <div class="flex h-9 justify-center gap-2 border-y-2 border-solid p-1 px-2">
              </div>
              <div class="h-[100px] w-full p-3">
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
                <el-skeleton-item variant="text" />
              </div>
              <div class="flex flex-row items-center p-3 pe-1">
                <el-skeleton-item
                  variant="text"
                  :class="'relative h-[39px] flex-1 rounded-full px-3 py-[7.5px]'"
                />
                <el-skeleton-item
                  variant="text"
                  :class="' rounded-full size-10 mx-2'"
                />
              </div>
            </div>
          </template>
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
  name: 'CommentsSkeleton'
})
</script>