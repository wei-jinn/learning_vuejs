import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';

//7. Import Home.vue, define a global component here
//8. Vue.component('element tag name to be used', component)
//9. Next go to App.vue. The component you defined in 8 is going to be used there.
Vue.component('my-server-changer', Home);
new Vue({
  el: '#app',
  render: h => h(App)
})

