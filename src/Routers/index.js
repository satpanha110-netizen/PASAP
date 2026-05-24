import { createRouter, createWebHistory } from 'vue-router'
import Detail from "../pages/Detail.vue";
import Home from "../pages/Home.vue";
import Menu from '../pages/Menu.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/menu',
    name : 'Menu',
    component:Menu
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;