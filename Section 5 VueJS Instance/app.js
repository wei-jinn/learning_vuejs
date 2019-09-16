
Vue.component('test', {
  template: '<h3>This line will be displayed on each tag test </h3>'

});

var vm1 = new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs)
    },
    updateTitle: function(title) {
      this.title = title;

    },
    welcome:function(){
      return "Welcome to " + this.title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app');

var vm2 = new Vue({

  el:'#app2',
  data:{
    title: 'TITLE FOR VM22'
  },
  methods:{
    chgTitle:function(){
      vm1.title = 'Changed';

    },

    useLowerCase:function(){
      return this.title.toLowerCase();
    },

    welcomeAgain:function(){
      return vm1.welcome();
    //Calling method from vm1(other instance)
    }
  }


});

var vm5_71 = new Vue({

  template: "<h1>Hello this is Section 5 Video 71</h1>"

});

vm5_71.$mount('#app5_71');

