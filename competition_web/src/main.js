// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// mount with global
Vue.use(VueAwesomeSwiper)

//http请求
import axios from 'axios'
//默认值配置
axios.defaults.baseURL = 'https://api.91war.com';
//axios.defaults.baseURL = 'http://192.168.5.184:8019';
if(localStorage.t){
	axios.defaults.headers.common['Authorization'] = localStorage.t;
}
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 关键在这里，设置afterEach钩子函数
router.afterEach((to, from, next) => {
  document.title = to.name;
})

Vue.prototype.$http = axios;

Vue.config.productionTip = false

// 引入公共js--相当于自定义插件
//import common from './module/common/common'
//Vue.use(common)

//全局组件
import competitonHeader from './components/Header'
import competitonFooter from './components/Footer'
import Confirm from './components/Confirm'
//全家组件才能用计算熟悉返回comfirmMessage()，不然报错（待查阅）
import ConfirmLogin from './components/Confirm-loginset'
Vue.component('competiton-header', competitonHeader);
Vue.component('competiton-footer', competitonFooter);
Vue.component('confirm', Confirm);
Vue.component('confirm-login', ConfirmLogin);

//store为实例化生成的
import store from './store/index'

//过滤器汇总
import './filter/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store //注入到vue
})
