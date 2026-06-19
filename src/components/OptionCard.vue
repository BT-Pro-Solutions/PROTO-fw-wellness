<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  variant: {
    type: String,
    default: 'default',
  },
  icon: { type: String, default: '' },
})
</script>

<template>
  <button
    class="option-card"
    :class="{
      'option-card--primary': variant === 'primary',
      'option-card--crisis': variant === 'crisis',
      'option-card--accent': variant === 'accent',
    }"
  >
    <div v-if="icon" class="option-card__icon">
      <AppIcon :icon="icon" size="1.35rem" />
    </div>
    <div class="option-card__body">
      <div class="option-card__title">{{ title }}</div>
      <p v-if="description" class="option-card__desc">{{ description }}</p>
    </div>
    <div class="option-card__arrow" aria-hidden="true">
      <AppIcon icon="lucide:chevron-right" size="1.25rem" />
    </div>
  </button>
</template>
