<script setup>
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { useAppState } from '../composables/useAppState'

defineProps({
  showBack: { type: Boolean, default: true },
  showStartOver: { type: Boolean, default: true },
})

const router = useRouter()
const { translate, resetFlow } = useAppState()

function goBack() {
  router.back()
}

function startOver() {
  resetFlow()
  router.push('/')
}
</script>

<template>
  <nav class="step-nav">
    <button v-if="showBack" class="nav-btn" @click="goBack">
      <AppIcon icon="lucide:arrow-left" size="1rem" />
      {{ translate('back') }}
    </button>
    <span v-else />
    <button v-if="showStartOver" class="nav-btn" @click="startOver">
      {{ translate('startOver') }}
    </button>
  </nav>
</template>

<style scoped>
.nav-btn :deep(svg) {
  flex-shrink: 0;
}
</style>
