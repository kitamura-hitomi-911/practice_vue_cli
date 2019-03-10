import Vue from 'vue'
const event_bus = new Vue();

export default {
  install(Vue, options) {
    Vue.prototype.$event_bus = event_bus;
  }
};