new Vue({

    el:'#app',
    data:{
        playerHealth: 0,
        monsterHealth: 0,
        gameIsRunning: false,
        turns: []

    },

    methods:{

        gameStart:function(){

                this.gameIsRunning=true;
                this.playerHealth=100;
                this.monsterHealth=100;

        },

        attack:function(){


            var damageM = this.calculateDamage(3,10);
            if(this.monsterHealth-damageM>0){
            this.monsterHealth -= damageM;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player dealt ' + damageM + ' to Monster'
            });
            }
            else{
                this.monsterHealth =0;
                this.checkWin();

            }

           this.monsterAttack();
            },

        specialAttack:function(){
            var damageM = this.calculateDamage(10,20);
            if(this.monsterHealth-damageM>0){
                this.monsterHealth -= damageM;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player dealt ' + damageM + ' to Monster'
                });
            }
            else{
                this.monsterHealth =0;
                this.checkWin();

            }

            this.monsterAttack();


        },

        monsterAttack:function(){
            var damageP = this.calculateDamage(5,12);
            if(this.playerHealth-damageP>0){
                this.playerHealth -= damageP;
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster dealt ' + damageP + ' to Player'
                });

            }
            else{
                this.playerHealth =0;
                this.checkWin();
            }
        },
        heal:function(){

            if(this.playerHealth<=90){
                this.playerHealth += Math.round(Math.random() * 10);
            }else{
                this.playerHealth = 100;
                alert('You have full HP now!')
            }

        },

        giveUp:function(){
            this.gameIsRunning = false;
        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);

        },

        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You won! New Game?')){
                    this.gameStart();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm('You lost! New Game?')){
                    this.gameStart();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
        }


    }

});