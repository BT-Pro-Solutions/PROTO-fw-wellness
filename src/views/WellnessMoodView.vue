<script setup>
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import OptionCard from '../components/OptionCard.vue'
import { useAppState } from '../composables/useAppState'
import { wellnessMoods } from '../data/resources'

const router = useRouter()
const { state, translate } = useAppState()

function selectMood(id) {
  state.wellnessMood = id
  router.push('/wellness/need')
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">{{ translate('wellness.q1') }}</h2>

    <div class="option-grid" style="margin-top: var(--space-6)">
      <OptionCard
        v-for="mood in wellnessMoods"
        :key="mood.id"
        :icon="mood.icon"
        :title="translate(`wellness.${mood.id}`)"
        @click="selectMood(mood.id)"
      />
    </div>
  </div>
</template>
