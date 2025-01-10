/**
 * @param {Object} object
 * @return
 */
export const getFormData = (object) => {
  let formData = new FormData()
  Object.keys(object).map((key) => {
    formData.append(key, object[key])
  })
  return formData
}