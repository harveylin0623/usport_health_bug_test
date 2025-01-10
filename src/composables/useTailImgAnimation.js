import { ref } from 'vue'

export const useTailImgAnimation = (n, h) => {

  const tailImgUrl = ref(h)
  let intervalId

  const changImg = () => {
    tailImgUrl.value === n ? tailImgUrl.value = h : tailImgUrl.value = n
  }

  const stopChangImg = () => {
    clearInterval(intervalId)
    intervalId = null
  }

  const startChangImg = () => {
    if (!intervalId) {
      intervalId = setInterval(changImg, 500)
    }
  }

  const tailImgAnimation = () => {
    startChangImg()
    setTimeout(stopChangImg, 2500)
  }

  return { tailImgUrl, tailImgAnimation }
}