import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import viewPost from '../views/ViewPost.vue';
import Write from '../views/Write.vue';
import Profile from '../views/Profile.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:id',
        name: 'viewpost',
        component: viewPost
    },
    {
        path: '/makeapost',
        name: 'write',
        component: Write
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;