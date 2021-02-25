import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import VueRouter from 'vue-router'
import {routes} from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
const router=new VueRouter({routes})
new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
