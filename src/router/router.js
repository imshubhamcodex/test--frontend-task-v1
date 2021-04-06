import Vue from "vue";
import VueRouter from "vue-router";
import homepage from "../components/homepage";

Vue.use(VueRouter);

const routes = [
  {
    name: "Home",
    path: "/",
    component: homepage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
