<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AccessibilityPanel from './components/AccessibilityPanel.vue'
import { useAppState } from './composables/useAppState'

const { state } = useAppState()
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <div class="app-body">
      <main class="app-main">
        <RouterView />
      </main>
    </div>
    <Transition name="drawer">
      <AccessibilityPanel v-if="state.showAccessibility" />
    </Transition>
  </div>
</template>
