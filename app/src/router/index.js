import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        children: [{
                path: "/index",
                name: "index",
                component: () =>
                    import ("@/views/index/index"),
            },
            {
                path: "/class",
                name: "class",
                component: () =>
                    import ("@/views/class/class"),
            },
            {
                path: "/news",
                name: "news",
                component: () =>
                    import ("@/views/news/news"),
            },
            {
                path: "/book",
                name: "book",
                component: () =>
                    import ("@/views/book/book"),
            },
            {
                path: "/my",
                name: "my",
                component: () =>
                    import ("@/views/my/my"),
            },
            {
                path: "/setUser",
                name: "setUser",
                component: () =>
                    import ("@/views/my/setUser"),
            },
            // setUser
        ],
        component: () =>
            import ("@/views/login"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    mode: "history",
    base: process.env.BASE_URL,
    base: process.env.BASE_URL,
    routes,
});

export default router;