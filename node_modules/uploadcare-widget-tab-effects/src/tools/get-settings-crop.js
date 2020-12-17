const getSettingsCrop = (crop, effects) => {
  if (crop || !~effects.indexOf('crop')) {
    return crop
  }

  return [{
    downscale: false,
    notLess: false,
    preferedSize: undefined,
    upscale: false,
  }]
}

export default getSettingsCrop
