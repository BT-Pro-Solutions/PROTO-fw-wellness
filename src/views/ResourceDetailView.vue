<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import AppIcon from '../components/AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { resources, getDirectionsUrl, getPhoneUrl } from '../data/resources'

const route = useRoute()
const { translate } = useAppState()

const resource = computed(() => resources.find((r) => r.id === route.params.id))

function saveToPhone() {
  if (!resource.value) return
  const text = `${resource.value.name}\n${resource.value.phone}\n${resource.value.address}\n${resource.value.referralCode}`
  if (navigator.share) {
    navigator.share({ title: resource.value.name, text })
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
}
</script>

<template>
  <div v-if="resource" class="step-content fade-up">
    <StepNav />

    <div class="card card--highlight">
      <h2>{{ resource.name }}</h2>
      <div class="tag-row">
        <span v-for="tag in resource.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:users" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.whoFor') }}</div>
          <div class="detail-row__value">{{ resource.whoFor }}</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:heart-handshake" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.helpsWith') }}</div>
          <div class="detail-row__value">{{ resource.helpsWith }}</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:circle-dollar-sign" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.cost') }}</div>
          <div class="detail-row__value">{{ resource.cost }}</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:clock" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.hours') }}</div>
          <div class="detail-row__value">{{ resource.hours }}</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:globe" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.languages') }}</div>
          <div class="detail-row__value">{{ resource.languages.join(', ') }}</div>
        </div>
      </div>
      <div class="detail-row">
        <div class="detail-row__icon"><AppIcon icon="lucide:map-pin" /></div>
        <div>
          <div class="detail-row__label">{{ translate('resource.address') }}</div>
          <div class="detail-row__value">{{ resource.address }}</div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>{{ translate('resource.howToEnroll') }}</h3>
      <p style="margin-top: var(--space-3)">{{ resource.enrollment }}</p>
      <div class="referral-note">
        {{ translate('resource.referral') }} · {{ translate('resource.referralCode') }}:
        <span class="referral-code">{{ resource.referralCode }}</span>
      </div>
    </div>

    <div class="btn-row">
      <a class="btn btn--primary btn--block" :href="getPhoneUrl(resource.phone)">
        <AppIcon icon="lucide:phone" size="1.125rem" />
        {{ translate('resource.call') }} {{ resource.phone }}
      </a>
      <a
        class="btn btn--outline btn--block"
        :href="getDirectionsUrl(resource)"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppIcon icon="lucide:navigation" size="1.125rem" />
        {{ translate('results.directions') }}
      </a>
      <button class="btn btn--secondary btn--block" @click="saveToPhone">
        <AppIcon icon="lucide:bookmark" size="1.125rem" />
        {{ translate('resource.save') }}
      </button>
    </div>
  </div>
</template>
