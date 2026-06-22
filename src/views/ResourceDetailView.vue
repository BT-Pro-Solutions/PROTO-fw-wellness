<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import StepNav from '../components/StepNav.vue'
import AppIcon from '../components/AppIcon.vue'
import ResourceLogo from '../components/ResourceLogo.vue'
import { useAppState } from '../composables/useAppState'
import { resources, getDirectionsUrl, getMapEmbedUrl, getPhoneUrl } from '../data/resources'

const route = useRoute()
const { translate } = useAppState()

const resource = computed(() => resources.find((r) => r.id === route.params.id))
</script>

<template>
  <div v-if="resource" class="step-content fade-up">
    <StepNav />

    <div class="card card--highlight">
      <div class="resource-card__header resource-card__header--detail">
        <ResourceLogo :src="resource.logo" :alt="resource.name" />
        <div class="resource-card__header-body">
          <h2>{{ resource.name }}</h2>
          <div class="tag-row">
            <span v-for="tag in resource.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
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

      <div class="resource-map">
        <iframe
          :src="getMapEmbedUrl(resource)"
          :title="`${translate('resource.map')} — ${resource.name}`"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </div>
    </div>

    <div class="card">
      <h3>{{ translate('resource.howToEnroll') }}</h3>
      <p style="margin-top: var(--space-3)">{{ resource.enrollment }}</p>
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
    </div>
  </div>
</template>
