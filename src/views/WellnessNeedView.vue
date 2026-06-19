<script setup>
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import OptionCard from '../components/OptionCard.vue'
import { useAppState } from '../composables/useAppState'
import { wellnessNeeds } from '../data/resources'

const router = useRouter()
const { state, translate } = useAppState()

function selectNeed(id) {
  state.wellnessNeed = id
  router.push('/wellness/result')
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">{{ translate('wellness.q2') }}</h2>

    <div class="option-grid" style="margin-top: var(--space-6)">
      <OptionCard
        v-for="need in wellnessNeeds"
        :key="need.id"
        :icon="need.icon"
        :title="translate(`wellness.${need.id}`)"
        @click="selectNeed(need.id)"
      />
    </div>
  </div>
</template>
