import Vue from 'vue'
import Router from 'vue-router'
import Page from '../views/Page'
import Cart from '../views/Cart'
import Detail from '../views/Detail'
import My from '../views/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/my',
      component: My
    }
  ]
})
