<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <button @click="setCategory">Set Category</button>
        <p> Currently, in User Component, the username is {{username}}</p>
        <p>Age : {{age}}</p>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :username="username" @nameReset="username = $event" :resetFn="resetNameInParent" :category="category" :age="age"></app-user-detail>
<!--                    -->

            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age" ></app-user-edit>
<!--                <app-user-edit :age="age" @changeAgeListener="age = $event"></app-user-edit>-->
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:function(){
          return{
              username:'Max',
              category: 'No category',
              age: 10

          }  ;
        },
        methods:{
            changeName:function(){
                if(this.username == 'Max'){
                    this.username = 'Anna';
                }else{
                    this.username = 'Max';
                }
            },
            setCategory:function(){
                if(this.category == "no category"){
                    this.category = 'student';
                }else{
                    this.category = 'no category';
                }
            },
            resetNameInParent(){
                this.username = "original name from parent component";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
