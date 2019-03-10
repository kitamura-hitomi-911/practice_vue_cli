import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component : About,
      children: [
        {
          path:':action',
          name:'about_action',
          component : About,
          props: true
        }
      ]
    },
    {
      path:'/log',
      name:'log',
      component () {
        return import(/* webpackChunkName: "log" */ './views/Log.vue')
      }
    }
  ]
})
