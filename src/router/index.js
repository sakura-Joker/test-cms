import Vue from "vue";
import Router from "vue-router";
import Layout from "@/layout";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "首页",
        meta: {
          title: "首页",
        },
        component: () => import("@/pages/home"),
      },
      {
        path: "activity",
        name: "活动管理",
        meta: {
          title: "活动管理",
          breadcrumb: false,
        },
        component: () => import("@/pages/activity"),
      },
    ],
  },
  {
    path: "/decorate",
    name: "活动详情",
    meta: {
      title: "活动详情",
    },
    component: () => import("@/pages/decorate"),
  },
];

export default new Router({ routes: constantRoutes });
