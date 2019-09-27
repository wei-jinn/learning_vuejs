<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-alt-result></app-alt-result>

                <hr>
                <app-second-counter></app-second-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AltResult from "./components/AltResult.vue";
    import SecondCounter from "./components/SecondCounter.vue";

    export default {
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAltResult: AltResult,
            appSecondCounter: SecondCounter,
        }
    }
</script>

