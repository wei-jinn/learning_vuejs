<template>
<div>

  <app-server-status></app-server-status>

</div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
    export default {
      components:{
          'app-server-status': ServerStatus
          //4. Bring the template of ServerStatus to Home.vue, by calling it locally and define its element name/ tag name
          //5. Use the defined components here to put in the template of Home.vue.
          //6. Similarly, there is only one root element allowed in the template. Next go to main.js
      }
    }
</script>

<style scoped>

</style>
