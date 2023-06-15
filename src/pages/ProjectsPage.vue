<script>
import axios from 'axios';
import { store } from "../store";
import ProjectCard from '../components/ProjectCard.vue';
import Pagination from '../components/Pagination.vue';


export default {
    name: "ProjectsPage",
    components: { ProjectCard, Pagination },
    data() {
    return {
      projects: [],
      store,
      currentPage: 1,
      lastPage: null,
      totalProjects: 0,
    }
    },
    mounted() {
    this.getProjects();
    },
    methods: {
    getProjects(pageNumber = 1) {
      console.log('ecco i miei project')
      axios.get(`${store.apiUrl}/api/projects`, {
        params: {
          page:pageNumber
        }
      }).then(resp => {
        console.log(resp);
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.totalProjects = resp.data.results.total;
      });
    }
  },

}
</script>

<template>
  <AppHeader/>
  <div class="container pb-5">
    <h2 class="text-center">I miei Progetti</h2>
    <div class="row row-cols-3">
      <div class="col g-4" v-for="project in projects" :key="projects.id">
        <ProjectCard :project="project" />
      </div>
    </div>

    <!-- pagination -->

    <Pagination :currentPage="currentPage" :lastPage="lastPage" @changePage="getProjects"/>

  </div>
</template>

<style lang="scss" scoped></style>