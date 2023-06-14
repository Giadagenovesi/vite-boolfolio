<script>
import axios from 'axios';
import { store } from "./store";
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [],
      store
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      console.log('ecco i miei project')
      axios.get(`${store.apiUrl}/api/projects`).then(resp => {
        this.projects = resp.data.results; 
      });
    }
  },
}
</script>

<template>
  <div class="container py-5">
    <h2 class="text-center">I miei Progetti</h2>
    <div class="row row-cols-3">
      <div class="col g-4" v-for="project in projects" :key="projects.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>