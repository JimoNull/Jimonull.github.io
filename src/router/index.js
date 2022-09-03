import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home'
import works from '@/components/works'
import skills from '@/components/skills'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
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

