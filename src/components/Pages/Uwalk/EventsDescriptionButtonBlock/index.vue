<template>
  <div class="fixed bottom-0 z-10 w-full bg-gray-2 px-5 py-2">
    <SquareButton
      :text="$t('button.eventDescription')"
      button-type="btn-square-second"
      @click="handlerClick"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['handlerClick'])

const handlerClick = () => {
  emit('handlerClick')
}

defineOptions({
  name: 'UwalkEventsDescriptionButtonBlock'
})
</script>