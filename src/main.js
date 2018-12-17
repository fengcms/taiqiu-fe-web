import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Api from '@/tool/api'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.prototype.$api = Api
Vue.use(VueCarousel)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
