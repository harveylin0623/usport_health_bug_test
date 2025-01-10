import Compressor from 'compressorjs'

/**
   * 壓縮圖片
   * @param {File} image 圖片檔案
   * @param {Number} quality  圖片壓縮比，數字越小，圖片壓縮越小
   * @return
   */
export const compressorImage = (image, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    new Compressor(image, {
      quality: quality,
      maxWidth: 1920, // 最大寬度
      maxHeight: 1080, // 最大高度
      convertTypes: [image.type],
      convertSize: 8000000,
      success(result) {
        resolve(result)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

/**
 * 轉換影像類型為 jpeg
 * @param {Object} file
 * @returns
 */
export const convertImageType = (file) => {
  return new Promise((resolve) => {
    const fileName = file.name.substring(0, file.name.lastIndexOf('.'))
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function (e) {
      let image = new Image()
      image.src = e.target.result
      image.onload = function () {
        let canvas = document. createElement('canvas')
        let context = canvas.getContext('2d')
        let imageWidth = image.width
        let imageHeight = image.height
        let data = ''
        canvas.width = imageWidth
        canvas.height = imageHeight
        context.drawImage(image, 0, 0, imageWidth, imageHeight)
        data = canvas.toDataURL('image/jpeg')
        const newFile = dataURLtoFile(data, fileName + '.jpeg')
        resolve(newFile)
      }
    }
  })
}

/**
 * 轉換為 File 物件
 * @param {String} dataURL
 * @param {String} filename
 * @returns
 */
export const dataURLtoFile = (dataURL, filename) => {
  let arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

/**
 * 轉換為 Base64 字串
 * @param {Object} file
 * @param {Function} callback
 */
export const fileToBase64 = (file, callback) => {
  const reader = new FileReader()
  reader.onload = function(event) {
    callback(event.target.result)
  }
  reader.readAsDataURL(file)
}

/**
 * 處理 Base64 字串前的 prefix
 * @param {String} str
 * @returns
 */
export const extractBase64Data = (str) => {
  const prefix = 'data:image/jpeg;base64,'
  const index = str.indexOf(prefix)

  if (index !== -1) {
    return str.substring(index + prefix.length)
  } else {
    // 如果找不到前缀，則返回原始字符串
    return str
  }
}
