import { ref } from 'vue'

// Initialize with sample blog posts
export const posts = ref([
  {
    id: 1,
    title: "Getting Started with Vue.js",
    content: "Vue.js is a progressive framework for building user interfaces...",
    tags: ["vue", "javascript", "frontend"]
  },
  {
    id: 2,
    title: "Vue Router Essentials",
    content: "Vue Router is the official router for Vue.js...",
    tags: ["vue", "router", "spa"]
  },
  {
    id: 3,
    title: "State Management with Vuex",
    content: "Vuex is a state management pattern + library for Vue.js applications...",
    tags: ["vue", "vuex", "state-management"]
  }
])

export const addPost = (post) => {
  posts.value.push({
    ...post,
    id: posts.value.length + 1
  })
}

export const updatePost = (updatedPost) => {
  const index = posts.value.findIndex(post => post.id === updatedPost.id)
  if (index !== -1) {
    posts.value[index] = updatedPost
  }
}

export const deletePost = (postId) => {
  posts.value = posts.value.filter(post => post.id !== postId)
}

export const getPostById = (id) => {
  return posts.value.find(post => post.id === Number(id))
}

export const getAllTags = () => {
  const allTags = new Set()
  posts.value.forEach(post => {
    post.tags.forEach(tag => allTags.add(tag))
  })
  return Array.from(allTags)
}

export const getPostsByTag = (tag) => {
  return posts.value.filter(post => post.tags.includes(tag))
} 