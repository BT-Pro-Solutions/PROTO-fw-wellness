<script setup>
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { languages } from '../data/translations'

const router = useRouter()
const { state, translate } = useAppState()

function setLanguage(code) {
  state.language = code
}

function goHome() {
  router.push('/')
}
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <router-link to="/" class="brand" @click="goHome">
        <div class="brand-mark" aria-hidden="true">
          <AppIcon icon="lucide:map-pin" size="1.25rem" />
        </div>
        <div class="brand-text">
          <span class="brand-city">{{ translate('brand.city') }}</span>
          <span class="brand-name">{{ translate('brand.product') }}</span>
        </div>
      </router-link>

      <div class="header-actions">
        <div class="lang-toggle" role="group" :aria-label="translate('language')">
          <button
            v-for="lang in languages"
            :key="lang.code"
            class="lang-btn"
            :class="{ 'is-active': state.language === lang.code }"
            :aria-pressed="state.language === lang.code"
            @click="setLanguage(lang.code)"
          >
            {{ lang.label }}
          </button>
        </div>
        <button
          class="icon-btn"
          :aria-label="translate('accessibility')"
          @click="state.showAccessibility = true"
        >
          <AppIcon icon="lucide:accessibility" size="1.25rem" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.brand-mark :deep(svg) {
  color: var(--color-teal-300);
}

.icon-btn :deep(svg) {
  color: var(--color-text);
}
</style>
