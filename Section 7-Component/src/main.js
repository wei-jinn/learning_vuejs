// import Vue from 'vue'
// import App from './App.vue'

Vue.component('server-status', {

  data:function(){
    return{
      status: 'Critical'
    }
  },
  template:'<p>Server Status: {{status}}<br><button @click="changeStatus">Change</button></p>',
  methods:{
    changeStatus:function(){
      if(this.status == 'Critical'){
        this.status = 'Normal';
      }
      else{
        this.status = 'Critical';
      }

    }
  }

});

var cmp = {

  data:function() {
    return {
      status: 'Healthy'
    }
  },
  template:'<p>Current status : {{status}}</p>'

};

var vm1 = new Vue({

  el: '#app',
  components: {
    'my-cmp' : cmp
  }

});



//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
