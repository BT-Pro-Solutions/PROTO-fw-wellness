<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppState } from '../composables/useAppState'

const route = useRoute()
const { translate } = useAppState()

const page = computed(() => route.meta.legalPage || 'privacy')
</script>

<template>
  <div class="step-content fade-up legal-page">
    <h1 class="legal-page__title">{{ translate(`legal.${page}.title`) }}</h1>
    <p class="legal-page__updated">{{ translate('legal.updated') }}</p>
    <div class="legal-page__body">
      <p>{{ translate(`legal.${page}.p1`) }}</p>
      <p>{{ translate(`legal.${page}.p2`) }}</p>
    </div>
    <router-link to="/" class="btn btn--outline">{{ translate('legal.backHome') }}</router-link>
  </div>
</template>
