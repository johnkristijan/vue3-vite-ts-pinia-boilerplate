import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("../modules/example/pages/HomePage.vue"),
    },
    {
        path: "/about",
        name: "AboutPage",
        component: () => import("../modules/example/pages/AboutPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
