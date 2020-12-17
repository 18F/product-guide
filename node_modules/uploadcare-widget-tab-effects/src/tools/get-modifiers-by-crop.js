const getModifiersByCrop = crop => {
  const size = crop.originalSize
  const {width, height, center, left, top} = crop.coords

  let modifiers = ''

  if (size) {
    const wholeImage = width === size[0] && height === size[1]

    if (!wholeImage) {
      modifiers += `-/crop/${width}x${height}/${left},${top}/`
    }
  }
  else {
    modifiers += `-/crop/${width}x${height}/`

    if (center) {
      modifiers += 'center/'
    }
    else if (left !== undefined && top !== undefined) {
      modifiers += `${left},${top}/`
    }
  }

  if (crop.resizeTo) {
    modifiers += `-/resize/${crop.resizeTo.join('x')}/`
  }
  else {
    modifiers += '-/preview/'
  }

  return modifiers
}

export default getModifiersByCrop
