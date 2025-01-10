<template>
  <BasicDrawer
    v-model:is-open="eventDescriptionDrawerInfo.isOpen"
    :modal-class="eventDescriptionDrawerInfo.modalClass"
    :direction="eventDescriptionDrawerInfo.direction"
    :show-close="eventDescriptionDrawerInfo.showClose"
    :with-header="eventDescriptionDrawerInfo.withHeader"
    :size="eventDescriptionDrawerInfo.size"
  >
    <div class="space-y-5 py-5">
      <h1 class="text-lg font-semibold">2025 U-Walk 健康萬步走</h1>
      <div class="aspect-[335/250] w-full bg-neutral-3 bg-banner-uwalk bg-cover bg-no-repeat">
      </div>
      <p class="text-justify">
        台北市政府邀請市民參與健康運動，讓運動融入日常生活，輕鬆步行，享受健康人生。<br />
        透過此活動，您可以在日常步行中累積步數，達到健康目標，還有機會獲得精美禮品！<br />
        一起加入步行的行列，為身體健康與城市活力助力！<br />
      </p>
      <div class="space-y-[10px]">
        <h2 class="text-sm font-medium">【參加對象】</h2>
        <p>所有台北市民皆可參與。</p>
      </div>
      <div class="space-y-[10px]">
        <h2 class="text-sm font-medium">【活動期間】</h2>
        <p>2025 年 6 月 1 日至 2025 年 8 月 31 日。</p>
      </div>
      <div class="space-y-[10px]">
        <h2 class="text-sm font-medium">【參加方式】</h2>
        <ol class="list-decimal pl-5">
          <li>下載並安裝「U Sport 臺北樂運動」APP，並在 APP 中註冊或登入個人帳戶。</li>
          <li>開啟手機的「健康資訊」讀取權限，讓 APP 可以抓取您的步數資訊。</li>
        </ol>
      </div>
      <div class="space-y-[10px]">
        <h2 class="text-sm font-medium">【活動機制】</h2>
        <ol class="list-decimal pl-5">
          <li>每天步行，APP 將自動記錄您的每日步數。</li>
          <li>累積步數達到指定門檻，即可獲得對應獎品。</li>
          <li>每日達標挑戰：設定每日最低步數目標，達標即可參加抽獎。</li>
          <li>總步數挑戰：活動期間內累積一定步數，獲得限定禮品。</li>
        </ol>
      </div>
      <div class="space-y-[10px]">
        <h2 class="text-sm font-medium">【注意事項】</h2>
        <ol class="list-decimal pl-5">
          <li>請確保 APP 持續運行以準確記錄步數。</li>
          <li>若發現資料異常，請聯繫客服進行核對。</li>
          <li>每人僅限領取一次禮品，重複參加不重複計算。</li>
        </ol>
      </div>
    </div>
    <template v-slot:footer>
      <div class="flex flex-col gap-2">
        <SquareButton
          :text="$t('button.close')"
          @click="closeHandler"
        />
      </div>
    </template>
  </BasicDrawer>
</template>

<script setup>
import { ref } from 'vue'
import BasicDrawer from './BasicDrawer.vue'

const initialEventDescriptionDrawerInfo = {
  isOpen: false,
  modalClass: 'basic-drawer',
  direction: 'btt',
  showClose: false,
  withHeader: false,
  size: '85%'
}

const eventDescriptionDrawerInfo = ref(initialEventDescriptionDrawerInfo)

const toggle = (val) => {
  eventDescriptionDrawerInfo.value.isOpen = val
}

const setModalInfo = (payload) => {
  eventDescriptionDrawerInfo.value = { ...eventDescriptionDrawerInfo, ...payload }
}

const resetModalInfo = () => {
  toggle(false)
  setTimeout(() => { eventDescriptionDrawerInfo.value = eventDescriptionDrawerInfo }, 1000)
}

const closeHandler = () => {
  toggle(false)
}

defineExpose({
  toggle,
  setModalInfo,
  resetModalInfo
})

defineOptions({
  name: 'EventDescriptionDrawer'
})
</script>