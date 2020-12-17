import initialSettings from '../initial-settings'
import ALL_EFFECTS from '../all-effects'

const getSettingsEffects = (value) => {
  let settingsEffects = []

  if (typeof value === 'string' && value === 'all') {
    return ALL_EFFECTS
  }

  if (typeof value === 'string') {
    settingsEffects = value.replace(/\s/g, '').split(',')
  }
  else if (Array.isArray(value)) {
    settingsEffects = value
  }
  else {
    settingsEffects = initialSettings.effects
  }

  const cropIndex = settingsEffects.indexOf('crop')

  if (!!~cropIndex && (cropIndex !== 0)) {
    settingsEffects = [
      'crop',
      ...settingsEffects.slice(0, cropIndex),
      ...settingsEffects.slice(cropIndex + 1),
    ]
  }

  return settingsEffects
}

export default getSettingsEffects
