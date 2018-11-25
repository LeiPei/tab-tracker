import Vue from 'vue'
import Route from './router/index'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router: Route,
  render: h => h(App)
}).$mount('#app')
