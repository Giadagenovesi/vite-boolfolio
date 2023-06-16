<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: "SingleProjectPage",
    data() {
        return {
            store,
            project: null,
            errorMessage: ""
        }
    },
    mounted() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiUrl}/api/projects/${slug}`).then((resp) => {

            if (resp.data.success) {
                this.project = resp.data.results
            } else {
                this.errorMessage = resp.data.error
            }
        })
    }
}
</script>

<template>
    <section class="container">
        <router-link :to="{ name: 'projects' }" class="btn btn-primary mb-3">Indietro</router-link>
        <div v-if="project">
            <h2>{{ project.title }}</h2>
            <p> {{ project.content }}</p>
            <p> Tipologia: {{ project.type.name }}</p>
            <div class=" my-4 text-primary">
                <span>Tecnologie: </span>
                <span v-for="(technology, index) in project.technologies"> {{ technology.name }} {{ index === project.technologies.length - 1 ? '.' : ','
                }}</span>
            </div>
        </div>
        <div v-else-if="errorMesage" class="my-4">
            {{ errorMesage }}
        </div>
    </section>
</template>

<style lang="scss" scoped></style>