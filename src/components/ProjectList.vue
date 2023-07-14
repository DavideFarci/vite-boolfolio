<script>
import axios from "axios";

export default {
  data() {
    return {
      arrProjects: [],
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.getPosts();
    },
    getPosts() {
      axios
        .get("http://localhost:8000/api/posts", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrPosts = response.data.data;
          this.nPages = response.data.last_page;
        });
    },
  },
  created() {
    axios
      .get("http://localhost:8000/api/projects", {
        params: {
          page: this.nPage,
        },
      })
      .then((response) => {
        this.arrProjects = response.data.data;
        this.nPages = response.data.last_page;
      });
  },
};
</script>

<template>
  <h1 class="text-danger">Boolpress</h1>
  <ul>
    <li v-for="project in arrProjects" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
  <nav>
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>

      <li
        v-for="page in nPages"
        :key="page"
        class="page-item"
        :class="{ active: page == currentPage }"
      >
        <span class="page-link" @click="changePage(page)">
          {{ page }}
        </span>
      </li>

      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
