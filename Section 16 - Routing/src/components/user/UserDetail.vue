<template>

    <div>
        <h3>Some User Details</h3>

        <p>User loaded has ID: {{$route.params.identity}}</p>

        <router-link tag="button" :to="'/user/' + $route.params.identity + '/edit'" >Edit User</router-link>

        <router-link
                tag="button"
                :to="{name:'userEdit', params:{id:$route.params.identity},
                   query:{ locale:'en', q:100}}" >Edit User</router-link>

    </div>

</template>

<script>
    export default{

        //to guard the route before entering. Condition applied to proceed to the route.
        beforeRouteEnter(to, from, next){
            if(true){
                next();
            }else{
                next(false);
            }
        }

    }

</script>