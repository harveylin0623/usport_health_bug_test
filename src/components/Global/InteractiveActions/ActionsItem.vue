<template>
  <button
    v-if="isShow"
    class="flex items-center justify-center gap-0.5 text-gray-3"
    :class="activeStyle + buttonStyle"
    :disabled="disabled"
    @click="clickCallback"
  >
    <img
      v-if="iconUrl"
      :src="iconUrl"
      class="size-5"
    />
    <span :class="textSize">
      {{ title }}
      <template v-if="count !== null">
        ({{ count }})
      </template>
    </span>
  </button>
</template>

<script setup>

defineProps({
  activeStyle: { type: String, default: '' },
  buttonStyle: { type: String, default: '' },
  iconUrl: { type: String, default: '' },
  title: { type: String, default: '' },
  count: { type: Number, default: null },
  textSize: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  isShow: { type: Boolean, default: true },
  clickCallback: { type: Function, default: () => {} }
})

// console.log(props.isShow)

defineOptions({
  name: 'ActionsItem'
})
</script>