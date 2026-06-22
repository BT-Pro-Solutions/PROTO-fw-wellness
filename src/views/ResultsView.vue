<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import AppIcon from '../components/AppIcon.vue'
import ResourceLogo from '../components/ResourceLogo.vue'
import { useAppState } from '../composables/useAppState'
import { matchResources, getDirectionsUrl } from '../data/resources'

const router = useRouter()
const { state, translate, toggleFilter } = useAppState()

const results = computed(() =>
  matchResources(state.category, state.filters, state.userLocation, state.language)
)

const hasResults = computed(() => results.value.length > 0)
const hasActiveFilters = computed(() => state.filters.length > 0)

function viewResource(id) {
  router.push(`/support/resource/${id}`)
}

function removeFilter(id) {
  if (state.filters.includes(id)) {
    toggleFilter(id)
  }
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav back-to="/support/filters" />

    <h2 class="step-heading">{{ translate('results.title') }}</h2>
    <p v-if="hasResults" class="step-subheading">
      {{ translate('results.count', { n: results.length }) }}
    </p>

    <div v-if="!hasResults" class="results-empty">
      <h3 class="results-empty__title">{{ translate('results.empty.title') }}</h3>
      <p class="results-empty__message">
        {{
          hasActiveFilters
            ? translate('results.empty.message')
            : translate('results.empty.noFilters')
        }}
      </p>

      <div v-if="hasActiveFilters" class="results-empty__filters">
        <p class="results-empty__filters-label">{{ translate('results.empty.activeFilters') }}</p>
        <div class="active-filters">
          <button
            v-for="filterId in state.filters"
            :key="filterId"
            type="button"
            class="active-filter-chip"
            :aria-label="`${translate('results.empty.removeFilter')}: ${translate(`filter.${filterId}`)}`"
            @click="removeFilter(filterId)"
          >
            <span>{{ translate(`filter.${filterId}`) }}</span>
            <AppIcon icon="lucide:x" size="0.875rem" />
          </button>
        </div>
      </div>
    </div>

    <div v-else class="results-grid">
      <div v-for="resource in results" :key="resource.id" class="card resource-card">
        <div class="resource-card__header">
          <ResourceLogo :src="resource.logo" :alt="resource.name" />
          <div class="resource-card__header-body">
            <h3>{{ resource.name }}</h3>
          </div>
        </div>
        <p
          class="match-badge"
          :class="{ 'match-badge--partial': resource.matchStrength === 'partial' }"
        >
          {{ resource.match }}
        </p>

        <div class="tag-row">
          <span class="tag">{{ resource.hoursShort }}</span>
          <span v-for="tag in resource.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <p style="margin-bottom: var(--space-4)">{{ resource.enrollmentShort }}</p>

        <div class="btn-row">
          <button class="btn btn--primary btn--block" @click="viewResource(resource.id)">
            {{ translate('results.viewDetails') }}
          </button>
          <a
            class="btn btn--outline btn--block"
            :href="getDirectionsUrl(resource)"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ translate('results.directions') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
