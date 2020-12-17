import {customExtends, configureTranslations, getGlobalSettingsByKey, autoCrop} from 'tools'
import configureSettings from './configure-settings'
import configureStore from './configure-store'
import {Tab} from 'components'

function createPreviewTabEffects(PreviewTab, uc) {
  customExtends(PreviewTabEffects, PreviewTab)

  function PreviewTabEffects(container, button, dialogApi, settings, name) {
    PreviewTabEffects.__super__.constructor.call(this, container, button, dialogApi, settings, name)
  }

  PreviewTabEffects.prototype.__setState = function(state, data) {
    if (state === 'image') {
      if (data.info) {
        const globalEffects = getGlobalSettingsByKey('effects')

        // Trying to get effects settings from global if widget doesn't have them
        if (typeof this.settings.effects === 'undefined' && globalEffects) {
          this.settings.effects = globalEffects
        }

        const settings = configureSettings(this.settings)
        const store = configureStore(data.info, settings)
        const onDone = () => {
          const newFile = this.file.then((info) => {
            const {cdnUrl, cdnUrlModifiers, crop} = store.getState().image

            return {
              ...info,
              ...{
                cdnUrl,
                cdnUrlModifiers,
                crop,
              },
            }
          })

          this.dialogApi.fileColl.replace(this.file, newFile)
        }
        const onFail = () => {
          this.file = null
          this.__setState('error', {error: 'loadImage'})
        }

        autoCrop(store, settings, uc)

        const currentLocale = settings.locale

        uc.locale.translations = configureTranslations(uc.locale.translations, currentLocale)
        uc.locale.rebuild()

        const tab = new Tab({
          uc,
          store,
          settings,
          onDone,
          onFail,
        })

        const container = this.container[0]

        container.innerHTML = ''
        Array.prototype.slice.call((tab.getElement()).children)
          .forEach(child => container.appendChild(child))

        store.setImageLoad('start')
      }
    }
    else {
      PreviewTabEffects.__super__.__setState.call(this, state, data)
    }
  }

  PreviewTabEffects.prototype.initImage = function() {}

  return PreviewTabEffects
}

export default createPreviewTabEffects
