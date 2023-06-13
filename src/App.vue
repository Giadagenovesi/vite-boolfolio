<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      console.log('ecco i miei project')
      axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
        this.projects = resp.data.results; 
      })
    }
  }
}
</script>

<template>
  <div class="container py-5">
    <h2>I miei Progetti</h2>
    <div class="row row-cols-3">
      <div class="col g-4" v-for="project in projects" :key="projects.id">
        <div class="card">
          <h5>{{ project.title }}</h5>
          <p>{{ project.content }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.card {
  height: 100%;
}
</style>