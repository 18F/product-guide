import {createNode} from 'tools'
import cn from './Effects.pcss'
import template from './Effects.html'
import {EffectButton} from 'components'

const Effects = (props) => {
  let $element
  let buttons = []
  const {
    effects,
    titles,
    onEffectClick,
  } = props
  let state = {appliedEffects: props.appliedEffects}

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const render = () => {
    $element = createNode(template({cn}))

    effects.forEach(effect => {
      const title = titles[effect]

      buttons.push(new EffectButton({
        effect,
        title,
        applied: !!state.appliedEffects[effect],
        onClick: () => onEffectClick(effect),
      }))
    })

    buttons.forEach(button => $element.appendChild(button.getElement()))
  }

  const toggleDisabled = (isDisabled) => {
    if (!buttons) return

    buttons.forEach(button => button.toggleDisabled(isDisabled))
  }

  const updateApplied = (appliedEffects) => {
    if (!buttons) return

    state.appliedEffects = appliedEffects

    buttons.forEach(button => button.toggleApplied(!!appliedEffects[button.getEffect()]))
  }

  return {
    getElement,
    toggleDisabled,
    updateApplied,
  }
}

export default Effects
