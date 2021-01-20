import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Artistas from "../views/Artistas.vue";
import Albums from "../views/Albums.vue";
import Canciones from "../views/Canciones.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artistas",
    name: "Artistas",
    component: Artistas,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/canciones",
    name: "Canciones",
    component: Canciones,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
