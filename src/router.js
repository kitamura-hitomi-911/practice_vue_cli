import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router);

const router = new Router({
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
      props: (route) => ({ action: route.name }),/* こう渡さないと childrenには props が渡らない */
      children: [
        {
          path:'input',
          name:'aboutInput',
          component : About,
          meta: { is_login: true }
        },
        {
          path:'confirm',
          name:'aboutConfirm',
          component : About,
          meta: { is_login: true }
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
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach',from,to);
  next();
});

export default router;