import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

const reaction = () => {
  alert('Kliknąłeś!');
}

Vue.directive('padding', {
  inserted(el) { //gdy do rodzica jest przyłączany nasz element - dziecko, bedzie parentnode
    el.parentNode.style.padding = '10%';
    el.parentNode.style.backgroundColor = 'yellow';
  },
  bind(el) { //gdy dyrektywa jest powiązana z naszym elementem, nie ma parentnode
    el.style.backgroundColor = '#fafafa';
    el.style.borderRadius = '30%';
    el.style.padding = '50px';
    el.style.textAlign = 'center';

    el.addEventListener('click', reaction);
  },
  unbind(el) { //przed zniszczeniem elementu
    el.removeEventListener('click', reaction);
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
