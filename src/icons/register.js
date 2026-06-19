import { addIcon } from '@iconify/vue'

import accessibility from '@iconify-icons/lucide/accessibility'
import alertTriangle from '@iconify-icons/lucide/alert-triangle'
import arrowLeft from '@iconify-icons/lucide/arrow-left'
import bookmark from '@iconify-icons/lucide/bookmark'
import brain from '@iconify-icons/lucide/brain'
import checkCircle from '@iconify-icons/lucide/check-circle'
import chevronRight from '@iconify-icons/lucide/chevron-right'
import circleDollarSign from '@iconify-icons/lucide/circle-dollar-sign'
import clock from '@iconify-icons/lucide/clock'
import cloud from '@iconify-icons/lucide/cloud'
import cloudRain from '@iconify-icons/lucide/cloud-rain'
import cloudSun from '@iconify-icons/lucide/cloud-sun'
import compass from '@iconify-icons/lucide/compass'
import globe from '@iconify-icons/lucide/globe'
import heartHandshake from '@iconify-icons/lucide/heart-handshake'
import helpCircle from '@iconify-icons/lucide/help-circle'
import home from '@iconify-icons/lucide/home'
import languages from '@iconify-icons/lucide/languages'
import leaf from '@iconify-icons/lucide/leaf'
import lock from '@iconify-icons/lucide/lock'
import map from '@iconify-icons/lucide/map'
import mapPin from '@iconify-icons/lucide/map-pin'
import messageCircle from '@iconify-icons/lucide/message-circle'
import navigation from '@iconify-icons/lucide/navigation'
import phone from '@iconify-icons/lucide/phone'
import pill from '@iconify-icons/lucide/pill'
import search from '@iconify-icons/lucide/search'
import shield from '@iconify-icons/lucide/shield'
import sun from '@iconify-icons/lucide/sun'
import users from '@iconify-icons/lucide/users'
import x from '@iconify-icons/lucide/x'

const icons = {
  'lucide:accessibility': accessibility,
  'lucide:alert-triangle': alertTriangle,
  'lucide:arrow-left': arrowLeft,
  'lucide:bookmark': bookmark,
  'lucide:brain': brain,
  'lucide:check-circle': checkCircle,
  'lucide:chevron-right': chevronRight,
  'lucide:circle-dollar-sign': circleDollarSign,
  'lucide:clock': clock,
  'lucide:cloud': cloud,
  'lucide:cloud-rain': cloudRain,
  'lucide:cloud-sun': cloudSun,
  'lucide:compass': compass,
  'lucide:globe': globe,
  'lucide:heart-handshake': heartHandshake,
  'lucide:help-circle': helpCircle,
  'lucide:home': home,
  'lucide:languages': languages,
  'lucide:leaf': leaf,
  'lucide:lock': lock,
  'lucide:map': map,
  'lucide:map-pin': mapPin,
  'lucide:message-circle': messageCircle,
  'lucide:navigation': navigation,
  'lucide:phone': phone,
  'lucide:pill': pill,
  'lucide:search': search,
  'lucide:shield': shield,
  'lucide:sun': sun,
  'lucide:users': users,
  'lucide:x': x,
}

export function registerIcons() {
  Object.entries(icons).forEach(([name, data]) => addIcon(name, data))
}
