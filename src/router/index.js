import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
  ]
});
