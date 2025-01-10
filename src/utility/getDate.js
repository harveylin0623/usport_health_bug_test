import dayjs from 'dayjs'

export const getTimeStamp = () => {
  const currentTime = dayjs().format('YYYY/MM/DD HH:mm:ss')
  return currentTime
}

export const getCurrentTime = () => {
  const currentTime = dayjs()
  return currentTime
}
