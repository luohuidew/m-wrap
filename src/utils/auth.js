import Cookies from 'js-cookie'

const TokenKey = 'token'
const UserShareId = 'UserShareId'

let month = new Date().getMonth();
let day = new Date().getDate();

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
   Cookies.set(TokenKey, token, {
    expires: new Date(2019, month + 1, day)
  })
}

export function removeToken() {
   Cookies.remove(TokenKey)
}
export function setUserShareId(token) {
   Cookies.set(UserShareId, token, {
    expires: new Date(2019, month + 1, day)
  })
}
export function removeUserShareId() {
   Cookies.remove(UserShareId)
}
export function getUserShareId() {
  return Cookies.get(UserShareId)
}
export function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
export function getRect(el) {
  if (el instanceof window.SVGElement) {
    let rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}
