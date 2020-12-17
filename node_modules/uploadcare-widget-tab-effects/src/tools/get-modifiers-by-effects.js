import getModifiersByCrop from './get-modifiers-by-crop'

const getModifiersByEffects = (effects, withCrop = true, withRFM = true) => {
  let cdnUrlModifiers = ''

  for (const effect in effects) {
    if (effects[effect]) {
      switch (typeof effects[effect]) {
        case 'boolean':
          if (!withRFM && !!~['flip', 'mirror'].indexOf(effect)) {
            break
          }
          cdnUrlModifiers += `-/${effect}/`
          break
        case 'number':
          if (!withRFM && effect === 'rotate') {
            break
          }
          cdnUrlModifiers += `-/${effect}/${effects[effect]}/`
          break
        case 'object':
          if (effect === 'crop' && withCrop) {
            cdnUrlModifiers += getModifiersByCrop(effects[effect])
          }
          break
      }
    }
  }

  if (cdnUrlModifiers) {
    cdnUrlModifiers = effects['crop'] && withCrop ? cdnUrlModifiers : `-/preview/${cdnUrlModifiers}`
  }
  else {
    cdnUrlModifiers = ''
  }

  return cdnUrlModifiers
}

export default getModifiersByEffects
