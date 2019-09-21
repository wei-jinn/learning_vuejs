<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>

                <div class="form-group">
                <label>Username</label>
                <input class="form-control" type="text" v-model="user.username">
                </div>

                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>

            <button class="btn btn-primary" @click="submit">Submit</button>
                <div>
                    <p> Your username is {{user.username }}</p>
                    <p> Your email is {{user.email}}</p>
                </div>

                <hr>

                <input class="form-control" type="text" v-model="node">

                <hr>
                <button class="btn btn-primary" @click="fetchData">Get data</button>

                <ul class="list-group">

                    <li class="list-group-item" v-for="u in users">

                        {{u.username}} - {{u.email}}

                    </li>
                </ul>
            </div>


        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                user:{
                    username:'',
                    email:''
                },
                users:[],
                resource:{},
                node:'data'
            }
        },
        methods:{
            submit(){

                // this.$http.post('data.json', this.user).
                //     then(response =>{
                //         console.log(response);
                // }, error=>{
                //         console.log(error);
                // });

                this.resource.save('data.json', this.user);
                this.resource.saveAlt(this.user);


            },
            fetchData(){
                // this.$http.get('data.json')
                //     .then(response=> {
                //         return response.json();
                //         // }).then (data=>console.log(data));
                //     }).then(data=>{
                //         const resultArray =[];
                //         for(let key in data){
                //             resultArray.push(data[key]);
                //         }
                //         this.users = resultArray;
                // });

                this.resource.getData({node:this.node})
                    .then(response=> {
                                return response.json();
                                // }).then (data=>console.log(data));
                            }).then(data=>{
                                const resultArray =[];
                                for(let key in data){
                                    resultArray.push(data[key]);
                                }
                                this.users = resultArray;
                        });
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
        },
        created(){
            const customActions = {
                saveAlt:{method:'POST' , url: 'alternative.json'},
                getData:{method:'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style>

</style>
