import { reactive, computed, watch } from 'vue'
import { t } from '../data/translations'

const state = reactive({
  language: localStorage.getItem('fw-language') || 'en',
  textSize: localStorage.getItem('fw-text-size') || 'normal',
  readAloud: false,
  showAccessibility: false,
  flow: null,
  helpingOther: false,
  category: null,
  filters: [],
  userLocation: null,
  locationLabel: '',
  wellnessMood: null,
  wellnessNeed: null,
})

watch(
  () => state.language,
  (val) => localStorage.setItem('fw-language', val)
)

watch(
  () => state.textSize,
  (val) => {
    localStorage.setItem('fw-text-size', val)
    document.documentElement.dataset.textSize = val === 'normal' ? '' : val
  },
  { immediate: true }
)

export function useAppState() {
  const translate = (key, vars) => t(key, state.language, vars)

  function resetFlow() {
    state.flow = null
    state.helpingOther = false
    state.category = null
    state.filters = []
    state.userLocation = null
    state.locationLabel = ''
    state.wellnessMood = null
    state.wellnessNeed = null
  }

  function startFlow(flow, helpingOther = false) {
    resetFlow()
    state.flow = flow
    state.helpingOther = helpingOther
  }

  function toggleFilter(id) {
    const idx = state.filters.indexOf(id)
    if (idx >= 0) {
      state.filters.splice(idx, 1)
    } else {
      state.filters.push(id)
    }
  }

  const textSizeLabel = computed(() => {
    const map = { normal: 'A', large: 'A+', xlarge: 'A++' }
    return map[state.textSize] || 'A'
  })

  return {
    state,
    translate,
    resetFlow,
    startFlow,
    toggleFilter,
    textSizeLabel,
  }
}
