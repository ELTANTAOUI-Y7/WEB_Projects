<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div class="tags">
      <router-link 
        v-for="tag in uniqueTags" 
        :key="tag" 
        :to="'/tags/' + tag"
        class="tag"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../composables/getPosts'

export default {
  name: 'TagCloud',
  async setup() {
    const posts = await getPosts()
    const uniqueTags = [...new Set(posts.flatMap(post => post.tags))]
    return { uniqueTags }
  }
}
</script>

<style scoped>
.tag-cloud {
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  background-color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  font-size: 0.8rem;
}

.tag:hover {
  background-color: #42b983;
  color: white;
}
</style> 