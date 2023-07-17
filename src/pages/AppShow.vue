<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      singleProject: {},
    };
  },
  created() {
    // fai la richiesta axios
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => (this.singleProject = response.data));
    console.log(this.singleProject);
  },
};
</script>

<template>
  <h2>{{ singleProject.title }}</h2>
</template>

<style></style>
