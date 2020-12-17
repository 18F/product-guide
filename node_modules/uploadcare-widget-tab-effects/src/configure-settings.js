import {getSettingsCrop, getSettingsEffects} from 'tools'
import initialSettings from './initial-settings'

const configureSettings = (settings) => {
  const effects = getSettingsEffects(settings.effects)
  const crop = getSettingsCrop(settings.crop, effects)

  return {
    ...settings,
    ...{crop},
    ...{effects},
    ...{locale: settings.locale ? settings.locale : initialSettings.locale},
  }
}

export default configureSettings
