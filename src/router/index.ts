import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

const staticRoutes = [{
  path: '/',
  name: '/',
  component: Home,
  redirect: '/login',
  children: [{
    path: '/home',
    name: 'home',
    component: Home
  }]
}, {
  path: '/login',
  name: 'login',
  component: Login
}]

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory 方法路由包含(#)号，createWebHistory 方法不包含（#）号 
	routes: staticRoutes,
})

export default router;