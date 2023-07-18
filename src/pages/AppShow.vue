<script>
import axios from "axios";
import { store } from "../store";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      store,
      DateTime,
      singleProject: {},
    };
  },
  created() {
    // fai la richiesta axios
    axios
      .get(this.store.baseUrl + "api/projects/" + this.$route.params.slug)
      .then((response) => (this.singleProject = response.data.results));
  },
};
</script>

<template>
  <h2>{{ singleProject.title }}</h2>
  <h3>Last update: {{ this.DateTime.now().toFormat("dd-MM-yyyy") }}</h3>
  <img
    :src="this.store.baseUrl + 'storage/' + singleProject.image"
    :alt="singleProject.title"
  />
</template>

<style></style>
