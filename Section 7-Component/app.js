Vue.component('server-status', {

    data:function(){
        return{
        status: 'Critical'
        }
    },
    template:'<p>Server Status: {{status}}' +
        '<button @click="changeStatus"></button></p>',
    methods:{
        changeStatus:function(){
            this.status = 'Normal'
        }
    }

});

var vm1 = new Vue({

    el: '#app'


});