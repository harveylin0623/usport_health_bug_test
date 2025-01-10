<template>
  <ActionsItem
    v-for="(item, index) in createActionsItems"
    :key="index"
    :active-style="item.activeStyle"
    :button-style="item.buttonStyle"
    :icon-url="item.iconUrl"
    :title="item.title"
    :count="item.count"
    :text-size="item.textSize"
    :click-callback="item.clickCallback"
    :is-show="item.isShow"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import iconComment from '@/assets/image/icon_comment.svg'
import iconView from '@/assets/image/icon_view.svg'
import iconThumbs from '@/assets/image/icon_thumbs.svg'
import iconEdit from '@/assets/image/icon_edit.svg'
import iconDelete from '@/assets/image/icon_delete.svg'
import { dynamicWallsApi } from '@/api/dynamicWalls.js'
import { missionsSharesApi } from '@/api/missions.js'
import { useMissionsStore } from '@/stores/missions.js'
import { useCommonStore } from '@/stores/common.js'
import { useCommentStore } from '@/stores/comment.js'
import ActionsItem from '@/components/Global/InteractiveActions/ActionsItem.vue'

const props = defineProps({
  type: { type: Number, default: 0 }, // 心得分享: 0, 動態牆列表: 1, 動態牆詳細: 2, 心得分享使用者發佈的心得: 3
  active: { type: Boolean, default: false }, // like active
  likeCount: { type: Number, default: 0 },
  browseReviewsCount: { type: Number, default: 0 },
  clickCallback: { type: Function, default: () => {} },
  id: { type: Number, default: null }
})

const emit = defineEmits(['commentsUpDate', 'commentsLikeCountUpDate', 'postsLikeCountUpDate'])

const { t } = useI18n()
const router = useRouter()
const commonStore = useCommonStore()
const missionsStore = useMissionsStore()
const commentStore = useCommentStore()
const likeActive = ref(props.active)
const likeCountNum = ref(props.likeCount)
const isFetch = ref(false)
const activeStyle = computed(() => likeActive.value ? 'like-btn-active': '')
const buttonsStyle = computed(() => props.type !== 2 ? ' w-1/2 ' : '')
const textSize = computed(() => props.type === 1 || props.type === 2 ? ' text-sm' : ' text-xs')

const postsCardClickHandler = async () => {
  if (!likeActive.value) {
    emit('postsLikeCountUpDate', true)
    createActionsItems.value[0].activeStyle = activeStyle.value
    let res = await dynamicWallsApi.setMemberLiked({
      type: 'like',
      id: props.id,
    })
    likeCountNum.value = res.dynamicWallsLikeAmount
    createActionsItems.value[0].count = res.dynamicWallsLikeAmount
  } else {
    emit('postsLikeCountUpDate', false)
    createActionsItems.value[0].activeStyle = activeStyle.value
    let res = await dynamicWallsApi.setMemberRemoveLiked({
      type: 'removeLike',
      id: props.id,
    })
    likeCountNum.value = res.dynamicWallsLikeAmount
    createActionsItems.value[0].count = res.dynamicWallsLikeAmount
  }
}

const commentsCardClickHandler = async () => {
  if (!likeActive.value) {
    emit('commentsLikeCountUpDate', true)
    createActionsItems.value[0].activeStyle = activeStyle.value
    let res = await missionsSharesApi.setMemberLiked({
      type: 'like',
      missions_id: missionsStore.missionsInfo.id,
      id: props.id,
    })
    likeCountNum.value = res.missionsShareLikeAmount
    createActionsItems.value[0].count = res.missionsShareLikeAmount
  } else {
    emit('commentsLikeCountUpDate', false)
    createActionsItems.value[0].activeStyle = activeStyle.value
    let res = await missionsSharesApi.setMemberRemoveLiked({
      type: 'removeLike',
      missions_id: missionsStore.missionsInfo.id,
      id: props.id,
    })
    likeCountNum.value = res.missionsShareLikeAmount
    createActionsItems.value[0].count = res.missionsShareLikeAmount
  }
}

const handleFavoriteClick = async() => {
  if ( isFetch.value ) { return }
  isFetch.value = true
  if (props.type === 0 || props.type === 3 ) {
    await commentsCardClickHandler()
  } else {
    await postsCardClickHandler()
  }
  isFetch.value = false
}

const handleEditClick = () => {
  commentStore.setCommentEditId(props.id)
  router.push({ name: 'share' ,  query: { type: 'edit' } })
}

const handleDeleteClick = () => {
  commonStore.updateModal({
    isOpen: true,
    title: t('modal.title.prompt'),
    content: t('modal.content.confirmDeletion'),
    showCancel: true,
    leftButtonText: t('button.cancel'),
    rightButtonText: t('button.ok'),
    confirmHandler: async () => {
      const res = await missionsSharesApi.deleteComment({
        type: 'delete',
        missions_id: missionsStore.missionsInfo.id,
        id: props.id,
      })
      if (res.delete === 'success') {
        emit('commentsUpDate')
      }
    }
  })
}

const createActionsItems = ref([
  {
    activeStyle: activeStyle.value,
    buttonStyle: buttonsStyle.value,
    iconUrl: iconThumbs,
    title: t('button.like'),
    count: likeCountNum.value,
    textSize: textSize.value,
    isShow: true,
    clickCallback: handleFavoriteClick
  },
  {
    buttonStyle: buttonsStyle.value,
    iconUrl: iconComment,
    title: t('button.comments'),
    count: props.browseReviewsCount,
    textSize: textSize.value,
    disabled: true,
    isShow: props.type === 0 || props.type === 3,
  },
  {
    buttonStyle: buttonsStyle.value,
    iconUrl: iconView,
    title: t('button.browse'),
    count: props.browseReviewsCount,
    textSize: textSize.value,
    disabled: true,
    isShow: props.type === 1 || props.type === 2,
  },
  {
    buttonStyle: buttonsStyle.value,
    iconUrl: iconEdit,
    title: t('button.edit'),
    textSize: textSize.value,
    isShow: props.type === 3,
    clickCallback: handleEditClick
  },
  {
    buttonStyle: buttonsStyle.value,
    iconUrl: iconDelete,
    title: t('button.delete'),
    textSize: textSize.value,
    isShow: props.type === 3,
    clickCallback: handleDeleteClick
  },
])

defineOptions({
  name: 'InteractiveActions'
})
</script>