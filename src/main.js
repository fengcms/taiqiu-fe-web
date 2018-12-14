import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Api from '@/tool/api'
Vue.use(Api, { name: '$api' })
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
