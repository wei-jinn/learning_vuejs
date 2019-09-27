import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store = new Vuex.Store({

     state:{
         counter: 0
     },
     getters:{
       multiplyTenCounter: state =>{
           return state.counter * 10;

       },
         stringCounter: state =>{
           return state.counter + ' Clicks';
         }
     },

     mutations:{
        increment: state => {
            state.counter ++;
        },
         decrement:state =>{
            state.counter--;
         }
     },
     actions:{

         asyncIncrement:({commit})=>{
             setTimeout(()=>{
                 commit('increment');
             }, 1000);
         },
         asyncDecrement:({commit})=>{
             setTimeout(()=>{
                 commit('decrement');
             }, 1000);
         }

     }

 });