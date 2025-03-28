<template>
  <div class="tag-view">
    <div class="container">
      <div class="main-content">
        <PostList 
          :posts="filteredPosts" 
          :title="'Posts tagged with #' + tagName" 
        />
      </div>
      <div class="sidebar">
        <TagCloud />
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import TagCloud from '@/components/TagCloud.vue';
import { getPostsByTag } from '@/store.js';

export default {
  name: 'TagView',
  components: {
    PostList,
    TagCloud
  },
  computed: {
    tagName() {
      return this.$route.params.tag;
    },
    filteredPosts() {
      return getPostsByTag(this.tagName);
    }
  }
}
</script>

<style scoped>
.tag-view {
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