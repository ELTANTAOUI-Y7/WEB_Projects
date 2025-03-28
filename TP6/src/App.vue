<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #4a90e2;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --background-color: #f5f6fa;
  --text-color: #2c3e50;
  --light-gray: #ecf0f1;
}

body {
  font-family: 'Segoe UI', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  line-height: 1.6;
  background-color: var(--background-color);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Global styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Button styles */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #357abd;
  transform: translateY(-1px);
}

/* Card styles */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
}

/* Form styles */
input, select, textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid var(--light-gray);
  border-radius: 4px;
  font-size: 16px;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
}
</style>
