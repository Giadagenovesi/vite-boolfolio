<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000",
      projects: []
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      console.log('ecco i miei project')
      axios.get(`${this.apiUrl}/api/projects`).then(resp => {
        this.projects = resp.data.results; 
      });
    }
  },
}
</script>

<template>
  <div class="container py-5">
    <h2>I miei Progetti</h2>
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