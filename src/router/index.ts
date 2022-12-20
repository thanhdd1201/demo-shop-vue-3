import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/LandingPage.vue"),
  },
  {
    path: "/product/:id",
    name: "productDetail",
    component: () => import("../views/ProductDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
