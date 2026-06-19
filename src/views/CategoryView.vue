<script setup>
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import OptionCard from '../components/OptionCard.vue'
import { useAppState } from '../composables/useAppState'
import { categories } from '../data/resources'

const router = useRouter()
const { state, translate } = useAppState()

function selectCategory(id) {
  state.category = id
  router.push('/support/filters')
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav :show-back="false" />

    <h2 class="step-heading">
      {{ state.helpingOther ? translate('intake.q1.other') : translate('intake.q1') }}
    </h2>

    <div class="option-grid option-grid--categories" style="margin-top: var(--space-6)">
      <OptionCard
        v-for="(cat, i) in categories"
        :key="cat.id"
        :class="`fade-up fade-up-delay-${Math.min(i + 1, 4)}`"
        :icon="cat.icon"
        :title="translate(`intake.${cat.id}`)"
        @click="selectCategory(cat.id)"
      />
    </div>
  </div>
</template>
