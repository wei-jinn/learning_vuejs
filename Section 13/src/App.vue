<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase }}</p>
                <p>{{text | addWord | to-lowercase}}</p>
                <p>The number is {{number | multipleTwo}} </p>
                <hr>
                <button @click="fruits.push(newFruit)">Add New Item</button>
                <input v-model="newFruit">
                <hr>
                <input v-model="inputFilterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>

                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
   import {fruitMixin} from './fruitMixin';
   import List from './List.vue';
    export default {
        mixins:[fruitMixin],
        data(){
            return{
                text: 'Hello there',
               newFruit:''
            }
        },
        filters:{
            toUppercase(value){
                return value.toUpperCase();
            },
            addWord(value){
                return value + " I AM YOUR GOOD Friend"
            },
            multipleTwo(value){
                return value * 2;
            }
        },

        components:{
        appList:List
        }

    }
</script>

<style>

</style>
