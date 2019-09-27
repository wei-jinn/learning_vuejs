export const fruitMixin = {
    data(){
        return{
            fruits:['Apple' ,'Banana', 'Mango', 'Melon'],
            inputFilterText:'',
            number: 0,
            mixinID: 'fruit'
        }
    },

    computed:{
        filteredFruits(){
            return this.fruits.filter((element)=>{
                return element.match(this.inputFilterText);
            });
        }
    },
    created(){
        console.log('fruitMixin is created');
    },
    methods:{
        displayID:function(){
            return "Your Mixin ID is " + this.mixinID;
        },
        displayText:function(){
            return "Your text is " + this.text;
        }
    }
};