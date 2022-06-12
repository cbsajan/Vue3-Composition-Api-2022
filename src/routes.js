import { createRouter, createWebHistory } from 'vue-router'
/* eslint-disable */
import Home from './components/Home/HomeComp.vue';
import Articles from './components/Articles/ArticlesComp.vue';


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/articles', component: Articles }
    ]
});



export default routes;