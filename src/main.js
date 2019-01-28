import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Plugins
import VueHead from 'vue-head'
Vue.use(VueHead, { inner: 'Name That Color', separator: '', complement: '' })

// Styles
import '@/assets/scss/styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
