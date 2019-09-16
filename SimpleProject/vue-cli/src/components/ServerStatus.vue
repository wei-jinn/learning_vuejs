<template>
  <div>
    <p>Server Status: {{status}}</p>

    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>

  //1. Define data, methods to be operated.
  //2. Put everything needed within single element <div></div> in the template section.
  //3. Now, the template from ServerStatus is ready to go. Next go to Home.vue.
    export default {
        data: function () {
            return {
                status: 'Critical'
            }
        },
        methods: {

            changeStatus() {
                if (this.status == 'Critical') {
                    this.status = 'Normal';
                } else {
                    this.status = 'Critical';
                }

            }
        }
    }
</script>

<style scoped>

</style>
