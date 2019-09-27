<template>

    <div>
        <p>Counter is: {{ multiplyTenCounter }}</p>
        <p>Number of Clicks: {{stringCounter}}</p>

    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        // props: ['counter'],
        computed:{
            ...mapGetters([
                           "multiplyTenCounter",
                           "stringCounter"
                       ])
        }


    }
</script>