<template>
  <div class="post-list">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { getPosts } from '../composables/getPosts'

export default {
  name: 'PostList',
  components: {
    SinglePost
  },
  async setup() {
    const posts = await getPosts()
    return { posts }
  }
}
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
</style> 