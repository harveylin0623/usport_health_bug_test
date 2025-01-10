const styleShadowDom = (el, binding) => {
  let shadow = el.shadowRoot
  const style = document.createElement('style')
  if (shadow === null) {
    shadow = el.attachShadow({ mode: 'open' })
  }
  shadow.innerHTML = binding.value
  style.textContent = `
    :host iframe,
    :host img,
    :host table {
      max-width: 100%;
      height: auto;
    }
    :host table table {
      width: 100%!important;
    }
  `
  shadow.appendChild(style)
}

export const shadowHtml = {
  mounted(el, binding) {
    styleShadowDom(el, binding)
  },
  updated(el, binding) {
    styleShadowDom(el, binding)
  }
}