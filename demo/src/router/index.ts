import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/button",
      name: "About",
      component: () => import("../views/button/index.vue"),
    },
  ],
});

export default router;
