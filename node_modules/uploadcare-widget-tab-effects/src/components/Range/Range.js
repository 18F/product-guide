import {createNode} from 'tools'
import cn from './Range.pcss'
import template from './Range.html'

const Range = (props) => {
  let $element
  const {
    min = 0,
    max = 100,
    step = 1,
    value = 50,
    onChange,
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
      min,
      max,
      step,
      value,
    }))

    $element.addEventListener('change', (e) => onChange(e.target.value))
  }

  return {getElement}
}

export default Range
