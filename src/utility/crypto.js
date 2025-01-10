import CryptoJS from 'crypto-js'
const sign_key = import.meta.env.VITE_SIGN_KEY
const aes_key = import.meta.env.VITE_AES_KEY

export const wmSign = (body) => {
  const payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)))
  const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload,  sign_key))
  const sign = `${payload}.${signature}`
  return sign
}

export const wmAes = (input) => {
  const keyHash = CryptoJS.SHA384(aes_key)
  const key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0,64))
  const iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64,96))
  const encrypted = CryptoJS.AES.encrypt(input, key, { iv: iv })
  return encrypted.toString()
}