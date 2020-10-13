import Vue from 'vue'
import App from './App.vue'
//路由
import router from './router'
//状态管理器
import store from './store'
//图片懒加载
import VueLazyLoad from 'vue-lazyload'
//某些移动端设备点击延迟 解决方案
import FastClick from 'fastclick'

Vue.config.productionTip = false,
//Vue实例是可以作为事件总线的
  Vue.prototype.$bus = new Vue();

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/loding.png')
});
//解决移动的300ms延迟
FastClick.attach(document.body);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
