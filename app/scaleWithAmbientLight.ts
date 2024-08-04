function getAmbientLightLevel() {
  const now = new Date()
  const hours = now.getHours() + now.getMinutes() / 60 // Convert current time to decimal hours

  // Define transition times
  const morningStart = 7.0 // Transition starts at 7:00 AM
  const morningEnd = 9.0 // Bright period starts at 9:00 AM
  const eveningStart = 19.0 // Bright period ends at 7:00 PM
  const eveningEnd = 21.0 // Transition ends at 9:00 PM

  let lightLevel

  if (hours >= morningEnd && hours <= eveningStart) {
    // Full brightness during the day
    lightLevel = 1
  } else if (hours > eveningStart && hours < eveningEnd) {
    // Evening transition
    lightLevel = (eveningEnd - hours) / (eveningEnd - eveningStart)
  } else if (hours > morningStart && hours < morningEnd) {
    // Morning transition
    lightLevel = (hours - morningStart) / (morningEnd - morningStart)
  } else {
    // It is dark before morning start and after evening end
    lightLevel = 0
  }

  return lightLevel
}

export function scaleWithAmbientLight(min: number, max: number) {
  const ambientLightLevel = getAmbientLightLevel() // Get the current ambient light level
  // Scale the output based on the ambient light level
  return min + (max - min) * ambientLightLevel
}
