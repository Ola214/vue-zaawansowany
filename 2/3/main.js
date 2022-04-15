import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;


Vue.directive('padding', {
  inserted(el) {
    el.parentNode.style.padding = '10%';
    el.parentNode.style.backgroundColor = 'yellow';
  },
  bind(el) {
    el.style.backgroundColor = '#fafafa';
    el.style.borderRadius = '30%';
    el.style.padding = '50%';
    el.style.textAlign = 'center';
  },
  update(el) {
    console.log('update - ', el.innerHTML); //oldValue
  },
  componentUpdated(el) { //newValue
    console.log('componentUpdated - ', el.innerHTML);
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
