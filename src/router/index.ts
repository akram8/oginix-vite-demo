import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

const staticRoutes = [{
  path: '/',
  name: 'home',
  component: Home,
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/home',
  name: 'home',
  component: Home
}]

const router = createRouter({
  history: createWebHashHistory(),
	routes: staticRoutes,
})

export default router;