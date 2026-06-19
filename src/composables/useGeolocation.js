export function requestGeolocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ success: false, error: 'unsupported' })
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          success: true,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        })
      },
      (error) => {
        resolve({
          success: false,
          error: error.code === 1 ? 'denied' : 'unavailable',
        })
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    )
  })
}

export function isNearFortWayne(lat, lng) {
  const centerLat = 41.0793
  const centerLng = -85.1394
  const dLat = Math.abs(lat - centerLat)
  const dLng = Math.abs(lng - centerLng)
  return dLat < 0.5 && dLng < 0.5
}
