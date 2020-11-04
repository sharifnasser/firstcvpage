import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bio from '@/components/Bio'
import Experience from '@/components/Experience'
import Speaking from '@/components/Speaking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bio',
      name: 'Bio',
      component: Bio
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/speaking',
      name: 'Speaking',
      component: Speaking
    }
  ]
})
