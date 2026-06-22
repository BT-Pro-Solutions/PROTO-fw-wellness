<script setup>
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import { useAppState } from '../composables/useAppState'
import riverVideo from '../video/river.mp4'
import wellnessLogoLarge from '../images/WellnessLogoLarge.svg'
import fortWayneLogo from '../images/Fort Wayne.svg'
import allenCountyLogo from '../images/Allen County.svg'
import parkviewHealthLogo from '../images/Parkview Health.svg'

const router = useRouter()
const { translate, startFlow } = useAppState()

const partners = [
  { src: fortWayneLogo, alt: 'City of Fort Wayne, Indiana', className: 'landing-partners__logo--city' },
  { src: allenCountyLogo, alt: 'Allen County, Indiana', className: 'landing-partners__logo--county' },
  { src: parkviewHealthLogo, alt: 'Parkview Health', className: 'landing-partners__logo--parkview' },
]

function goWellness() {
  startFlow('wellness')
  router.push('/wellness')
}

const actions = [
  {
    id: 'support',
    icon: 'lucide:search',
    titleKey: 'welcome.findSupport',
    variant: 'support',
    run: () => {
      startFlow('support')
      router.push('/support/category')
    },
  },
  {
    id: 'crisis',
    icon: 'lucide:alert-triangle',
    titleKey: 'welcome.crisis',
    variant: 'crisis',
    run: () => {
      startFlow('crisis')
      router.push('/crisis')
    },
  },
]
</script>

<template>
  <div class="landing">
    <section class="landing-hero" aria-labelledby="landing-description">
      <video
        class="landing-hero__video"
        autoplay
        muted
        loop
        playsinline
        aria-hidden="true"
      >
        <source :src="riverVideo" type="video/mp4" />
      </video>

      <div class="landing-hero__overlay-burn" aria-hidden="true" />
      <div class="landing-hero__overlay-gradient" aria-hidden="true" />

      <div class="landing-hero__content">
        <div class="landing-hero__main">
          <img
            :src="wellnessLogoLarge"
            alt="Wellness 4 Fort Wayne"
            class="landing-hero__logo fade-up fade-up-delay-1"
          />

          <p id="landing-description" class="landing-hero__intro fade-up fade-up-delay-2">
            {{ translate('welcome.description') }}
          </p>

          <div class="landing-hero__actions fade-up fade-up-delay-3">
            <button
              v-for="action in actions"
              :key="action.id"
              type="button"
              class="landing-cta"
              :class="`landing-cta--${action.variant}`"
              @click="action.run"
            >
              <span class="landing-cta__icon">
                <AppIcon :icon="action.icon" size="1.25rem" />
              </span>
              <span class="landing-cta__label">{{ translate(action.titleKey) }}</span>
            </button>
          </div>

          <button type="button" class="landing-wellness-link fade-up fade-up-delay-3" @click="goWellness">
            {{ translate('welcome.wellness') }}
          </button>
        </div>

        <div class="landing-partners fade-up fade-up-delay-4">
          <p class="landing-partners__title">{{ translate('welcome.broughtBy') }}</p>
          <div class="landing-partners__logos">
            <img
              v-for="partner in partners"
              :key="partner.alt"
              :src="partner.src"
              :alt="partner.alt"
              class="landing-partners__logo"
              :class="partner.className"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
