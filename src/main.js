import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import router from './router/index.js'
Vue.config.productionTip = false


import 'swiper/swiper-bundle.css'
import './assets/scss/main.scss'
import '@/components/ui'
import '@/components/icons'

new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app')
