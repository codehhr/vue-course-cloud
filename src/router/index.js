import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index";
import ExclusiveCourse from "../components/ExclusiveCourse";
import CourseDetail from "../components/CourseDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/ExclusiveCourse",
    name: "ExclusiveCourse",
    component: ExclusiveCourse,
  },
  {
    path: "/CourseDetail/:id",
    name: "CourseDetail",
    component: CourseDetail,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
