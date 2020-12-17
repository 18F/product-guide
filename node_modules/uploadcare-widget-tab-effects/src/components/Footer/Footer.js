import {createNode} from 'tools'
import cn from './Footer.pcss'
import template from './Footer.html'

const Footer = (props) => {
  let $element
  let $additionsElement
  let $doneElement
  let $cancelElement
  const {
    locale,
    onDone,
    onCancel,
  } = props

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const render = () => {
    $element = createNode(template({
      cn,
      locale,
    }))

    $additionsElement = $element.querySelector(`.${cn.additions}`)
    $doneElement = $element.querySelector(`.${cn.done}`)
    $cancelElement = $element.querySelector(`.${cn.cancel}`)

    $doneElement.addEventListener('click', onDone)
    $cancelElement.addEventListener('click', onCancel)
  }

  const empty = () => {
    if (!$element) return

    while ($additionsElement.firstChild) {
      $additionsElement.removeChild($additionsElement.firstChild)
    }
  }

  const appendChild = (child) => {
    if (!$element) return

    $additionsElement.appendChild(child)
  }

  const toggleDisabled = (isDisabled) => {
    if (!$doneElement) return

    $doneElement.disabled = isDisabled
  }

  const updateDoneTitle = (newTitle = null) => {
    $doneElement.innerText = (newTitle) ? newTitle : locale.done
  }

  return {
    getElement,
    empty,
    appendChild,
    toggleDisabled,
    updateDoneTitle,
  }
}

export default Footer
