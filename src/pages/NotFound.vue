<script>
    export default {
        name: "NotFound",
        methods: {
            goBack() {
                console.log(this.$router);
                this.$router.go(-1);
            }
        }
    }
</script>

<template>
    <div class="container">
        <h2 class="text-center my-5">La pagina che stai cercando non esiste.</h2>
        <div>
            <router-link :to="{ name: 'home' }" class="btn btn-primary">Vai alla home</router-link>
            <a @click.prevent="goBack" class="btn btn-danger ms-2" href="">Indietro</a>
        </div>
    </div>
</template>

