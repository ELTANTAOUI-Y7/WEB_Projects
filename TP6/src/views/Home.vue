<template>
  <div class="home">
    <div class="content">
      <PostList />
      <TagCloud />
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'Home',
  components: {
    PostList,
    TagCloud
  }
}
</script>

<style scoped>
.home {
  padding: 1rem;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style> 