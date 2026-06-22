<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import { useAppState } from '../composables/useAppState'

const router = useRouter()
const { state, translate, startFlow } = useAppState()

const result = computed(() => {
  const need = state.wellnessNeed || 'browsing'
  return {
    title: translate(`wellness.result.${need}.title`),
    desc: translate(`wellness.result.${need}.desc`),
  }
})

function findResources() {
  startFlow('support')
  state.category = 'generalWellness'
  router.push('/support/location')
}

function callParkCenter() {
  window.location.href = 'tel:2604812700'
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <h2 class="step-heading">{{ translate('wellness.result.title') }}</h2>
    <p class="step-subheading">{{ translate('wellness.result.message') }}</p>

    <div class="card card--highlight">
      <h3>{{ result.title }}</h3>
      <p v-if="result.desc" style="margin-top: var(--space-3)">{{ result.desc }}</p>
    </div>

    <div class="btn-row">
      <button
        v-if="state.wellnessNeed === 'talkSomeone'"
        class="btn btn--primary btn--block"
        @click="callParkCenter"
      >
        Call Park Center — (260) 481-2700
      </button>
      <button
        v-if="state.wellnessNeed === 'resources'"
        class="btn btn--primary btn--block"
        @click="findResources"
      >
        {{ translate('wellness.resources') }}
      </button>
      <button class="btn btn--ghost btn--block" @click="router.push('/')">
        {{ translate('startOver') }}
      </button>
    </div>
  </div>
</template>
