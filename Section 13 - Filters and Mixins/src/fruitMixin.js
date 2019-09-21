export const fruitMixin = {
    data(){
        return{
            fruits:['Apple' ,'Banana', 'Mango', 'Melon'],
            inputFilterText:'',
            number: 0
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
    }
};