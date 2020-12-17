import {createNode} from 'tools'
import cn from './Image.pcss'
import template from './Image.html'

const Image = (props) => {
  let $element
  let $img
  const {
    imageUrl,
    onUpdate,
    onLoad,
    onFail,
  } = props

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const getImg = () => $img

  const render = () => {
    $element = createNode(template({
      cn,
      imageUrl,
    }))

    $img = $element.querySelector(`.${cn.image}`)

    $img.addEventListener('load', () => onLoad())
    $img.addEventListener('error', () => {
      if ($img.complete) {
        onFail()
      }
    })
    $img.addEventListener('abort', () => onFail())
  }

  const updateImageUrl = (imageUrl) => {
    if ($img.src === imageUrl) {
      // safari do not call onload event when url is the same
      // so we manually clear it before update
      $img.removeAttribute('src')
    }

    $img.src = imageUrl

    onUpdate()
  }

  return {
    getElement,
    getImg,
    updateImageUrl,
  }
}

export default Image
