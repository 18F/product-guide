import uploadcare from 'uploadcare-widget'
import createPreviewTabEffects from './create-preview-tab-effects'

function uploadcareTabEffects(container, button, dialogApi, settings, name) {
  uploadcare.plugin(function(uc) {
    if (settings.multiple) {
      return new uc.widget.tabs.PreviewTabMultiple(container, button, dialogApi, settings, name)
    }

    const PreviewTabEffects = createPreviewTabEffects(uc.widget.tabs.PreviewTab, uc)

    return new PreviewTabEffects(container, button, dialogApi, settings, name)
  })
}

export default uploadcareTabEffects
