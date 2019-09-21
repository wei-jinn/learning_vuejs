import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-42bc6.firebaseio.com/';

// Vue.http.interceptors.push((request, next)=>{
//   console.log(request);
//   request.method=='POST'; //add new a data
//   //   //   request.method ='PUT'; //override the old data
//   //   // }
//   next(response =>{
//   response.json = () => {return {messages: response.body}}
//   });
//
//     });

new Vue({
  el: '#app',
  render: h => h(App)
})
