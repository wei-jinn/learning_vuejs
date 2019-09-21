<template>
    <div>
        <h3>The New Quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        name: "New",
        data:function(){
            return{
            counter:0
            };

        },
        destroyed(){
            console.log('Destroyed!');
        },
        deactivated(){
            console.log('Deactivated!');
        },
        activated(){
            console.log('Activated!');
        }

    }
</script>

<style scoped>

</style>