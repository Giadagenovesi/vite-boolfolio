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
    <div class="card">
          <h5>{{ project.title }}</h5>
          <p>{{ project.content }}</p>
        </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;
}</style>