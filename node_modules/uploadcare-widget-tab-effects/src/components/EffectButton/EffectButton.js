import {createNode} from 'tools'
import cn from './EffectButton.pcss'
import template from './EffectButton.html'
import Icon from '../Icon/Icon'

const EffectButton = (props) => {
  let $element
  const {
    effect,
    title,
    onClick,
  } = props
  let state = {
    applied: props.applied || false,
    disabled: props.disabled || false,
  }

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const getEffect = () => effect

  const render = () => {
    const _icon = new Icon({name: effect})

    $element = createNode(template({
      title,
      cn,
    }))

    $element.appendChild(_icon.getElement())

    if (state.applied) {
      $element.classList.add(cn['effect-button_applied'])
    }

    $element.addEventListener('click', handleClick)
    $element.addEventListener('keypress', (e) => {
      if (e.code === 'Enter') {
        $element.dispatchEvent(new Event('click'))
        e.preventDefault()
        e.stopPropagation()
      }
    })
  }

  const handleClick = () => {
    if (state.disabled || !onClick) return

    onClick()
  }

  const toggleApplied = (applied) => {
    if (!$element || (state.applied === applied)) return

    state.applied = applied

    $element.classList[(applied) ? 'add' : 'remove'](cn['effect-button_applied'])
  }

  const toggleDisabled = (disabled) => {
    if (!$element || (state.disabled === disabled)) return

    state.disabled = disabled

    $element.setAttribute('aria-disabled', disabled)
    $element.setAttribute('tabindex', disabled ? -1 : 0)
  }

  return {
    getElement,
    getEffect,
    toggleApplied,
    toggleDisabled,
  }
}

export default EffectButton
