<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{username}}</p>
        <p>Spoilt Category: {{spoilCat()}}</p>
        <p>Category: {{category}}</p>
        <p>User age: {{age}}</p>
        <button @click ="resetName">Reset Name</button>
        <button @click ="resetFn()">Reset Name From Parent</button>

    </div>
</template>

<script>
    import {eventBus} from '../main';
    export default {
        props: {
            username:
                {
                    type: String,
                    required: true,
                    default: 'JJ' //It will show when there is no assignment of data from parent to child component
                },
            category:
                {
                    type: String,
                    required: true
                },
            resetFn: Function,
            age:Number

        },//the attribute name must be same as what you use in template {{attribute}}
        methods: {
            spoilCat: function () {
                return this.category.split("").reverse("").join("");
            },
            resetName(){
                this.username ='No Name';
                this.$emit('nameReset', this.username); //An event listener that can pass the data username back to Parent component when event "nameReset" is triggered.
            }
        },
        created(){
            eventBus.$on('changeAgeListener', (age)=>{

                this.age = age;

            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
