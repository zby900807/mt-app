import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './commom/js/iconfont'
import './static/css/reset.css'
import './commom/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
