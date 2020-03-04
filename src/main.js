import Vue from 'vue'
import axios from 'axios'
import router from './router'
import '../src/assets/css/main.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router
})
