const views = import.meta.glob('../views/*.js'); //动态导入所有页面组件
import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router';
const routes: RouteRecordRaw[] = [];

const router = createRouter({
    history: createWebHistory(''),
    routes: routes,
});

