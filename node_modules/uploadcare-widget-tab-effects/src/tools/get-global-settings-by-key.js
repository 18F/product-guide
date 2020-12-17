const getGlobalSettingsByKey = (key) => {
  const value = window[`UPLOADCARE_${key.toUpperCase()}`]

  return typeof value === 'undefined' ? null : value
}

export default getGlobalSettingsByKey
