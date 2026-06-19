<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import { useAppState } from '../composables/useAppState'
import { matchResources, getDirectionsUrl } from '../data/resources'

const router = useRouter()
const { state, translate } = useAppState()

const results = computed(() =>
  matchResources(state.category, state.filters, state.userLocation, state.language)
)

function viewResource(id) {
  router.push(`/support/resource/${id}`)
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">
      {{ state.helpingOther ? translate('results.title.other') : translate('results.title') }}
    </h2>
    <p class="step-subheading">
      {{ translate('results.count', { n: results.length }) }}
    </p>

    <div class="results-grid">
      <div v-for="resource in results" :key="resource.id" class="card">
        <p
          class="match-badge"
          :class="{ 'match-badge--partial': resource.matchStrength === 'partial' }"
        >
          {{ resource.match }}
        </p>
        <h3>{{ resource.name }}</h3>
        <div class="tag-row">
          <span class="tag">{{ resource.hoursShort }}</span>
          <span v-for="tag in resource.tags.slice(0, 2)" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <p style="margin-bottom: var(--space-4)">{{ resource.enrollmentShort }}</p>

        <div class="referral-note">
          {{ translate('resource.referral') }} ·
          <span class="referral-code">{{ resource.referralCode }}</span>
        </div>

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
