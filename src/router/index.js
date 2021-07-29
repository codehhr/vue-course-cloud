import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import ExclusiveCourse from "../components/ExclusiveCourse";
import CourseDetail from "../views/CourseDetail";
import PersonalCenter from "../views/PersonalCenter";

Vue.use(VueRouter);

const routes = [
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
    path: "/personal-center",
    name: "PersonalCenter",
    component: PersonalCenter,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
