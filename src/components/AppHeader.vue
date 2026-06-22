<script setup>
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { languages } from '../data/translations'
import wellnessLogo from '../images/WellnessLogo.svg'
import wellnessLogoLight from '../images/WellnessLogo-Light.svg'

defineProps({
  overlay: { type: Boolean, default: false },
})

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
  <header class="app-header" :class="{ 'app-header--overlay': overlay }">
    <div class="header-inner">
      <router-link to="/" class="brand brand--logo" @click="goHome">
        <img
          :src="overlay ? wellnessLogo : wellnessLogoLight"
          alt="Wellness 4 Fort Wayne"
          class="brand-logo"
          :class="{ 'brand-logo--overlay': overlay }"
        />
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
.brand--logo {
  flex-shrink: 0;
}

.brand-logo {
  display: block;
  width: auto;
  height: 3.25rem;
}

.brand-logo--overlay {
  height: 4.75rem;
}

.icon-btn :deep(svg) {
  color: var(--color-text);
}

.app-header--overlay .icon-btn :deep(svg) {
  color: #ffffff;
}
</style>
