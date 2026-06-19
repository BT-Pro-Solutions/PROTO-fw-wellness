export const categories = [
  { id: 'stress', icon: 'lucide:brain' },
  { id: 'depression', icon: 'lucide:cloud' },
  { id: 'housing', icon: 'lucide:home' },
  { id: 'substance', icon: 'lucide:pill' },
  { id: 'crisisHelp', icon: 'lucide:alert-triangle' },
  { id: 'generalWellness', icon: 'lucide:leaf' },
]

export const filters = [
  { id: 'openNow', icon: 'lucide:clock' },
  { id: 'closeToMe', icon: 'lucide:map-pin', triggersLocation: true },
  { id: 'freeLowCost', icon: 'lucide:circle-dollar-sign' },
  { id: 'inMyLanguage', icon: 'lucide:languages' },
  { id: 'callOrText', icon: 'lucide:phone' },
]

export const wellnessMoods = [
  { id: 'prettyGood', icon: 'lucide:sun' },
  { id: 'justOkay', icon: 'lucide:cloud-sun' },
  { id: 'struggling', icon: 'lucide:cloud-rain' },
  { id: 'notSure', icon: 'lucide:help-circle' },
]

export const wellnessNeeds = [
  { id: 'talkSomeone', icon: 'lucide:message-circle' },
  { id: 'selfCare', icon: 'lucide:leaf' },
  { id: 'resources', icon: 'lucide:map' },
  { id: 'browsing', icon: 'lucide:compass' },
]

export const resources = [
  {
    id: 'park-center',
    name: 'Park Center',
    phone: '(260) 481-2700',
    address: '909 E State Blvd, Fort Wayne, IN 46805',
    lat: 41.0842,
    lng: -85.1089,
    categories: ['stress', 'depression', 'substance', 'crisisHelp', 'generalWellness'],
    tags: ['free', 'openNow', 'nearDowntown'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free — Sliding scale available',
    hours: 'Monday–Friday, 8:00 AM – 5:00 PM',
    hoursShort: 'Mon–Fri 8am–5pm',
    whoFor: 'Adults and families in Allen County',
    helpsWith: 'Mental health counseling, crisis support, substance use programs',
    enrollment: 'Walk-in welcome Monday–Friday. No referral or appointment needed. Intake assessment done on your first visit.',
    enrollmentShort: 'Walk-in welcome. No referral needed.',
    matchDefault: 'Matches your need for stress & anxiety support',
    referralCode: 'FWWK-2026-PC',
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'rescue-mission',
    name: 'The Rescue Mission',
    phone: '(260) 426-7357',
    address: '301 W Superior St, Fort Wayne, IN 46802',
    lat: 41.0798,
    lng: -85.1421,
    categories: ['housing', 'depression', 'substance', 'crisisHelp'],
    tags: ['free', 'walkIn', 'spanish'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Open 24 hours, 7 days a week',
    hoursShort: 'Open 24/7',
    whoFor: 'Individuals and families experiencing homelessness or crisis',
    helpsWith: 'Shelter, meals, basic needs, counseling, and recovery support',
    enrollment: 'Walk-in anytime. Intake on arrival.',
    enrollmentShort: 'Walk-in anytime. Intake on arrival.',
    matchDefault: 'Offers basic needs and counseling support',
    referralCode: 'FWWK-2026-RM',
    matchStrength: 'strong',
    open247: true,
  },
  {
    id: 'bowen-center',
    name: 'Bowen Center — Fort Wayne',
    phone: '(260) 471-3500',
    address: '850 Broadway Ave, Fort Wayne, IN 46802',
    lat: 41.0734,
    lng: -85.1398,
    categories: ['stress', 'depression', 'substance', 'generalWellness'],
    tags: ['lowCost', 'telehealth'],
    languages: ['en'],
    hasPhoneSupport: true,
    cost: 'Sliding scale based on income',
    hours: 'Monday–Thursday, 8:00 AM – 7:00 PM',
    hoursShort: 'Mon–Thu 8am–7pm',
    whoFor: 'All ages in northeast Indiana',
    helpsWith: 'Outpatient mental health, addiction treatment, and psychiatric services',
    enrollment: 'Call (260) 471-3500 to schedule. Consultation required.',
    enrollmentShort: 'Call (260) 471-3500 to schedule. Consultation required.',
    matchDefault: 'Sliding-scale mental health services',
    referralCode: 'FWWK-2026-BC',
    matchStrength: 'partial',
    open247: false,
  },
]

export const categoryMatches = {
  stress: 'Matches your need for stress & anxiety support',
  depression: 'Offers support for depression and emotional wellness',
  housing: 'Offers basic needs and housing support',
  substance: 'Provides substance use recovery support',
  crisisHelp: 'Available for crisis and urgent support',
  generalWellness: 'Supports general wellness and preventive care',
}

export const sponsors = ['City of Fort Wayne', 'Allen County', 'Parkview Health']

export function haversineDistance(lat1, lng1, lat2, lng2) {
  const R = 3959
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export function matchResources(category, selectedFilters, userLocation, language) {
  let results = resources.filter((r) => r.categories.includes(category))

  if (selectedFilters.includes('freeLowCost')) {
    results = results.filter((r) => r.tags.includes('free') || r.tags.includes('lowCost'))
  }

  if (selectedFilters.includes('openNow')) {
    results = results.filter((r) => r.open247 || r.tags.includes('openNow'))
  }

  if (selectedFilters.includes('inMyLanguage')) {
    results = results.filter((r) => r.languages.includes(language))
  }

  if (selectedFilters.includes('callOrText')) {
    results = results.filter((r) => r.hasPhoneSupport)
  }

  if (userLocation?.lat && userLocation?.lng) {
    results = [...results].sort(
      (a, b) =>
        haversineDistance(userLocation.lat, userLocation.lng, a.lat, a.lng) -
        haversineDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
    )
  }

  return results.map((r) => ({
    ...r,
    match: categoryMatches[category] || r.matchDefault,
  }))
}

export function getDirectionsUrl(resource) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resource.address)}`
}

export function getPhoneUrl(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
