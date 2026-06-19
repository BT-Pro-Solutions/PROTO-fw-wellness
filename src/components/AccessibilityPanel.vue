<script setup>
import AppIcon from './AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { languages } from '../data/translations'

const { state, translate } = useAppState()

function close() {
  state.showAccessibility = false
}

function setTextSize(size) {
  state.textSize = size
}

function toggleReadAloud() {
  state.readAloud = !state.readAloud
}
</script>

<template>
  <div class="panel-overlay" @click.self="close">
    <div class="panel" role="dialog" aria-modal="true" :aria-label="translate('accessibility')">
      <div class="panel__handle" aria-hidden="true" />
      <div class="panel__header">
        <h2>{{ translate('accessibility') }}</h2>
        <button class="icon-btn" :aria-label="translate('back')" @click="close">
          <AppIcon icon="lucide:x" size="1.25rem" />
        </button>
      </div>

      <div class="panel__section">
        <p class="panel__section-title">{{ translate('textSize') }}</p>
        <div class="size-options">
          <button
            class="size-btn"
            :class="{ 'is-active': state.textSize === 'normal' }"
            @click="setTextSize('normal')"
          >
            A
          </button>
          <button
            class="size-btn"
            :class="{ 'is-active': state.textSize === 'large' }"
            @click="setTextSize('large')"
          >
            A+
          </button>
          <button
            class="size-btn"
            :class="{ 'is-active': state.textSize === 'xlarge' }"
            @click="setTextSize('xlarge')"
          >
            A++
          </button>
        </div>
      </div>

      <div class="panel__section">
        <p class="panel__section-title">{{ translate('readAloud') }}</p>
        <button
          class="toggle-btn"
          :class="{ 'is-on': state.readAloud }"
          @click="toggleReadAloud"
        >
          {{ translate('readAloud') }} — {{ state.readAloud ? 'ON' : 'OFF' }}
        </button>
      </div>

      <div class="panel__section">
        <p class="panel__section-title">{{ translate('language') }}</p>
        <div class="option-grid">
          <button
            v-for="lang in languages"
            :key="lang.code"
            class="option-card"
            :class="{ 'option-card--primary': state.language === lang.code }"
            @click="state.language = lang.code"
          >
            <span class="option-card__title">{{ lang.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
