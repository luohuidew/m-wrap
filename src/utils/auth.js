import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  let month = new Date().getMonth();
  let day = new Date().getDate();
  return Cookies.set(TokenKey, token, {
    expires: new Date(2019, month + 1, day)
  })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}