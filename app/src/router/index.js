import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
<<<<<<< HEAD
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
=======
        path: "/",
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
    base: process.env.BASE_URL,
    routes,
});

export default router;
>>>>>>> dev
