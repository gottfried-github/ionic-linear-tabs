import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HomeRecordingPage from '../pages/HomeRecordingPage.vue'
import HomeMeetingPage from '../pages/HomeMeetingPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/home/recording',
    component: HomeRecordingPage,
  },
  {
    path: '/home/meeting',
    component: HomeMeetingPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
