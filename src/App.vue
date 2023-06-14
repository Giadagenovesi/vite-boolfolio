<script>
import axios from 'axios';
import { store } from "./store";
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: { ProjectCard },
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
  <div class="container py-5">
    <h2 class="text-center">I miei Progetti</h2>
    <div class="row row-cols-3">
      <div class="col g-4" v-for="project in projects" :key="projects.id">
        <ProjectCard :project="project" />
      </div>
    </div>

    <!-- Pagination -->

    <nav
      v-if="lastPage"
      aria-label="Page navigation example"
      class="my-3 d-flex justify-content-end"
    >
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a
            @click.prevent="getProjects(currentPage - 1)"
            class="page-link"
            href="#"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          :class="{ active: pageNum === currentPage }"
          v-for="pageNum in lastPage"
        >
          <a @click.prevent="getProjects(pageNum)" class="page-link" href="#">{{
            pageNum
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === lastPage }">
          <a
            @click.prevent="getProjects(currentPage + 1)"
            class="page-link"
            href="#"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

</style>