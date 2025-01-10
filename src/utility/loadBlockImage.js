export const loadDomImage = (el) => {
  return new Promise((resolve) => {
    window.imagesLoaded(el, (payload) => {
      resolve(payload)
    })
  })
}