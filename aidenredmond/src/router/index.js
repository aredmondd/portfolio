import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeftView from '../views/LeftView.vue'
import RightView from '../views/RightView.vue'
import MoreView from '../views/MoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/left',
        name: 'left',
        component: LeftView,
    },
    {
        path: '/right',
        name: 'right',
        component: RightView,
    },
    {
        path: '/more',
        name: 'more',
        component: MoreView,
    },
  ],
})

export default router
