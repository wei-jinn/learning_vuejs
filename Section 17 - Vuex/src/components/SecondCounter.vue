<template>
    <div>
        <p>Buttons from SecondCounter</p>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    // import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
    export default {
        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ]),

            ...mapActions([
                ''
            ])
        }
    }
</script>