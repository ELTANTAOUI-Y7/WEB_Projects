<template>
  <div class="post-card">
    <div class="post-image" :style="{ backgroundImage: `url(${post.image || 'https://via.placeholder.com/400x200'})` }">
    </div>
    <div class="post-content">
      <h2 class="post-title">{{ post.title }}</h2>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag" @click="navigateToTag(tag)">
          {{ tag }}
        </span>
      </div>
      <p class="post-excerpt">{{ contentSnippet }}</p>
      <router-link :to="'/post/' + post.id" class="read-more">
        Read more
      </router-link>
    </div>
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
    contentSnippet() {
      return this.post.content.substring(0, 100) + (this.post.content.length > 100 ? '...' : '');
    }
  },
  methods: {
    navigateToTag(tag) {
      this.$router.push(`/tags/${tag}`);
    }
  }
}
</script>

<style scoped>
.post-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-3px);
}

.post-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.post-content {
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.post-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.3rem;
  color: var(--secondary-color);
  line-height: 1.3;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.tag {
  background-color: var(--light-gray);
  color: var(--secondary-color);
  font-size: 0.85rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tag:hover {
  background-color: var(--primary-color);
  color: white;
}

.post-excerpt {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.read-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .post-card {
    margin-bottom: 1.5rem;
  }
  
  .post-image {
    height: 160px;
  }
  
  .post-content {
    padding: 1rem;
  }
  
  .post-title {
    font-size: 1.2rem;
  }
}
</style> 