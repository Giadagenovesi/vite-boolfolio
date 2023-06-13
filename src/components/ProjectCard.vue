<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000",
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