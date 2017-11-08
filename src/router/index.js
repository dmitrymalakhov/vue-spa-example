import Vue from 'vue'
import Router from 'vue-router'
import Main from '../routes/Main'
import Portfolio from '../routes/Portfolio'
import Methodical from '../routes/Methodical'
import Synopsis from '../routes/Synopsis'
import Parents from '../routes/Parents'
import Photogallery from '../routes/Photogallery'
import Сontacts from '../routes/Сontacts'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/main',
      component: Main,
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/methodical',
      component: Methodical,
    },
    {
      path: '/methodical/synopsis',
      component: Synopsis,
    },
    {
      path: '/parents',
      component: Parents,
    },
    {
      path: '/photogallery',
      component: Photogallery,
    },
    {
      path: '/contacts',
      component: Сontacts,
    },
  ],
});

export default router;
