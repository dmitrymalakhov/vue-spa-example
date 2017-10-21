import Vue from 'vue'
import Router from 'vue-router'
import Material from '../routes/Material'
import About from '../routes/About'
import Сontacts from '../routes/Сontacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/material',
      name: 'Материалы',
      component: Material,
    },
    {
      path: '/about',
      name: 'О проекте',
      component: About,
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: Сontacts,
    },
  ],
})
