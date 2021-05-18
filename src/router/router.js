import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home";
import main from "../components/main";
import done from "../components/done";
import allrecords from "../components/allRecords";
import error from "../components/error";

import test from "../components/editRecord";

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
    name: "done",
    path: "/done",
    component: done,
  },
  {
    name: "allrecords",
    path: "/allrecords",
    component: allrecords,
  },
  {
    name: "test",
    path: "/test",
    component: test,
  },
  {
    name: "error",
    path: "*",
    component: error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
