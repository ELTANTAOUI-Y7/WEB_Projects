import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import TagView from '../views/TagView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:id',
    name: 'post-detail',
    component: PostDetailView
  },
  {
    path: '/add-post',
    name: 'create-post',
    component: CreatePostView
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
