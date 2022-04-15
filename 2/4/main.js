import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const reaction = () => {
  alert('Kliknąłeś!');
};

Vue.directive('font-size', {
  update(el, binding) {
    console.log('Nazwa dyrektywy to: ', binding.name);
    el.style.fontSize = binding.value + 'px';
    el.parentNode.style.fontSize = binding.oldValue + 'px';
  },
  inserted(el, binding) {
    console.log('Expresssion: ', binding.expression);
    el.style.fontSize = binding.value + 'px';
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
