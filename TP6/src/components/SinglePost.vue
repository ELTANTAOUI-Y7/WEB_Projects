<template>
  <div class="post-card">
    <h2>{{ post.title }}</h2>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <p class="snippet">{{ snippet }}</p>
    <router-link :to="'/post/' + post.id" class="read-more">Read more</router-link>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    snippet() {
      return this.post.body.substring(0, 50) + '...'
    }
  }
}
</script>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.tag {
  background-color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.snippet {
  color: #666;
  margin: 0.5rem 0;
}

.read-more {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style> 