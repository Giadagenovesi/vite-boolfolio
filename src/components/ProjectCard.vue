<script>
import { store } from "../store";

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store   
        }
    }
}
</script>

<template>
    <div class="card p-2">
          <h5>{{ project.title }}</h5>
          <p>{{ project.content }}</p>
          <p class="text-primary">
            <ul class="list-unstyled" v-if="project.technologies.length">
                <li v-for="technology in project.technologies" :key="technology.id">
                    {{ technology.name }}
                </li>
            </ul>
            <span v-else>Nessuna tecnologia</span>
          </p>
          <p>
            <span v-if="project.type"> {{ project.type.name }}</span>
            <span v-else>Nessuna tipologia</span>
          </p>

          <router-link :to='{ name: "single-project", params: { slug: project.slug } }' class="btn btn-primary">Dettagli</router-link>
    </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
}</style>