<template>
  <div class="filter-nav">
    <h3>Filtres</h3>
    <div class="form-group mb-3">
      <label>Années d'expérience minimum</label>
      <input
        type="number"
        class="form-control"
        v-model.number="filters.experience"
        @input="emitFilters"
      >
    </div>
    <div class="form-group mb-3">
      <label>Salaire minimum</label>
      <input
        type="number"
        class="form-control"
        v-model.number="filters.minSalary"
        @input="emitFilters"
      >
    </div>
    <div class="form-group mb-3">
      <label>Salaire maximum</label>
      <input
        type="number"
        class="form-control"
        v-model.number="filters.maxSalary"
        @input="emitFilters"
      >
    </div>
    <button class="btn btn-secondary" @click="resetFilters">
      Réinitialiser les filtres
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterNav',
  data() {
    return {
      filters: {
        experience: null,
        minSalary: null,
        maxSalary: null
      }
    }
  },
  methods: {
    emitFilters() {
      this.$emit('filter-change', this.filters)
    },
    resetFilters() {
      this.filters = {
        experience: null,
        minSalary: null,
        maxSalary: null
      }
      this.emitFilters()
    }
  }
}
</script>

<style scoped>
.filter-nav {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}
</style> 