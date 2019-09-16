Vue.component('ss', {

    data:function(){
        return{
        status:'Critical'
        }
        },

    template:'<p>The Server Status is {{status}}</p>'

});

new Vue({

   el: '#app',
   data:{

   }
});