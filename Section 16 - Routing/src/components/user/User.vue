<template>
    <div>
    <h1>The User Page</h1>
<hr>

        <p>Loaded ID: {{id}}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr>
        <router-view></router-view>
    </div>
</template>

<script>

    export default{

        data(){
            return{
                id: this.$route.params.identity //the identity is defined in the route.js. Check it out
            }
        },
        methods:{
            navigateToHome(){
                this.$router.push({name:'home'});
            }
        },
        watch:{
            '$route'(to,from){
                this.id = to.params.identity;  // watch the change in route, the id is mapped onto the params identity of the route
            }
        }
    }

</script>
