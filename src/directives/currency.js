const formatDollar = (dollar) => {
  let n = 0 //n: length of decimal
  let x = 3 //x: length of sections
  let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return dollar.toFixed(Math.max(0, n)).replace(new RegExp(re, 'g'), '$&,')
}

export const currencyFormat = formatDollar

export const directiveCurrency = {
  updated(el, binding) {
    el.textContent = formatDollar(binding.value)
  },
  mounted(el, binding) {
    el.textContent = formatDollar(binding.value)
  },
}