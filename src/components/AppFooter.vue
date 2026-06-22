<script setup>
import { useAppState } from '../composables/useAppState'
import fortWayneLogo from '../images/Fort Wayne - gray.svg'
import allenCountyLogo from '../images/Allen County - gray.svg'
import parkviewHealthLogo from '../images/Parkview Health - gray.svg'

const { translate } = useAppState()
const year = new Date().getFullYear()

const partners = [
  { src: fortWayneLogo, alt: 'City of Fort Wayne, Indiana', className: 'app-footer__logo--city' },
  { src: allenCountyLogo, alt: 'Allen County, Indiana', className: 'app-footer__logo--county' },
  { src: parkviewHealthLogo, alt: 'Parkview Health', className: 'app-footer__logo--parkview' },
]
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__inner">
      <div class="app-footer__partners">
        <p class="app-footer__partners-title">{{ translate('welcome.broughtBy') }}</p>
        <div class="app-footer__logos">
          <img
            v-for="partner in partners"
            :key="partner.alt"
            :src="partner.src"
            :alt="partner.alt"
            class="app-footer__logo"
            :class="partner.className"
          />
        </div>
      </div>

      <div class="app-footer__legal">
        <p class="app-footer__copyright">
          {{ translate('footer.copyright', { year }) }}
        </p>
        <nav class="app-footer__links" :aria-label="translate('footer.legalNav')">
          <router-link to="/privacy">{{ translate('footer.privacy') }}</router-link>
          <router-link to="/terms">{{ translate('footer.terms') }}</router-link>
          <router-link to="/disclaimer">{{ translate('footer.disclaimer') }}</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>
