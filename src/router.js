import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import AppShow from "./pages/AppShow.vue";
import AppAbout from "./pages/AppAbout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: AppShow,
    },
  ],
});

export { router };
