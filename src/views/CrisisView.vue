<script setup>
import StepNav from '../components/StepNav.vue'
import { useAppState } from '../composables/useAppState'

const { translate } = useAppState()
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">{{ translate('crisis.title') }}</h2>

    <div class="crisis-note">
      If you or someone else is in immediate danger, call 911 now.
    </div>

    <div class="btn-row">
      <a class="btn btn--crisis btn--block" href="tel:911">
        {{ translate('crisis.911') }}
      </a>
      <a class="btn btn--primary btn--block" href="tel:988">
        {{ translate('crisis.988') }}
      </a>
      <a class="btn btn--outline btn--block" href="tel:2604812700">
        {{ translate('crisis.local') }}
      </a>
    </div>

    <p style="margin-top: var(--space-6); text-align: center">
      These lines are free, confidential, and available 24/7.
    </p>
  </div>
</template>
