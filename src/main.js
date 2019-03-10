import Vue from 'vue'
import App from './App.vue'
import router from './router'
import event_bus from './event_bus'

Vue.use(event_bus)

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
