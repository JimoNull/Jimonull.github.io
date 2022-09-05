import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home'
import output from '@/components/output'
import career from '@/components/career'
import skill from '@/components/skill'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/output',
    name: 'output',
    component: output
  },
    {
      path: '/career',
      name: 'career',
      component: career
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router

