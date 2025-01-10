<template>
  <div class="table-block">
    <table
      class="rounded bg-white"
      :class="tableStyle"
    >
      <thead>
        <tr class="w-full">
          <th
            v-for="item in fieldDescription"
            :key="uid() + item"
          >
            {{ $t(item) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="data.length">
          <tr
            v-for="item in data"
            :key="uid() + item"
          >
            <template
              v-for="(content, index) of item"
              :key="uid() + index"
            >
              <td v-if="index === 'remove'">
                <button
                  v-if="content"
                  class="text-danger"
                  @click="handleRemove(item)"
                >
                  {{ $t('button.delete') }}
                </button>
              </td>
              <td v-else>
                {{ content }}
              </td>
            </template>
          </tr>
        </template>
        <tr v-else>
          <td
            v-for="item in 3"
            :key="item"
          >
            -
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { uid } from 'uid'

const props = defineProps({
  type: { type: Number, default: 0 }, // 中獎名單樣式(表頭白底 + 表頭底線): 0, 活動樣式(表頭灰底 + 全有底線): 1
  fieldDescription: { type: Array, default: () => ['table.thead.awards', 'table.thead.jobNumber', 'table.thead.name', 'table.thead.factory', 'table.thead.reward']},
  listData: { type: Array, default: () => []},
  clickCallback: { type: Function, default: () => {} }
})

const emit = defineEmits(['remove'])

const data = ref(props.listData)
const tableStyle = computed(() => props.type === 0 ? 'winners' : 'activity')

const handleRemove = (member) => {
  emit('remove', member)
}

defineOptions({
  name: 'BaseTable'
})
</script>