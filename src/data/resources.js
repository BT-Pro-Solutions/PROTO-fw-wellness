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
    logo: null,
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
    logo: null,
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
    logo: null,
    matchStrength: 'partial',
    open247: false,
  },
  {
    id: 'cedar-creek-counseling',
    name: 'Cedar Creek Counseling',
    phone: '(260) 555-0142',
    address: '6410 W Jefferson Blvd, Fort Wayne, IN 46804',
    lat: 41.0583,
    lng: -85.2156,
    categories: ['stress', 'depression', 'generalWellness'],
    tags: ['lowCost', 'telehealth'],
    languages: ['en'],
    hasPhoneSupport: true,
    cost: 'Sliding scale — most sessions $25–$60',
    hours: 'Tuesday–Saturday, 9:00 AM – 7:00 PM',
    hoursShort: 'Tue–Sat 9am–7pm',
    whoFor: 'Teens and adults seeking talk therapy',
    helpsWith: 'Anxiety, depression, grief, and life transitions',
    enrollment: 'Call or book online for a free 15-minute phone consultation.',
    enrollmentShort: 'Free phone consultation, then schedule first session.',
    matchDefault: 'Counseling for stress, anxiety, and mood support',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'fw-hope-center',
    name: 'Fort Wayne Hope Center',
    phone: '(260) 555-0188',
    address: '1220 Broadway Ave, Fort Wayne, IN 46802',
    lat: 41.0712,
    lng: -85.1345,
    categories: ['depression', 'crisisHelp', 'generalWellness'],
    tags: ['free', 'walkIn', 'openNow'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Monday–Saturday, 10:00 AM – 8:00 PM',
    hoursShort: 'Mon–Sat 10am–8pm',
    whoFor: 'Anyone needing same-day emotional support',
    helpsWith: 'Peer support, crisis de-escalation, and warm handoffs to care',
    enrollment: 'Walk in during open hours — no appointment needed.',
    enrollmentShort: 'Walk in anytime during open hours.',
    matchDefault: 'Same-day emotional and crisis support',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'brightpoint',
    name: 'Brightpoint — Fort Wayne',
    phone: '(260) 555-0201',
    address: '227 E Washington Blvd, Fort Wayne, IN 46802',
    lat: 41.0765,
    lng: -85.1362,
    categories: ['housing', 'generalWellness'],
    tags: ['free', 'spanish'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free eligibility-based assistance',
    hours: 'Monday–Friday, 8:30 AM – 5:00 PM',
    hoursShort: 'Mon–Fri 8:30am–5pm',
    whoFor: 'Families and individuals needing housing or utility help',
    helpsWith: 'Rental assistance, utility aid, and basic needs navigation',
    enrollment: 'Call or visit to complete a brief intake with a navigator.',
    enrollmentShort: 'Call or visit for intake with a navigator.',
    matchDefault: 'Housing and basic needs navigation',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'turning-point',
    name: 'Turning Point Recovery Services',
    phone: '(260) 555-0234',
    address: '4920 Coldwater Rd, Fort Wayne, IN 46825',
    lat: 41.1289,
    lng: -85.1378,
    categories: ['substance', 'crisisHelp'],
    tags: ['free', 'lowCost', 'walkIn'],
    languages: ['en'],
    hasPhoneSupport: true,
    cost: 'Free intake — treatment costs vary by program',
    hours: 'Monday–Friday, 7:00 AM – 9:00 PM; Saturday 9:00 AM – 3:00 PM',
    hoursShort: 'Mon–Fri 7am–9pm',
    whoFor: 'Adults seeking recovery from alcohol or drug use',
    helpsWith: 'Detox referrals, outpatient groups, and peer recovery coaching',
    enrollment: 'Walk-in assessments available weekdays. Call for weekend options.',
    enrollmentShort: 'Walk-in assessments on weekdays.',
    matchDefault: 'Substance use recovery and peer support',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'salvation-army-fw',
    name: 'Salvation Army — Fort Wayne',
    phone: '(260) 555-0267',
    address: '2901 N Clinton St, Fort Wayne, IN 46805',
    lat: 41.1098,
    lng: -85.1276,
    categories: ['housing', 'substance', 'crisisHelp'],
    tags: ['free', 'walkIn'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Daily, 8:00 AM – 6:00 PM',
    hoursShort: 'Daily 8am–6pm',
    whoFor: 'Individuals and families in urgent need',
    helpsWith: 'Emergency shelter beds, meals, clothing, and recovery programs',
    enrollment: 'Check in at the front desk. ID helpful but not always required.',
    enrollmentShort: 'Check in at front desk. ID helpful.',
    matchDefault: 'Emergency shelter and basic needs',
    logo: null,
    matchStrength: 'partial',
    open247: false,
  },
  {
    id: 'nami-fw',
    name: 'NAMI Fort Wayne',
    phone: '(260) 555-0299',
    address: '602 E Wayne St, Fort Wayne, IN 46802',
    lat: 41.0741,
    lng: -85.1312,
    categories: ['stress', 'depression', 'generalWellness'],
    tags: ['free'],
    languages: ['en'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Support groups: Tuesday & Thursday evenings; office Mon–Fri 9am–4pm',
    hoursShort: 'Groups Tue/Thu evenings',
    whoFor: 'People living with mental illness and their loved ones',
    helpsWith: 'Peer-led support groups, education, and family navigation',
    enrollment: 'Drop in to a support group or call the helpline to get started.',
    enrollmentShort: 'Drop in to a group or call the helpline.',
    matchDefault: 'Peer support for mental health challenges',
    logo: null,
    matchStrength: 'partial',
    open247: false,
  },
  {
    id: 'heartland-family',
    name: 'Heartland Family Services',
    phone: '(260) 555-0315',
    address: '8109 Jefferson Blvd, Fort Wayne, IN 46804',
    lat: 41.0612,
    lng: -85.2089,
    categories: ['stress', 'depression', 'generalWellness'],
    tags: ['lowCost', 'telehealth'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Sliding scale — accepts Medicaid',
    hours: 'Monday–Friday, 8:00 AM – 6:00 PM',
    hoursShort: 'Mon–Fri 8am–6pm',
    whoFor: 'Children, teens, and families',
    helpsWith: 'Family therapy, school-based counseling, and parenting support',
    enrollment: 'Call to schedule an intake appointment for you or your child.',
    enrollmentShort: 'Call to schedule a family intake.',
    matchDefault: 'Family and youth counseling services',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'pastoral-counseling',
    name: 'Pastoral Counseling Center',
    phone: '(260) 555-0348',
    address: '2306 Lake Ave, Fort Wayne, IN 46805',
    lat: 41.0987,
    lng: -85.1154,
    categories: ['stress', 'depression', 'generalWellness'],
    tags: ['lowCost'],
    languages: ['en'],
    hasPhoneSupport: true,
    cost: 'Sliding scale from $20 per session',
    hours: 'Monday–Thursday, 9:00 AM – 8:00 PM; Friday 9:00 AM – 2:00 PM',
    hoursShort: 'Mon–Thu 9am–8pm',
    whoFor: 'Anyone seeking faith-informed or secular counseling',
    helpsWith: 'Individual and couples counseling, grief, and spiritual care',
    enrollment: 'Complete a short form online or call to matched with a counselor.',
    enrollmentShort: 'Online form or phone call to get matched.',
    matchDefault: 'Affordable counseling and emotional wellness',
    logo: null,
    matchStrength: 'partial',
    open247: false,
  },
  {
    id: 'community-housing-hub',
    name: 'Allen County Housing Hub',
    phone: '(260) 555-0371',
    address: '200 E Berry St, Fort Wayne, IN 46802',
    lat: 41.0789,
    lng: -85.1389,
    categories: ['housing'],
    tags: ['free', 'walkIn', 'spanish'],
    languages: ['en', 'es', 'my'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Monday–Friday, 9:00 AM – 5:00 PM',
    hoursShort: 'Mon–Fri 9am–5pm',
    whoFor: 'Anyone at risk of homelessness or needing rental help',
    helpsWith: 'Coordinated entry, shelter referrals, and eviction prevention',
    enrollment: 'Walk in or call for a housing assessment with a specialist.',
    enrollmentShort: 'Walk in or call for housing assessment.',
    matchDefault: 'Coordinated housing and shelter referrals',
    logo: null,
    matchStrength: 'strong',
    open247: false,
  },
  {
    id: 'east-side-wellness',
    name: 'East Side Wellness Cooperative',
    phone: '(260) 555-0404',
    address: '3701 E Paulding Rd, Fort Wayne, IN 46816',
    lat: 41.0456,
    lng: -85.0898,
    categories: ['generalWellness', 'stress'],
    tags: ['free', 'lowCost', 'walkIn'],
    languages: ['en', 'es'],
    hasPhoneSupport: false,
    cost: 'Free classes — some workshops $5 suggested donation',
    hours: 'Wednesday–Saturday, 11:00 AM – 7:00 PM',
    hoursShort: 'Wed–Sat 11am–7pm',
    whoFor: 'Neighborhood residents and anyone seeking wellness activities',
    helpsWith: 'Yoga, mindfulness groups, nutrition workshops, and community events',
    enrollment: 'Drop in for the class schedule posted at the front door.',
    enrollmentShort: 'Drop in — see class schedule at the door.',
    matchDefault: 'Community wellness classes and mindfulness',
    logo: null,
    matchStrength: 'partial',
    open247: false,
  },
  {
    id: 'crisis-stabilization-unit',
    name: 'Northeast Indiana Crisis Stabilization',
    phone: '(260) 555-0437',
    address: '1720 Beacon St, Fort Wayne, IN 46805',
    lat: 41.0923,
    lng: -85.1045,
    categories: ['crisisHelp', 'stress', 'depression'],
    tags: ['free', 'openNow'],
    languages: ['en', 'es'],
    hasPhoneSupport: true,
    cost: 'Free — no insurance required for crisis visit',
    hours: 'Open 24 hours, 7 days a week',
    hoursShort: 'Open 24/7',
    whoFor: 'Anyone experiencing a mental health crisis',
    helpsWith: 'Short-term crisis observation, safety planning, and care coordination',
    enrollment: 'Walk in anytime or call ahead — mobile team available.',
    enrollmentShort: 'Walk in 24/7 or call for mobile team.',
    matchDefault: '24/7 crisis stabilization and safety planning',
    logo: null,
    matchStrength: 'strong',
    open247: true,
  },
  {
    id: 'fw-school-wellness',
    name: 'Fort Wayne Community Wellness Line',
    phone: '(260) 555-0460',
    address: '1200 S Barr St, Fort Wayne, IN 46802',
    lat: 41.0654,
    lng: -85.1412,
    categories: ['stress', 'generalWellness', 'depression'],
    tags: ['free', 'telehealth'],
    languages: ['en', 'es', 'my'],
    hasPhoneSupport: true,
    cost: 'Free',
    hours: 'Monday–Friday, 7:30 AM – 7:30 PM',
    hoursShort: 'Mon–Fri 7:30am–7:30pm',
    whoFor: 'Students, parents, and community members',
    helpsWith: 'Brief counseling, resource referrals, and wellness check-ins by phone',
    enrollment: 'Call the wellness line — a counselor responds within one business day.',
    enrollmentShort: 'Call the wellness line to connect with a counselor.',
    matchDefault: 'Phone-based wellness support and referrals',
    logo: null,
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

export function getMapEmbedUrl(resource) {
  const query =
    resource.lat != null && resource.lng != null
      ? `${resource.lat},${resource.lng}`
      : resource.address
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
}

export function getPhoneUrl(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
