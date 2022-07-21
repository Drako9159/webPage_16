import { createRouter, createWebHistory } from "vue-router";
import Cobertura from "../views/cobertura.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "paquets",
      component: () => import("../components/paquets.vue"),
    },
    {
      path: "/cobertura",
      name: "cobertura",
      component: Cobertura,
    } /*
    {
      path: "/",
      name: "Paquets",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

export default router;
