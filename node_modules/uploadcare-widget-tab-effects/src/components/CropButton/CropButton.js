import {createNode} from 'tools'
import cn from './CropButton.pcss'
import template from './CropButton.html'

const APPLIED_CLASS_NAME = 'uploadcare--crop-sizes__item_current'
const ICON_FREE_CLASS_NAME = 'uploadcare--crop-sizes__icon_free'

const CropButton = (props) => {
  let $element
  const {
    size,
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

  const render = () => {
    $element = createNode(template({
      title,
      cn,
    }))

    setupIcon()

    if (state.applied) {
      $element.classList.add(APPLIED_CLASS_NAME)
    }

    $element.addEventListener('click', handleClick)
  }

  const setupIcon = () => {
    let $icon = $element.querySelector(`.${cn['crop-button__icon']}`)
    const {width, height} = size

    if (width && height) {
      $icon.style.width = width
      $icon.style.height = height
    }
    else {
      $icon.innerHTML = `
<svg width="32" height="32" role="presentation" class="uploadcare--icon">
  <use xlink:href="#uploadcare--icon-crop-free"/>
</svg>
      `
      $icon.classList.add(ICON_FREE_CLASS_NAME)
    }
  }

  const handleClick = () => {
    if (state.disabled || !onClick) return

    onClick()
  }

  const toggleApplied = (applied) => {
    if (!$element || (state.applied === applied)) return

    state.applied = applied

    $element.classList[(applied) ? 'add' : 'remove'](APPLIED_CLASS_NAME)
  }

  const toggleDisabled = (disabled) => {
    if (!$element || (state.disabled === disabled)) return

    state.disabled = disabled

    $element.setAttribute('aria-disabled', disabled)
    $element.setAttribute('tabindex', disabled ? '-1' : '0')
  }

  return {
    getElement,
    toggleApplied,
    toggleDisabled,
  }
}

export default CropButton
