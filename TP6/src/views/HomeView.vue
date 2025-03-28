<template>
  <div class="home">
    <div class="container">
      <div class="main-content">
        <PostList :posts="posts" title="Latest Posts" />
      </div>
      <div class="sidebar">
        <TagCloud />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import { posts } from '@/store.js';

export default {
  name: 'HomeView',
  components: {
    PostList,
    TagCloud
  },
  computed: {
    posts() {
      return posts.value;
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #f9f9f9;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
