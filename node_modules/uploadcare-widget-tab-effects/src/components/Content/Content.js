import {createNode} from 'tools'
import template from './Content.html'

const Content = () => {
  let $element

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const render = () => {
    $element = createNode(template())
  }

  const appendChild = ($child) => {
    if (!$element) return

    $element.appendChild($child)
  }

  return {
    getElement,
    appendChild,
  }
}

export default Content
