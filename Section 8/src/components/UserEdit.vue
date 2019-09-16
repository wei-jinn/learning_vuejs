<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age : {{age}}</p>
        <button @click="changeAge">Change Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';


    export default{
        props:['age'],
        methods:{
            changeAge:function(){
                this.age = 35;
                // this.$emit('changeAgeListener' , this.age); //Return the value of age to parent
                eventBus.changeAge(this.age);
            }
        }

    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
