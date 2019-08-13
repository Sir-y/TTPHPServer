// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/style/iconfont.css'
import '@/assets/style/resets.css'
import '@/assets/style/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from '@/store'
import 'lib-flexible'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
