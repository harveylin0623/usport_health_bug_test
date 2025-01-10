/**
 * 依進度取得要顯示的圖片src
 * @param {Number} N 要切換的圖片張數
 * @param {Number} currentProgress 進度
 * @param {Array} dotsData 圖片資料
 * @param {String} type
 * @returns
 */
export const getProgressDotsImagesUrl = (N, currentProgress, dotsData, type) => {
  let balls = N * (currentProgress / 100)
  balls = Math.round(balls)
  return type ? dotsData[type].dots.slice(0, balls) : dotsData.dots.slice(0, balls)
}