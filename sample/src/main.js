import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import axios from 'axios'
import VueAxios from 'vue-axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Homepage from './components/home.vue'
import NotFound from './components/notfound.vue'
import Signup from './components/signup.vue'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  mode : "history",
  routes : [
    {path: "/", component: Homepage},
    {path: "/inscription", component: Signup},
    {path: "*", component: NotFound} //A mettre a la fin de tous les routeurs
  ]
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
