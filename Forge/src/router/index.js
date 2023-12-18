import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/common/HomePage.vue'
import ChatRoom from '../components/chat/ChatRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: ChatRoom
    }
  ]
})

export default router
