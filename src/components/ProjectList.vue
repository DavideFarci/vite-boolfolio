<script>
import axios from "axios";

export default {
  data() {
    return {
      arrProjects: [],
    };
  },
  created() {
    axios.get("").then(response);
  },
};
</script>

<template>
  <h1 class="text-danger">boolpress</h1>
  <ul>
    <li v-for="project in arrProjects" :key="post.id">{{ project.title }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
