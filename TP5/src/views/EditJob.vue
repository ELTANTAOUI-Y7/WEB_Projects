<template>
  <div class="edit-job">
    <h2>Modifier l'emploi</h2>
    <form v-if="job" @submit.prevent="submitJob" class="mt-4">
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
          Enregistrer les modifications
        </button>
      </div>
    </form>
    <div v-else class="alert alert-danger">
      Emploi non trouvé
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditJob',
  data() {
    return {
      job: null
    }
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${this.$route.params.id}`)
      if (response.ok) {
        this.job = await response.json()
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'emploi:', error)
    }
  },
  methods: {
    async submitJob() {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${this.$route.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.job)
        })

        if (response.ok) {
          this.$router.push('/')
        } else {
          throw new Error('Erreur lors de la modification de l\'emploi')
        }
      } catch (error) {
        console.error('Erreur:', error)
        alert('Une erreur est survenue lors de la modification de l\'emploi')
      }
    }
  }
}
</script>

<style scoped>
.edit-job {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style> 