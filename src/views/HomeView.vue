<script setup>
import { useRouter } from 'vue-router'
import OptionCard from '../components/OptionCard.vue'
import AppIcon from '../components/AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import { sponsors } from '../data/resources'

const router = useRouter()
const { translate, startFlow } = useAppState()

function findSupport(helpingOther = false) {
  startFlow('support', helpingOther)
  router.push('/support/category')
}

function goCrisis() {
  startFlow('crisis')
  router.push('/crisis')
}

function goWellness() {
  startFlow('wellness')
  router.push('/wellness')
}
</script>

<template>
  <div class="step-content fade-up">
    <div class="hero-badge">
      <AppIcon icon="lucide:map-pin" size="0.875rem" />
      Fort Wayne, Indiana
    </div>

    <h1 class="step-heading">{{ translate('welcome.title') }}</h1>
    <p class="step-subheading">{{ translate('welcome.subhead') }}</p>
    <p>{{ translate('welcome.description') }}</p>

    <div class="option-grid option-grid--home">
      <OptionCard
        class="fade-up fade-up-delay-1"
        variant="primary"
        icon="lucide:search"
        :title="translate('welcome.findSupport')"
        @click="findSupport(false)"
      />
      <OptionCard
        class="fade-up fade-up-delay-2"
        icon="lucide:users"
        :title="translate('welcome.helpOther')"
        @click="findSupport(true)"
      />
      <OptionCard
        class="fade-up fade-up-delay-3"
        variant="crisis"
        icon="lucide:alert-triangle"
        :title="translate('welcome.crisis')"
        @click="goCrisis"
      />
      <OptionCard
        class="fade-up fade-up-delay-4"
        variant="accent"
        icon="lucide:leaf"
        :title="translate('welcome.wellness')"
        @click="goWellness"
      />
    </div>

    <div class="chip-row">
      <span class="chip">
        <AppIcon icon="lucide:shield" size="0.875rem" />
        {{ translate('welcome.free') }}
      </span>
      <span class="chip">
        <AppIcon icon="lucide:lock" size="0.875rem" />
        {{ translate('welcome.private') }}
      </span>
    </div>

    <footer class="sponsors">
      <p class="sponsors__label">{{ translate('welcome.sponsoredBy') }}</p>
      <div class="sponsors__list">
        <template v-for="(sponsor, i) in sponsors" :key="sponsor">
          <span>{{ sponsor }}</span>
          <span v-if="i < sponsors.length - 1" class="sponsors__sep">|</span>
        </template>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.hero-badge :deep(svg),
.chip :deep(svg) {
  flex-shrink: 0;
}
</style>
