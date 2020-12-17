import {getModifiersByEffects, buildFileInfoCrop} from 'tools'

const createStore = (initialState) => {
  let state = initialState
  let listeners = {
    view: [],
    imageLoad: [],
    appliedEffects: [],
    image: [],
  }

  const getState = () => state

  const setAppliedEffect = (appliedEffect) => {
    const appliedEffects = {
      ...state.appliedEffects,
      ...appliedEffect,
    }

    state = {
      ...state,
      ...{appliedEffects},
    }
    listeners['appliedEffects'].forEach(listener => listener())
  }

  const setView = (view) => {
    state = {
      ...state,
      ...{view},
    }
    listeners['view'].forEach(listener => listener())
  }

  const setImageLoad = (imageLoad) => {
    state = {
      ...state,
      ...{imageLoad},
    }
    listeners['imageLoad'].forEach(listener => listener())
  }

  const rebuildImage = () => {
    const {appliedEffects, image} = state
    const cdnUrlModifiers = getModifiersByEffects(appliedEffects) + state.otherModifiers
    const crop = buildFileInfoCrop(appliedEffects.crop)

    state.image = {
      ...image,
      ...{
        cdnUrl: image.originalUrl + (cdnUrlModifiers || ''),
        cdnUrlModifiers,
        crop,
      },
    }

    listeners['image'].forEach(listener => listener())
  }

  const subscribe = (listener, source) => {
    listeners[source].push(listener)

    return () => {
      listeners[source] = listeners[source].filter(l => l !== listener)
    }
  }

  const subscribeToAppliedEffects = (listener) => subscribe(listener, 'appliedEffects')
  const subscribeToView = (listener) => subscribe(listener, 'view')
  const subscribeToImageLoad = (listener) => subscribe(listener, 'imageLoad')
  const subscribeToImage = (listener) => subscribe(listener, 'image')

  return {
    getState,
    setView,
    setImageLoad,
    setAppliedEffect,
    rebuildImage,
    subscribeToView,
    subscribeToImageLoad,
    subscribeToImage,
    subscribeToAppliedEffects,
  }
}

export default createStore
