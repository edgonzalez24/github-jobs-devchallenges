/* eslint-disable vue/multi-word-component-names */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/css/tailwind.css'
import './assets/styles/scss/main.scss'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';
import * as ScrollMagic from 'scrollmagic'
import gsap from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import Paginate from 'vuejs-paginate'
ScrollMagicPluginGsap(ScrollMagic, gsap)
gsap.config({
  nullTargetWarn: false,
});

Object.defineProperty(Vue.prototype, '$scrollmagic', { value: ScrollMagic })
Vue.config.productionTip = false
Vue.component('paginate', Paginate)
Vue.use(Toast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
