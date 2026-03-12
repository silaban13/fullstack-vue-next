import {createRouter, createWebHistory} from "vue-router";
import home from "../views/home.vue";
import about from "../views/about.vue";
import Navbar from "../components/Navbar.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";
import dashboard from "../views/dashboard.vue";
import Dashboard from "../views/dashboard.vue";


// PORTS
const routes = [
    {
        path: "/",
        component: Navbar,
        children: [
            {
                path:'/',
                name: 'Home',
                component: home,
            },
            {
                path: '/about',
                name: 'About',
                component: about,
            },

        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
    },
    {
        path: '/register',
        name: 'Regiter',
        component: register,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;