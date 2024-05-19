import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ContactUs from '../views/ContactUsView.vue'
import Classes from '../views/ClassesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactUs
    },
    {
      path: '/Classes',
      name: 'Classes',
      component: Classes
    }
  ]
})

export default router
