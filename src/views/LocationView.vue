<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import AppIcon from '../components/AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { requestGeolocation, isNearFortWayne } from '../composables/useGeolocation'

const router = useRouter()
const { state, translate } = useAppState()

const phase = ref('detecting')
const manualArea = ref('')

onMounted(async () => {
  const result = await requestGeolocation()

  if (result.success) {
    state.userLocation = { lat: result.lat, lng: result.lng }
    state.locationLabel = isNearFortWayne(result.lat, result.lng)
      ? translate('location.found')
      : `${result.lat.toFixed(2)}, ${result.lng.toFixed(2)}`
    phase.value = 'found'
    setTimeout(() => router.push('/support/results'), 1200)
  } else {
    phase.value = 'manual'
  }
})

function submitManual() {
  if (manualArea.value.trim()) {
    state.locationLabel = manualArea.value.trim()
  }
  router.push('/support/results')
}

function skip() {
  state.userLocation = null
  state.locationLabel = ''
  router.push('/support/results')
}
</script>

<template>
  <div class="step-content fade-up">
    <StepNav />

    <template v-if="phase === 'detecting'">
      <div class="location-status">
        <div class="location-spinner" aria-hidden="true" />
        <h2>{{ translate('location.detecting') }}</h2>
        <p>We'll use this to show nearby resources. You can enter your area manually if needed.</p>
      </div>
    </template>

    <template v-else-if="phase === 'found'">
      <div class="location-status">
        <div class="location-success">
          <AppIcon icon="lucide:check-circle" size="1.5rem" />
        </div>
        <h2>{{ state.locationLabel }}</h2>
        <p>Sorting resources by distance…</p>
      </div>
    </template>

    <template v-else>
      <h2 class="step-heading">{{ translate('location.title') }}</h2>
      <p class="step-subheading">{{ translate('location.manual') }}</p>

      <input
        v-model="manualArea"
        class="text-input"
        type="text"
        :placeholder="translate('location.placeholder')"
        autocomplete="postal-code"
      />

      <div class="btn-row">
        <button class="btn btn--primary btn--block" @click="submitManual">
          {{ translate('location.continue') }}
        </button>
        <button class="btn btn--ghost btn--block" @click="skip">
          {{ translate('location.skip') }}
        </button>
      </div>
    </template>
  </div>
</template>

<style scoped>
.location-success {
  color: var(--color-success);
}
</style>
