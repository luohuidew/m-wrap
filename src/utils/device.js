let cur_device = localStorage.getItem('device');
/* 
  window.weget_mobile_type.nativeToJavaScript_sendToken()//安卓环境调用token
*/
const android_api = {
  send_params(params,cb){
    
  }
}
const ios_api = {
  send_params(params,cb){
    
  }
}
const h5_api = {
  send_params(params,cb){
    cb();
  }
}
let cur_api;
if(cur_device==='android'){
  cur_api =  android_api;

}else if(cur_device==='ios'){
  cur_api =  ios_api;
}else {
  cur_api = h5_api;
}
console.log(cur_api);
export default cur_api;