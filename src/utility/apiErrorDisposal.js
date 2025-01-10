import { useCommonStore } from '@/stores/common.js'
import i18n from '@/plugins/i18n.js'

const { t } = i18n.global

export const apiErrorDisposal = {
  handleSuccessError(response){
    const commonStore = useCommonStore()
    if (response.data.rcrm.RC === 'C01') {
      return response
    } else {
      commonStore.setLoading(false)
      commonStore.updateModal({
        isOpen: true,
        title: t('modal.title.prompt'),
        content: response.data.rcrm.RM,
        rightButtonText: t('button.close'),
        confirmHandler: () => {}
      })
      return
    }
  },
  handleRejectError(){
    const commonStore = useCommonStore()
    commonStore.setLoading(false)
    commonStore.updateModal({
      isOpen: true,
      rightButtonText: t('button.close'),
      confirmHandler: () => {}
    })
  },
  handleNoTokenError(){
    const commonStore = useCommonStore()
    commonStore.setLoading(false)
    commonStore.updateModal({
      isOpen: true,
      content: t('errorMessage.pleaseLogInAgain'),
      rightButtonText: t('button.close'),
      confirmHandler: () => {}
    })
    return
  }
}

