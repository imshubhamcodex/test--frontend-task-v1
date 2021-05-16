import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home";
import main from "../components/main";
import test from "../components/done";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/",
    component: home,
  },
  {
    name: "main",
    path: "/process",
    component: main,
  },
  {
    name: "test",
    path: "/test",
    component: test,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
