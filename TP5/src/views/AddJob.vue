<template>
  <div class="add-job">
    <h2>Ajouter un emploi</h2>
    <form @submit.prevent="submitJob" class="mt-4">
      <div class="mb-3">
        <label class="form-label">Titre</label>
        <input
          type="text"
          class="form-control"
          v-model="job.title"
          required
        >
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
          class="form-control"
          v-model="job.description"
          rows="4"
          required
        ></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label">Salaire (€)</label>
        <input
          type="number"
          class="form-control"
          v-model.number="job.salary"
          required
        >
      </div>

      <div class="mb-3">
        <label class="form-label">Années d'expérience requises</label>
        <input
          type="number"
          class="form-control"
          v-model.number="job.experience"
          required
        >
      </div>

      <div class="d-flex justify-content-between">
        <router-link to="/" class="btn btn-secondary">
          Annuler
        </router-link>
        <button type="submit" class="btn btn-primary">
          Ajouter l'emploi
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  data() {
    return {
      job: {
        title: '',
        description: '',
        salary: null,
        experience: null,
        createdAt: new Date().toISOString()
      }
    }
  },
  methods: {
    async submitJob() {
      try {
        const response = await fetch('http://localhost:3000/jobs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.job)
        })

        if (response.ok) {
          this.$router.push('/')
        } else {
          throw new Error('Erreur lors de l\'ajout de l\'emploi')
        }
      } catch (error) {
        console.error('Erreur:', error)
        alert('Une erreur est survenue lors de l\'ajout de l\'emploi')
      }
    }
  }
}
</script>

<style scoped>
.add-job {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style> 