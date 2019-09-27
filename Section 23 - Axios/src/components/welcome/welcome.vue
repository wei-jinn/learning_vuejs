<template>
  <div id="welcome">
    <h1>Time to learn something new!</h1>
    <p>You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>

<!--      <p>{{mode? "Testing is on" : "Testing is off"}}</p>-->
      <p v-if="mode">Testing v-if is true</p>
      <p>Counter is : {{counter}}</p>

      <p v-if="counter>10">That is too much.</p>
      <p v-else-if="counter<0">That is too little.</p>
      <a :href="link">Search now</a>

      <hr>
      <p>{{mode}}</p>

      <ul style="list-style-type:none">

        <li v-for="car in cars">{{car}}</li>

      </ul>

      <hr>
      <button class="btn btn-primary" @click="switchMode">Click to switch mode</button>
      <button class="btn btn-primary" @click="increment">Add counter</button>
      <button class="btn btn-primary" @click="decrement">Minus counter</button>

    </div>
  </div>
</template>
<script>

  export default{

    data(){
      return{
        mode: true,
        counter: 0,
        cars:['Honda', 'Proton', 'Perodua', 'Toyota'],
        link:'https://www.google.com'
      }
    },
    methods:{
      switchMode(){
         this.mode = !this.mode;
      },
      increment(){
        this.counter++;
      },
      decrement(){
        this.counter--;
      }
    }

  }

</script>

<style scoped>
  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  .cta a {
    margin: 10px;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #521751;
    border-radius: 3px;
    width: 100px;
    padding: 10px;
    box-sizing: border-box;
    color: #521751;
  }

  .cta a:hover,
  .cta a:active {
    background-color: #521751;
    color: white;
  }
</style>