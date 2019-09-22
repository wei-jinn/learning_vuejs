import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';


export const routes=[

    {path: '/user/', component: User, children:[
            {path:'', component:UserStart},
            {path:':identity', component:UserDetail},
            {path:'id/edit', component:UserEdit , name:'userEdit'}

]},
    {path:'', component: Home, name:'home'},//root route

    {path:'/redirect-me', redirect:{name:'home'}}, //redirect to home when "redirect-me" is entered into url
    {path:'*', redirect:{name:'home'}} //redirect to home when any undefined url is entered.


];