import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  routes
})
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
router.push('/basic')