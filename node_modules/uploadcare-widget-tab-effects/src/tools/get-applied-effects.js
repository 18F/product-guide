import initialState from '../initial-state'

const getAppliedEffects = (settingsEffects) => {
  const {appliedEffects: initialAppliedEffects} = initialState
  let appliedEffects = {}

  settingsEffects.forEach(settingsEffect => {
    if (initialAppliedEffects[settingsEffect] !== undefined) {
      appliedEffects[settingsEffect] = initialAppliedEffects[settingsEffect]
    }
  })

  return appliedEffects
}

export default getAppliedEffects
