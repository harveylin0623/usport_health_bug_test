export const createUrlContactParams = (url, code = '') => {
  return code === '' ? url : `${url}/${code}`
}