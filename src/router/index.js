import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/page/Button/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Button',
    component: Button
  }, {
    path: '/button',
    name: 'Button',
    component: Button
  }]
})
