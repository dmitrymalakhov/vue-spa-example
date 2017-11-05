import Vue from 'vue'
import Router from 'vue-router'
import Main from '../routes/Main'
import Material from '../routes/Material'
import About from '../routes/About'
import Сontacts from '../routes/Сontacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Главная',
      component: Main,
    },
    {
      path: '/about',
      name: 'Об авторе',
      component: About,
    },
    {
      path: '/material',
      name: 'Материалы',
      component: Material,
    },
    {
      path: '/contacts',
      name: 'Контакты',
      component: Сontacts,
    },
  ],
})
