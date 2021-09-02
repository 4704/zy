import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/tabbar",
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ('../views/Home.vue'),
    },
    {
        path: "/tabbar",
        name: "tabbar",
        redirect: "/index",
        component: () =>
            import ("../components/tabbar.vue"),
        children: [{
                path: "/index",
                name: "index",
                component: () =>
                    import ("@/views/index/index"),
            },
            {
                path: "/ShowTeachers",
                name: "ShowTeachers",
                component: () =>
                    import ("@/views/ShowTeachers/ShowTeachers"),
            },
            {
                path: "/News",
                name: "News",
                component: () =>
                    import ("@/views/News/news"),
            },
            {
                path: "/BookList",
                name: "BookList",
                component: () =>
                    import ("@/views/BookList/BookList"),
            },
            {
                path: "/Person",
                name: "Person",
                component: () =>
                    import ("@/views/Person/Person"),
            },
        ],
    },
    // 设置密码理由
    {
        path: "/setUser",
        name: "setUser",
        component: () =>
            import ("@/views/Person/setUser"),
    },
    // 课程详情路由
    {
        path: "/xq",
        name: "xq",
        component: () =>
            import ("@/views/ShowTeachers/xq"),
    },
    {
        path: "/kcxq",
        name: "kcxq",
        component: () =>
            import ("@/views/ShowTeachers/kcxq"),
    },

    // 签到页路由
    {
        path: "/xin",
        name: "xin",
        component: () =>
            import ("@/views/xin.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;