const getCropResize = (cropSettings, size) => {
  const [width, height] = size
  const downscale =
    cropSettings.downscale && (width > cropSettings.preferedSize[0] || height > cropSettings.preferedSize[1])
  const upscale =
    cropSettings.upscale && (width < cropSettings.preferedSize[0] || height < cropSettings.preferedSize[1])

  if (downscale || upscale) {
    return cropSettings.preferedSize
  }
  else {
    return null
  }
}

export default getCropResize
