import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import HomeRecordingPage from '../pages/HomeRecordingPage.vue'
import HomeMeetingPage from '../pages/HomeMeetingPage.vue'
import EventsPage from '../pages/EventsPage.vue'
import EventPage from '../pages/EventPage.vue'
import EventRegisterPage from '../pages/EventRegisterPage.vue'

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
  {
    path: '/events',
    component: EventsPage,
  },
  {
    path: '/events/event',
    component: EventPage,
  },
  {
    path: '/events/event/register',
    component: EventRegisterPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
