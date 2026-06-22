<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: '' },
})
</script>

<template>
  <div class="resource-logo">
    <img v-if="src" :src="src" :alt="alt" class="resource-logo__image" />
    <div v-else class="resource-logo__placeholder" aria-hidden="true">
      <AppIcon icon="lucide:building-2" size="1.5rem" />
    </div>
  </div>
</template>
