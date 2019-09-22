<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact ><a>Home</a></router-link>
        <router-link to="/user" tag="li" ><a>User</a></router-link>

        <li class="nav-item"><a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>