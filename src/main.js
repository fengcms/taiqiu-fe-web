import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Api from '@/tool/api'
Vue.config.productionTip = false
Vue.prototype.$api = Api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
