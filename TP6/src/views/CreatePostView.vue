<template>
  <div class="create-post">
    <h2>Create New Post</h2>
    <form @submit.prevent="handleSubmit" class="post-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          v-model="post.title" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="body">Content:</label>
        <textarea 
          id="body" 
          v-model="post.body" 
          required
          rows="10"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="tags">Tags (comma-separated):</label>
        <input 
          type="text" 
          id="tags" 
          v-model="tagsInput" 
          placeholder="e.g., vue, javascript, web"
        >
      </div>
      
      <button type="submit" class="submit-btn">Create Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CreatePostView',
  setup() {
    const router = useRouter()
    const post = ref({
      title: '',
      body: '',
      tags: []
    })
    const tagsInput = ref('')

    const handleSubmit = async () => {
      post.value.tags = tagsInput.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag)

      try {
        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post.value)
        })

        if (!response.ok) {
          throw new Error('Failed to create post')
        }

        router.push('/')
      } catch (error) {
        console.error('Error creating post:', error)
      }
    }

    return {
      post,
      tagsInput,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.create-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.submit-btn:hover {
  background-color: #3aa876;
}
</style> 