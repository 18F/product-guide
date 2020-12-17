const buildFileInfoCrop = (crop) => {
  if (crop) {
    const {coords, resizeTo} = crop

    const cropInfo = {
      width: coords.width,
      height: coords.height,
      left: coords.left,
      top: coords.top,
    }

    if (resizeTo) {
      cropInfo.sw = resizeTo[0]
      cropInfo.sh = resizeTo[1]
    }

    return cropInfo
  }
  else {
    return null
  }
}

export default buildFileInfoCrop
