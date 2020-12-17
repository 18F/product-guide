import {createNode} from 'tools'
import cn from './Header.pcss'
import template from './Header.html'

const Header = (props) => {
  let $element
  let $titleElement
  const {title} = props

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

    $titleElement = $element.querySelector(`.${cn.title}`)
  }

  const updateTitle = (title) => {
    if (!$titleElement) return

    $titleElement.innerText = title
  }

  return {
    getElement,
    updateTitle,
  }
}

export default Header
