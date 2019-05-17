import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Blob from './excel/Blob'
import Export2Excel from './excel/Export2Excel.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
