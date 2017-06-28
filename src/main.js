import Vue from 'vue'
import App from './App'
import store from './store'
import './scss/main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
