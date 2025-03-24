<template>
  <div class="post-detail">
    <div v-if="post" class="content">
      <div class="post-content">
        <h1>{{ post.title }}</h1>
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="body">{{ post.body }}</div>
        <div class="actions">
          <button @click="handleDelete" class="delete-btn">Delete Post</button>
          <router-link :to="'/edit/' + post.id" class="edit-btn">Edit Post</router-link>
        </div>
      </div>
      <TagCloud />
    </div>
    <div v-else class="loading">
      Loading...
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPost } from '../composables/getPost'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'PostDetailView',
  components: {
    TagCloud
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = ref(null)

    onMounted(async () => {
      post.value = await getPost(route.params.id)
    })

    const handleDelete = async () => {
      if (!confirm('Are you sure you want to delete this post?')) return

      try {
        const response = await fetch(`http://localhost:3000/posts/${post.value.id}`, {
          method: 'DELETE'
        })

        if (!response.ok) {
          throw new Error('Failed to delete post')
        }

        router.push('/')
      } catch (error) {
        console.error('Error deleting post:', error)
      }
    }

    return {
      post,
      handleDelete
    }
  }
}
</script>

<style scoped>
.post-detail {
  padding: 2rem;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.post-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  background-color: #e0e0e0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.body {
  line-height: 1.6;
  margin: 2rem 0;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.delete-btn, .edit-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}

.delete-btn {
  background-color: #ff4444;
  color: white;
  border: none;
}

.edit-btn {
  background-color: #42b983;
  color: white;
}

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}
</style> 