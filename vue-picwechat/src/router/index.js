import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "upload",
    // name: "Home",
    // component: Home,
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("@/views/upload/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
