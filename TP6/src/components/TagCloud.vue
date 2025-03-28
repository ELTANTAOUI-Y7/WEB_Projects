<template>
  <div class="tag-cloud">
    <h3 class="tag-cloud-title">Tags</h3>
    <div class="tag-list">
      <router-link 
        v-for="tag in tags" 
        :key="tag" 
        :to="`/tags/${tag}`" 
        class="tag-link"
      >
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { getAllTags } from '@/store.js';

export default {
  name: 'TagCloud',
  computed: {
    tags() {
      return getAllTags();
    }
  }
}
</script>

<style scoped>
.tag-cloud {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.tag-cloud-title {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #333;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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
</style> 