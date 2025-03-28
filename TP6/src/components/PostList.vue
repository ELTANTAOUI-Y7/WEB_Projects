<template>
  <div class="post-list">
    <h1 v-if="title" class="list-title">{{ title }}</h1>
    <div v-if="posts.length === 0" class="no-posts">
      <i class="fas fa-newspaper"></i>
      <p>No posts found.</p>
    </div>
    <div class="posts-grid">
      <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
  name: 'PostList',
  components: {
    SinglePost
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.post-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.list-title {
  margin: 0 0 2rem 0;
  font-size: 2rem;
  color: var(--secondary-color);
}

.no-posts {
  text-align: center;
  padding: 3rem 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.no-posts i {
  font-size: 2.5rem;
  color: var(--light-gray);
  margin-bottom: 1rem;
}

.no-posts p {
  font-size: 1.1rem;
  color: #666;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .post-list {
    padding: 1.5rem 1rem;
  }
  
  .list-title {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style> 