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
        <router-link :to="{ name: 'projects' }" class="btn btn-success mb-3">Back</router-link>
        <div v-if="project">
            <h2>{{ project.title }}</h2>
            <div class="tags my-4">
                <span v-for="(type, index) in project.types">#{{ type.name }} {{ index === project.types.length - 1 ? '' : ','
                }}</span>
            </div>
            <p>
                {{ project.content }}
            </p>
        </div>
        <div v-else-if="errorMesage" class="my-4">
            {{ errorMesage }}
        </div>
    </section>
</template>

<style lang="scss" scoped></style>