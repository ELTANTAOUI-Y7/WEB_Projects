<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="navbar-brand">Blog App</h1>
      <div class="navbar-links">
        <router-link to="/" class="nav-link">
          <i class="fas fa-home"></i>
          Home
        </router-link>
        <router-link to="/add-post" class="nav-link">
          <i class="fas fa-plus"></i>
          Add Post
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .navbar-brand {
    font-size: 1.3rem;
  }
}
</style> 