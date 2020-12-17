import * as locales from 'locale'
import initialSettings from '../initial-settings'

/**
 * Check if locale available in list of locales for Tab.
 * @param locale
 * @return {boolean}
 */
const isLocaleAvailable = locale => {
  const availableLocales = Object.keys(locales)

  return availableLocales.indexOf(locale) > -1
}

/**
 * Configure translations for Tab.
 * @param translations
 * @param currentLocale
 * @return {*}
 */
const configureTranslations = (translations, currentLocale) => {
  const extendedTranslations = {...translations}
  const isCurrentLocaleAvailable = isLocaleAvailable(currentLocale)
  const defaultTranslations = locales[initialSettings.locale]
  const isLocaleAvailableInTranslations = locale => extendedTranslations.hasOwnProperty(locale)

  for (const locale in extendedTranslations) {
    if (isLocaleAvailableInTranslations(locale)) {
      if (!isLocaleAvailableInTranslations(currentLocale)) {
        const currentLocaleTranslations = extendedTranslations[currentLocale]

        extendedTranslations[currentLocale] = {
          ...currentLocaleTranslations,
          ...defaultTranslations,
        }

        /* eslint-disable no-continue */
        continue
      }

      if (isCurrentLocaleAvailable || isLocaleAvailable(locale)) {
        extendedTranslations[locale] = {
          ...extendedTranslations[locale],
          ...locales[locale],
        }
      }
      else {
        extendedTranslations[locale] = {
          ...extendedTranslations[locale],
          ...defaultTranslations,
        }
      }
    }
  }

  return extendedTranslations
}

export default configureTranslations
