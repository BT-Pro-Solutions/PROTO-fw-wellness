<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AccessibilityPanel from './components/AccessibilityPanel.vue'
import { useAppState } from './composables/useAppState'

const route = useRoute()
const { state } = useAppState()
const isLanding = computed(() => route.name === 'home')
</script>

<template>
  <div class="app-layout" :class="{ 'app-layout--landing': isLanding }">
    <AppHeader :overlay="isLanding" />
    <div class="app-body">
      <main class="app-main" :class="{ 'app-main--landing': isLanding }">
        <RouterView />
      </main>
      <AppFooter v-if="!isLanding" />
    </div>
    <Transition name="drawer">
      <AccessibilityPanel v-if="state.showAccessibility" />
    </Transition>
  </div>
</template>
