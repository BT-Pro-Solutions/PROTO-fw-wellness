import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import FiltersView from '../views/FiltersView.vue'
import LocationView from '../views/LocationView.vue'
import ResultsView from '../views/ResultsView.vue'
import ResourceDetailView from '../views/ResourceDetailView.vue'
import CrisisView from '../views/CrisisView.vue'
import WellnessMoodView from '../views/WellnessMoodView.vue'
import WellnessNeedView from '../views/WellnessNeedView.vue'
import WellnessResultView from '../views/WellnessResultView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/support/category', name: 'category', component: CategoryView },
    { path: '/support/filters', name: 'filters', component: FiltersView },
    { path: '/support/location', name: 'location', component: LocationView },
    { path: '/support/results', name: 'results', component: ResultsView },
    { path: '/support/resource/:id', name: 'resource', component: ResourceDetailView },
    { path: '/crisis', name: 'crisis', component: CrisisView },
    { path: '/wellness', name: 'wellness-mood', component: WellnessMoodView },
    { path: '/wellness/need', name: 'wellness-need', component: WellnessNeedView },
    { path: '/wellness/result', name: 'wellness-result', component: WellnessResultView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
