<template>
<!--  <div id="app">-->
<!--    <img src="./assets/logo.png">-->
<!--    <h1>{{ msg }}</h1>-->
<!--    <h2>Essential Links</h2>-->
<!--    <ul>-->
<!--      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
<!--      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
<!--      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
<!--      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
<!--    </ul>-->
<!--    <h2>Ecosystem</h2>-->
<!--    <ul>-->
<!--      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
<!--      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
<!--      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
<!--      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
<!--    </ul>-->
<!--  </div>-->
<div>
  <h1>Hello World.</h1>
  <p>New Message for you: </p>
  <hr>
  <p v-if="display">{{msg}}</p>
  <button @click="display = !display">{{display? 'Hide it' : 'Show it'}}</button>

  <hr>
<!-- 10. The element tag defined in main.js is available for use here -->
  THIS COMPONENT IS CALLED FROM MAIN.JS, GLOBALLY BY VUE.COMPONENT() via HOME
  <my-server-changer></my-server-changer>

  <hr>
  THIS COMPONENT IS CALLED FROM APP.VUE, LOCALLY BY IMPORT
  <app-server-status></app-server-status>

<!--  App.vue or Home.vue's template is the priority?-->


</div>




</template>

<script>

  import ServerStatus from "./components/ServerStatus.vue";

export default {


  data:function () {
    return {
      msg: 'Welcome to Your Vue.js App',
        display: false
    }
  },
    components:{
      'app-server-status' : ServerStatus
    }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/

/*h1, h2 {*/
/*  font-weight: normal;*/
/*}*/

/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/

/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/

/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
