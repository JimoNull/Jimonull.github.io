import { createRouter, createWebHistory } from 'vue-router'
import about from '@/pages/about'
import works from '@/pages/works'
import skills from '@/pages/skills'

const routes = [
    {
        path: '/about',
        name: 'about',
        component: about
      },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router

