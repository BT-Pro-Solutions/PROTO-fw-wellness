<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: { type: String, required: true },
  size: { type: [String, Number], default: '1.25em' },
})
</script>

<template>
  <Icon :icon="icon" :width="size" :height="size" aria-hidden="true" />
</template>
