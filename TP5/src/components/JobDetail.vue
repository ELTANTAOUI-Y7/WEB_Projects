<template>
  <div class="job-detail card">
    <div class="card-body">
      <h5 class="card-title">{{ job.title }}</h5>
      <p class="card-text">{{ job.description }}</p>
      <div class="job-info">
        <p><strong>Salaire :</strong> {{ job.salary }}€</p>
        <p><strong>Expérience requise :</strong> {{ job.experience }} ans</p>
        <p><strong>Date de création :</strong> {{ formatDate(job.createdAt) }}</p>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <router-link :to="'/jobs/' + job.id" class="btn btn-primary me-2">
          Modifier
        </router-link>
        <button @click="$emit('delete', job.id)" class="btn btn-danger">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('fr-FR')
    }
  }
}
</script>

<style scoped>
.job-detail {
  height: 100%;
  transition: transform 0.2s;
}

.job-detail:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.job-info {
  margin: 15px 0;
}

.job-info p {
  margin-bottom: 5px;
}
</style> 