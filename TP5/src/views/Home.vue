<template>
  <div class="home">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1>Liste des emplois</h1>
      <router-link to="/add" class="btn btn-primary">
        Ajouter un emploi
      </router-link>
    </div>

    <div class="row">
      <div class="col-md-3">
        <FilterNav @filter-change="applyFilters" />
      </div>
      <div class="col-md-9">
        <div class="row">
          <div v-for="job in filteredJobs" :key="job.id" class="col-md-6 mb-4">
            <JobDetail :job="job" @delete="deleteJob" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '@/components/FilterNav.vue'
import JobDetail from '@/components/JobDetail.vue'

export default {
  name: 'HomePage',
  components: {
    FilterNav,
    JobDetail
  },
  data() {
    return {
      jobs: [],
      filters: {
        experience: null,
        minSalary: null,
        maxSalary: null
      }
    }
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(job => {
        if (this.filters.experience && job.experience < this.filters.experience) {
          return false
        }
        if (this.filters.minSalary && job.salary < this.filters.minSalary) {
          return false
        }
        if (this.filters.maxSalary && job.salary > this.filters.maxSalary) {
          return false
        }
        return true
      })
    }
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await fetch('http://localhost:3000/jobs')
        this.jobs = await response.json()
      } catch (error) {
        console.error('Erreur lors du chargement des emplois:', error)
      }
    },
    async deleteJob(id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
        try {
          await fetch(`http://localhost:3000/jobs/${id}`, {
            method: 'DELETE'
          })
          this.jobs = this.jobs.filter(job => job.id !== id)
        } catch (error) {
          console.error('Erreur lors de la suppression:', error)
        }
      }
    },
    applyFilters(newFilters) {
      this.filters = { ...newFilters }
    }
  },
  created() {
    this.fetchJobs()
  }
}
</script> 