import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePostView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostDetailView
    },
    {
      path: '/tags/:tag',
      name: 'tag',
      component: Home
    }
  ]
})

export default router 