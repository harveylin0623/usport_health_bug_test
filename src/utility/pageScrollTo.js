export const pageScrollTo = (options) => {
  const {elementId, behavior, block, inline } = options
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: behavior,
      block: block,
      inline: inline,
    })
  }
}