<template>
  <div class="create-post">
    <div class="container">
      <h1 class="title">Create New Post</h1>
      <form @submit.prevent="submitForm" class="post-form">
        <div class="form-group">
          <label for="title">Title</label>
          <input 
            type="text" 
            id="title" 
            v-model="form.title" 
            required 
            class="form-control"
            placeholder="Enter post title"
          >
        </div>
        
        <div class="form-group">
          <label for="content">Content</label>
          <textarea 
            id="content" 
            v-model="form.content" 
            required 
            class="form-control"
            rows="8"
            placeholder="Write your post content here"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="tags">Tags (comma separated)</label>
          <input 
            type="text" 
            id="tags" 
            v-model="tagsInput" 
            class="form-control"
            placeholder="e.g. vue, javascript, programming"
          >
        </div>
        
        <div class="form-actions">
          <button type="submit" class="submit-btn">Create Post</button>
          <router-link to="/" class="cancel-link">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { addPost } from '@/store.js';

export default {
  name: 'CreatePostView',
  data() {
    return {
      form: {
        title: '',
        content: '',
      },
      tagsInput: ''
    }
  },
  methods: {
    submitForm() {
      // Convert comma-separated tags to array and trim whitespace
      const tags = this.tagsInput
        ? this.tagsInput.split(',').map(tag => tag.trim().toLowerCase()).filter(tag => tag)
        : [];
      
      // Create the post object
      const post = {
        title: this.form.title,
        content: this.form.content,
        tags
      };
      
      // Add the post
      addPost(post);
      
      // Redirect to home page
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.create-post {
  background-color: #f9f9f9;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  margin-bottom: 1.5rem;
  color: #333;
}

.post-form {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.form-control:focus {
  outline: none;
  border-color: #4a76a8;
  box-shadow: 0 0 0 2px rgba(74, 118, 168, 0.2);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.submit-btn {
  background-color: #4a76a8;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #3b5998;
}

.cancel-link {
  color: #666;
  text-decoration: none;
}

.cancel-link:hover {
  text-decoration: underline;
}
</style> 