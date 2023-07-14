<script>
import axios from "axios";

import CardProject from "./CardProject.vue";
export default {
  data() {
    return {
      arrProjects: [],
      currentPage: 1,
      nPages: 0,
      // activePage: 1,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.getProjects();
    },
    nextPage() {
      this.currentPage++;
      this.getProjects();
      if (this.currentPage > 2) {
        this.currentPage = 1;
        this.getProjects();
      }
    },
    previousPage() {
      this.currentPage--;
      this.getProjects();
      if (this.currentPage < 1) {
        this.currentPage = 2;
        this.getProjects();
      }
    },
    getProjects() {
      axios
        .get("http://localhost:8000/api/projects", {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.arrProjects = response.data.data;
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
  components: { CardProject },
};
</script>

<template>
  <div class="container">
    <h1 class="text-danger">Boolpress</h1>
    <div class="row row-cols-3">
      <CardProject
        v-for="project in arrProjects"
        :key="project.id"
        :dataCard="project"
      />
    </div>

    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="previousPage()">Previous</a>
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
          <a class="page-link" href="#" @click="nextPage()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
