<script setup>
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import { useAppState } from '../composables/useAppState'
import { filters } from '../data/resources'

const router = useRouter()
const { state, translate, toggleFilter } = useAppState()

function continueFlow() {
  const needsLocation = state.filters.includes('closeToMe')
  router.push(needsLocation ? '/support/location' : '/support/results')
}

function skipFilters() {
  state.filters = []
  router.push('/support/location')
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">{{ translate('intake.q2') }}</h2>
    <p class="step-subheading">Select any that apply, or skip to see all options.</p>

    <div class="filter-grid">
      <button
        v-for="filter in filters"
        :key="filter.id"
        class="filter-chip"
        :class="{ 'is-selected': state.filters.includes(filter.id) }"
        @click="toggleFilter(filter.id)"
      >
        {{ translate(`filter.${filter.id}`) }}
      </button>
    </div>

    <div class="btn-row">
      <button class="btn btn--primary btn--block" @click="continueFlow">
        {{ translate('location.continue') }}
      </button>
      <button class="btn btn--ghost btn--block" @click="skipFilters">
        {{ translate('location.skip') }}
      </button>
    </div>
  </div>
</template>
