<template>
  <div class="post-detail">
    <div class="container" v-if="post">
      <div class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-tags">
          <router-link 
            v-for="tag in post.tags" 
            :key="tag" 
            :to="`/tags/${tag}`" 
            class="tag-link"
          >
            #{{ tag }}
          </router-link>
        </div>
      </div>
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-actions">
        <router-link to="/" class="back-link">Back to posts</router-link>
        <button @click="deletePost" class="delete-btn">Delete post</button>
      </div>
    </div>
    <div class="not-found" v-else>
      <h2>Post not found</h2>
      <router-link to="/" class="back-link">Back to posts</router-link>
    </div>
  </div>
</template>

<script>
import { getPostById, deletePost } from '@/store.js';

export default {
  name: 'PostDetailView',
  computed: {
    post() {
      return getPostById(this.$route.params.id);
    }
  },
  methods: {
    deletePost() {
      if (confirm('Are you sure you want to delete this post?')) {
        deletePost(this.post.id);
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.post-detail {
  background-color: #f9f9f9;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.post-header {
  margin-bottom: 2rem;
}

.post-title {
  margin-bottom: 0.5rem;
  color: #333;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.tag-link {
  background-color: #e0e0e0;
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0.7rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.tag-link:hover {
  background-color: #d0d0d0;
}

.post-content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #333;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.back-link {
  color: #4a76a8;
  text-decoration: none;
  font-weight: 500;
}

.back-link:hover {
  text-decoration: underline;
}

.delete-btn {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.delete-btn:hover {
  background-color: #d32f2f;
}

.not-found {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 1rem;
}
</style> 