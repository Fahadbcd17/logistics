import {  createRouter, createWebHistory  } from 'vue-router';
import HelloWorld from '../components/product.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;