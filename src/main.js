// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import Nav from './components/Nav'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Nav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: {
    test: 2,
  },
  template: '<App/>',
  components: { App },
})
