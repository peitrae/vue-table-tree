import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import fragment from './plugins/fragment'

Vue.config.productionTip = false

new Vue({
  vuetify,
  fragment,
  render: h => h(App)
}).$mount('#app')
