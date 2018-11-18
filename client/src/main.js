import Vue from 'vue'
import Route from './router/index'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router: Route,
  render: h => h(App)
}).$mount('#app')
