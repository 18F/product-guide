import {createNode, getModifiersByEffects, getNextRotateValue, getCropResize} from 'tools'
import template from './Tab.html'
import {Content, Crops, Effects, Footer, Header, Image, Range} from 'components'

const ranges = {
  enhance: [0, 100],
  sharp: [0, 20],
  blur: [0, 100, 5],
}

const Tab = (props) => {
  let $element
  let _header
  let _content
  let _footer
  let _image
  let _effects
  let _crops
  const {
    uc,
    store,
    settings,
    onDone,
    onFail,
  } = props
  let state = {
    cropWidget: null,
    currentCrop: 0,
  }
  const t = uc.locale.t
  const CropWidget = uc.crop.CropWidget
  const previewModifiers = '-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/'

  const getElement = () => {
    if (!$element) {
      render()
    }

    return $element
  }

  const render = () => {
    const {view, appliedEffects, image} = store.getState()

    $element = createNode(template())

    _header = new Header({title: headerTitle(view)})

    _footer = new Footer({
      locale: {
        done: t('dialog.tabs.preview.done'),
        cancel: t('dialog.tabs.preview.image.change'),
      },
      onDone: handleDone,
      onCancel: handleCancel,
    })

    _content = new Content()

    let imageUrl = image.cdnUrl + previewModifiers

    if (settings.previewUrlCallback) {
      imageUrl = settings.previewUrlCallback(imageUrl, image)
    }

    _image = new Image({
      imageUrl: imageUrl,
      onUpdate: () => store.setImageLoad('start'),
      onLoad: () => store.setImageLoad('load'),
      onFail: () => store.setImageLoad('fail'),
    })

    $element.appendChild(_header.getElement())
    $element.appendChild(_content.getElement())
    $element.appendChild(_footer.getElement())

    _content.appendChild(_image.getElement())

    const {effects} = settings
    const titles = effects.reduce((titles, effect) => {
      titles[effect] = effectTitle(effect)

      return titles
    }, {})

    _effects = new Effects({
      effects,
      titles,
      appliedEffects,
      onEffectClick: handleEffectClick,
    })

    _footer.appendChild(_effects.getElement())

    store.subscribeToAppliedEffects(handleAppliedEffectsChange)
    store.subscribeToView(handleViewChange)
    store.subscribeToImage(handleImageChange)
    store.subscribeToImageLoad(handleImageLoadChange)
  }

  const headerTitle = (view) => (view === 'preview') ? t('dialog.tabs.preview.image.title') : effectTitle(view)

  const effectTitle = (effect) => t(`effects.captions.${effect}`)

  const deleteCropWidget = () => {
    if (!state.cropWidget || !state.cropWidget.__api) return

    state.cropWidget.__api.release()
    state.cropWidget.__api.destroy()
    _image.getImg().removeAttribute('style')
  }

  const handleDone = (e) => {
    const {view} = store.getState()

    if (view === 'preview') {
      onDone()
    }
    else {
      e.stopPropagation()

      if (view === 'crop') {
        finishCrop()
      }

      store.setView('preview')
    }
  }

  const handleCancel = (e) => {
    const {view, appliedEffects} = store.getState()
    const {crop: cropSettings} = settings

    if (view !== 'preview') {
      e.stopPropagation()

      let value = 0

      if (view === 'crop') {
        const freeAllowed = cropSettings.some(c => !c.preferedSize)

        value = freeAllowed ? null : appliedEffects[view]
        deleteCropWidget()
      }
      store.setAppliedEffect({[view]: value})
      store.setView('preview')
    }
  }

  const handleEffectClick = (effect) => {
    const {appliedEffects} = store.getState()

    if (effect === 'rotate') {
      store.setAppliedEffect({rotate: getNextRotateValue(appliedEffects.rotate)})

      return
    }

    if (typeof appliedEffects[effect] === 'boolean') {
      store.setAppliedEffect({[effect]: !appliedEffects[effect]})

      return
    }

    if (effect === 'crop' || typeof appliedEffects[effect] === 'number') {
      store.setView(effect)
    }
  }

  const handleRangeChange = (value) => {
    const {view} = store.getState()

    store.setAppliedEffect({[view]: parseInt(value)})
  }

  const handleAppliedEffectsChange = () => {
    store.rebuildImage()

    const {appliedEffects} = store.getState()

    _effects.updateApplied(appliedEffects)
  }

  const handleViewChange = () => {
    const {view, appliedEffects, image} = store.getState()

    _header.updateTitle(headerTitle(view))

    if (view === 'preview') {
      _footer.updateDoneTitle()
    }
    else {
      _footer.updateDoneTitle(t('effects.apply'))
    }

    _footer.empty()

    if (view === 'preview') {
      _footer.appendChild(_effects.getElement())

      return
    }

    if (view === 'crop') {
      showCrops()

      let imageUrl = image.originalUrl +
        (getModifiersByEffects([{crop: null}], false, false) || '') +
        previewModifiers

      if (settings.previewUrlCallback) {
        imageUrl = settings.previewUrlCallback(imageUrl, image)
      }

      _image.updateImageUrl(imageUrl)

      return
    }

    if (ranges[view]) {
      let value = appliedEffects[view]

      if (value === 0) {
        value = ranges[view][1] / 2

        store.setAppliedEffect({[view]: value})
      }

      const _range = new Range({
        min: ranges[view][0],
        max: ranges[view][1],
        step: ranges[view][2],
        value,
        onChange: handleRangeChange,
      })

      _footer.appendChild(_range.getElement())
    }
  }

  const handleImageChange = () => {
    const {image} = store.getState()
    let imageUrl = image.cdnUrl + previewModifiers

    if (settings.previewUrlCallback) {
      imageUrl = settings.previewUrlCallback(imageUrl, image)
    }

    _image.updateImageUrl(imageUrl)
  }

  const handleImageLoadChange = () => {
    const {view, imageLoad} = store.getState()

    switch (imageLoad) {
      case 'start':
        _footer.toggleDisabled(true)

        if (view === 'preview') {
          _effects.toggleDisabled(true)
        }
        if (view === 'crop') {
          _crops.toggleDisabled(true)
        }
        break
      case 'load':
        _footer.toggleDisabled(false)

        if (view === 'preview') {
          _effects.toggleDisabled(false)
        }
        else if (view === 'crop') {
          startCrop()
          _crops.toggleDisabled(false)
        }
        break
      case 'fail':
        onFail()
        break
    }
  }

  const showCrops = () => {
    const {crop: cropSettings} = settings
    const {appliedEffects} = store.getState()
    const {crop} = appliedEffects

    state.currentCrop = (crop && crop.index !== undefined) ? crop.index : 0

    _crops = new Crops({
      crops: cropSettings.map((c, i) => {
        const {description, width, height} = getCropSizeInfo(c)

        return {
          index: i,
          settings: c,
          title: description,
          size: {
            width,
            height,
          },
        }
      }),
      currentCrop: state.currentCrop,
      onCropClick: (crop) => {
        state.currentCrop = crop.index
        if (state.cropWidget) {
          state.cropWidget.setCrop(crop.settings)
        }
      },
    })

    _footer.appendChild(_crops.getElement())
  }

  const startCrop = () => {
    const {crop: cropSettings} = settings
    const {appliedEffects, image} = store.getState()
    const {crop} = appliedEffects
    const {width, height} = image.originalImageInfo
    const size = [width, height]

    state.cropWidget = new CropWidget(uc.jQuery(_image.getImg()), size, cropSettings[state.currentCrop])

    if (crop && crop.coords) {
      state.cropWidget.setSelection(crop.coords)
    }
  }

  const finishCrop = () => {
    const {crop, originalSize} = state.cropWidget
    const coords = state.cropWidget.getSelection()

    deleteCropWidget()

    store.setAppliedEffect({
      crop: {
        originalSize,
        coords,
        resizeTo: getCropResize(crop, [coords.width, coords.height]),
        settings: crop,
        index: state.currentCrop,
      },
    })
  }

  const getCropSizeInfo = (crop) => {
    const {preferedSize} = crop

    let description = t('dialog.tabs.preview.crop.free')
    let width
    let height

    if (preferedSize) {
      const gcd = uc.utils.gcd(preferedSize[0], preferedSize[1])
      const size = uc.utils.fitSize(preferedSize, [30, 30], true)

      description = `${preferedSize[0] / gcd}:${preferedSize[1] / gcd}`
      width = `${Math.max(20, size[0])}px`
      height = `${Math.max(12, size[1])}px`
    }

    return {
      description,
      width,
      height,
    }
  }

  return {getElement}
}

export default Tab
