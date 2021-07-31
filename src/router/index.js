import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import ExclusiveCourse from "../components/ExclusiveCourse";
import CourseDetail from "../views/CourseDetail";
import CourseVideo from "../components/CourseDetail/CourseVedio";
import {getUserInfo} from "../api/api";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  // 专属课程
  {
    path: "/exclusive-course",
    name: "ExclusiveCourse",
    component: ExclusiveCourse,
  },
  // 首页课程列表
  {
    path: "/course-detail/:id",
    name: "CourseDetail",
    component: CourseDetail,
  },
  {
    // 课程视频
    path: "/coursevideo",
    name: "coursevideo",
    component: CourseVideo,
  },
  // 个人中心
  {
    path: "/personal-center",
    name: "PersonalCenter",
    component: () => import("../views/PersonalCenter"),
    meta: {
      requireLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 判断是否是需要登录的页面
  // 再判断是否是登陆状态
  if (to.meta.requireLogin) {
    getUserInfo().then((res) => {
      if (res.code === 0) {
        next();
      } else {
        next("/");
      }
    });
  } else {
    next();
  }
});

export default router;
