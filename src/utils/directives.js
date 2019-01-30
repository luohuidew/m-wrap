import Vue from 'vue';
/* 全局滴自定义指令 */
Vue.directive('scroll', {
  bind: (el, binding, vnode) => {
    // 是否执行回调事件
    let eventAction = true
    // 距离底部剩余距离开始触发回调
    let distance = 100 // (unit: px)
    // 监听滚动事件
    el.onscroll = (e) => {
        // 获取当前节点可滚动的距离   节点滚动条总高度 - 节点本身高度
       let scrollHeight = e.target.scrollHeight - e.target.offsetHeight
       // 获取节点剩余可滚动的高度   可滚动距离  -  已经滚动的距离
       let residualHeight = scrollHeight - e.target.scrollTop
       //  滚动到指定区域执行回调事件
       if ((typeof binding.value === 'function') && residualHeight < distance && eventAction) {
         // 执行事件回调函数   如果不明白此处的binding.value的同学请点击上面的链接,自行去官方查看
         binding.value(residualHeight)
        //  alert('hello');
          // console.log(residualHeight);
        eventAction = false
      }  else if (residualHeight > distance) {
        eventAction = true
      }
    } 
  }
})
/* 自动获取焦点 */
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  
  inserted: function (el) {
      // 聚焦元素
      el.focus()
  },
  //也可以用update,update就是当页面有操作的时候就触发，比如点击按钮，输入框输入都算。
  //有一个要注意的就是，就是你页面有几个input,比如一个input绑定了v-focus,一个没有绑定。你在没绑定v-focus的input输入时，绑定了v-focus的input就是自动获取焦点，这是个bug.
  //update: function (el) {
      //el.focus()
  //}
});