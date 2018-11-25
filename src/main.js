// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import header from './pages/common/Header.vue'
import footer from './pages/common/Footer.vue'
import carousel from './pages/common/Carousel.vue'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('my-header', header)
Vue.component('my-footer', footer)
Vue.component('my-carousel', carousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
