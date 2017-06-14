import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../page/Hello/index.vue'
import Button from '../page/Button/index'
import Input from '@/page/Input/index'
Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Hello',
  component: Hello
}, {
  path: '/button',
  name: 'Button',
  component: Button
}, {
  path: '/input',
  name: 'Input',
  component: Input
}]

export default new Router({
  routes
})
