//Vue 图片懒加载
export default (Vue , options = {})=>{
  var windowHeight = window.innerHeight;

  if(!Array.prototype.remove){
    Array.prototype.remove = function(item){
      if(!this.length) return
      var index = this.indexOf(item);
      if( index > -1){
        this.splice(index,1);
        return this
      }
    }
  }
  var init = {
    lazyLoad: false,
    default: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'
  }

  var listenList = [];
  var imageCatcheList = [];

  const isAlredyLoad = (imageSrc) => {
    if(imageCatcheList.indexOf(imageSrc) > -1){
      return true;
    }else{
      return false;
    }
  }
  //检测图片是否可以加载，如果可以则进行加载
  const isCanShow = (item) =>{
    var ele = item.ele;
    var src = item.src;
    //图片距离页面顶部的距离
    var top = ele.getBoundingClientRect().top;
    //页面可视区域的高度
    //top + 10 已经进入了可视区域10像素

    if(top < windowHeight){
      var image = new Image();
      image.src = src;
      image.onload = function(){
        ele.src = src;
        imageCatcheList.push(src);
        listenList.remove(item);
      }
      return true;
    }else{
      return false;
    }
  };
  function throttle(func, wait, mustRun) { // 截流
    let timeout,
        startTime = new Date();
    return function() {
      let context = this,
          args = arguments,
          curTime = new Date();
      clearTimeout(timeout);
      // 如果达到了规定的触发时间间隔，触发 handler
      if(curTime - startTime >= mustRun){
        func.apply(context,args);
        startTime = curTime;
        // 没达到触发间隔，重新设定定时器
      }else{
        timeout = setTimeout(func, wait);
      }
    };
  }
  function scrollhander (){
    var length = listenList.length;
    for(let i = 0;i<length;i++ ){
      isCanShow(listenList[i]);
    }
  }
  const onListenScroll = (parent) =>{
    parent && parent.addEventListener('scroll',throttle(scrollhander, 200, 300 ))
  }
  //Vue 指令最终的方法
  const addListener = (ele,binding) =>{
    //绑定的图片地址
    var imageSrc = binding.value.src;
    //如果已经加载过，则无需重新加载，直接将src赋值
    if(isAlredyLoad(imageSrc)){
      ele.src = imageSrc;
      return false;
    }
    var item = {
      ele:ele,
      src:imageSrc
    }
    //图片显示默认的图片
    ele.src = init.default;
    //再看看是否可以显示此图片
    if(isCanShow(item)){
      return
    }
    //否则将图片地址和元素均放入监听的lisenList里
    listenList.push(item);

    //然后开始监听页面scroll事件
    console.log('shneme')
  }

  Vue.directive('lazyload',{
    componentUpdated:function (ele, binding) {
      onListenScroll(binding.value.parent);
      console.log('慧慧慧慧慧慧')
    },
    updated:function () {
      console.log('directive-lazyload-updated')
    },
    inserted:addListener,
    unbind: function () {
      imageCatcheList = []
      console.log('img nulleel')
    }
  })
}
