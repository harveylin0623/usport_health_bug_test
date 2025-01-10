<template>
  <el-space
    direction="vertical"
    alignment="flex-center"
    :class="'w-full'"
  >
    <el-skeleton
      :loading="props.isLoading"
      animated
    >
      <template v-slot:template>
        <div class="flex w-full flex-col gap-2 bg-gray-1">
          <template
            v-for="item in 3"
            :key="item"
          >
            <div class="h-[336px] w-full bg-white">
              <div class="p-2 pt-5">
                <div class="flex items-center">
                  <el-skeleton-item
                    :class="'mr-2 size-10 overflow-hidden rounded-full'"
                  />
                  <div class="flex w-1/2 flex-col gap-1">
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
                <div class="mb-1 mt-2 w-4/5">
                  <el-skeleton-item
                    variant="h3"
                    :class="'w-6/8'"
                  />
                </div>
                <div class="img-block aspect-video overflow-hidden rounded-md">
                  <el-skeleton-item
                    variant="image"
                    :class="'h-full'"
                  />
                </div>
              </div>
              <div class="flex h-5 justify-center gap-2 border-t-2 border-solid p-1 px-2">
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
  name: 'PostSkeleton'
})
</script>