import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/css/tailwind.css'
import './assets/styles/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
