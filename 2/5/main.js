import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.directive('my-on', {
  bind(el, binding) {
    el.addEventListener(binding.arg, binding.value);
  },
  update(el, binding) {
    el.removeEventListener(binding.arg, binding.oldValue);
    el.addEventListener(binding.arg, binding.value);
  },
  unbind(el, binding){
    el.removeEventListener(binding.arg, binding.value);
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
