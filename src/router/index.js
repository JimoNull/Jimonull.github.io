import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home'
import career from '@/components/career'
import skills from '@/components/skills'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
    {
      path: '/career',
      name: 'career',
      component: career
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

