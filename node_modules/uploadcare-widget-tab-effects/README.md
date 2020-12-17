# Effects Tab for Uploadcare Widget

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects">
    <img align="right" width="64" height="64"
         src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
         alt="">
</a>

Effects Tab is an [Uploadcare Widget][uc-docs-widget] addon
that allows for in-browser image editing on desktop and mobile.
Technically, it's a [custom widget tab][uc-docs-widget-custom-tabs]
that replaces Preview Tab.

[![NPM version][badge-npm-img]][badge-npm-url]&nbsp;
[![Uploadcare stack on StackShare][badge-stack-img]][badge-stack-url]

<p>
  <a href="https://uploadcare.github.io/uploadcare-widget-tab-effects/" title="See Effects Tab in action with demo">
    <img src="https://ucarecdn.com/c04e8231-3c79-43ca-a122-285b8573d1f8/uploadcare-widget-effects-tab.gif"
        width="888" alt="">
  </a>
</p>

Effects Tab provides 9 effects for on-the-fly image editing in desktop or mobile browsers:
crop, rotate, mirror, flip, blur, sharpen, enhance, grayscale and invert.
You can customize which effects are allowed and otherwise affect the tab behavior.

<!-- toc -->

* [How it works](#how-it-works)
* [Demo](#demo)
* [Requirements](#requirements)
* [Install](#install)
* [Usage](#usage)
* [Configuration](#configuration)
* [Options](#options)
* [Localization](#localization)
* [Security issues](#security-issues)
* [Feedback](#feedback)

<!-- tocstop -->

## How it works

Image operations provided by Effects Tab are based on the capabilities
of Uploadcare [Image Processing][uc-feature-image-processing].
The tab outputs a CDN link holding your image [UUID][uc-docs-uuid] and
[image operations][uc-docs-cdn-image-operations] applied by a user while editing.
Technically, every original image is firstly uploaded to our CDN and then shown
to a user in Effects Tab.
In case of uploading [multiple files][uc-docs-widget-multi-upload], this happens asynchronously.

For example, if a user chose to apply `grayscale` and clicked `rotate` once,
this is how the output value looks like:

```
https://ucarecdn.com/:UUID/-/preview/-/grayscale/-/rotate/270/
```

You will always have the `preview` operation in Effects Tab output URL due to
CDN API [limitations][uc-docs-cdn-limits].

## Demo

Check out the basic demo [here][demo].

## Requirements

Since Effects Tab is a [custom tab][uc-docs-widget-custom-tabs] for Uploadcare Widget,
make sure to start with [installing the widget][uc-docs-widget-install].

## Install

You’re free to choose from the install methods listed below.

### NPM

Get Effects Tab:

```bash
npm i uploadcare-widget-tab-effects --save
```

And then import it in your module:

```javascript
import uploadcareTabEffects from 'uploadcare-widget-tab-effects'
```

### CDN

You can either install this minification-enabled Effects Tab version:

```html
<script src="https://ucarecdn.com/libs/widget-tab-effects/1.x/uploadcare.tab-effects.min.js" charset="utf-8"></script>
```

Or a bundled version without minification:

```html
<script src="https://ucarecdn.com/libs/widget-tab-effects/1.x/uploadcare.tab-effects.js" charset="utf-8"></script>
```

## Usage

That’s how you add Effects Tab to the widget:

```javascript
uploadcare.registerTab('preview', uploadcareTabEffects)
```

## Configuration

This section describes different ways to set which effects are allowed
in the Effects Tab.

### Global variables

```html
<script>
  UPLOADCARE_EFFECTS = 'blur,sharp,grayscale'
</script>
```

or

```html
<script>
  UPLOADCARE_EFFECTS = ['blur', 'sharp', 'grayscale']
</script>
```

### Local attributes

```html
<input type="hidden" role="uploadcare-uploader" name="content"
  data-effects="blur,sharp,grayscale"
/>
```

### Settings object

```javascript
uploadcare.start({
  effects: 'blur,sharp,grayscale',
})
```

or

```javascript
uploadcare.start({
  effects: ['blur', 'sharp', 'grayscale'],
})
```

## Options

### Effects `string|array`

Global: `UPLOADCARE_EFFECTS` <br>
Local: `data-effects` <br>
Object key: `effects` <br>

Default value: `crop,rotate,enhance,sharp,grayscale`.

This allows you to configure the set of enabled effects.
It also controls **the order of effects** in the tab:
however, `crop` is always the first in the set.

`effects` can either be a string holding one or more
comma-separated effects or an array of strings (JS only).
You can also enable all effects by setting the option to `all`.

Available effects:

* `crop` — crops images freely or using set aspect ratios
* `rotate` — rotates images
* `mirror` — provides image-mirroring capabilities
* `flip` — allows flipping images
* `blur` — filters images via Gaussian Blur
* `sharp` — allows adjusting image sharpness
* `enhance` — makes images look better via auto
  levels, auto contrast, and saturation sharpening
* `grayscale` — desaturates images
* `invert` — inverts image colors

## Localization

It’s possible your locale is not available in the tab yet.
If that’s the case, contributing your locale might be a good idea.
This can be done by forking the [main repository][github-home]
followed by adding a new localization file [here][github-files-locales] and add `import` and `export` your locale [here][github-files-locales-index].

## Security issues

If you think you ran into something in Uploadcare libraries which might have
security implications, please hit us up at [bugbounty@uploadcare.com][uc-email-bounty]
or Hackerone.

We'll contact you personally in a short time to fix an issue through co-op and
prior to any public disclosure.

## Feedback

Issues and PRs are welcome. You can provide your feedback or drop us a support
request at [hello@uploadcare.com][uc-email-hello].

[demo]: https://uploadcare.github.io/uploadcare-widget-tab-effects/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[github-home]: https://github.com/uploadcare/uploadcare-widget-tab-effects
[github-files-locales]: https://github.com/uploadcare/uploadcare-widget-tab-effects/tree/master/src/locale
[github-files-locales-index]: https://github.com/uploadcare/uploadcare-widget-tab-effects/tree/master/src/locale/index.js
[uc-email-bounty]: mailto:bugbounty@uploadcare.com
[uc-email-hello]: mailto:hello@uploadcare.com
[uc-feature-image-processing]: https://uploadcare.com/features/image_processing/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-widget]: https://uploadcare.com/docs/uploads/widget/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-widget-install]: https://uploadcare.com/docs/uploads/widget/install/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-widget-custom-tabs]: https://uploadcare.com/docs/uploads/widget/custom_tabs/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-cdn]: https://uploadcare.com/docs/delivery/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-cdn-image-operations]: https://uploadcare.com/docs/processing/image/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-cdn-limits]: https://uploadcare.com/docs/processing/image/limits/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[uc-docs-uuid]: https://uploadcare.com/docs/concepts/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects#cdn
[uc-docs-widget-multi-upload]: https://uploadcare.com/docs/uploads/widget/multi_upload/?utm_source=github&utm_campaign=uploadcare-widget-tab-effects
[badge-npm-img]: http://img.shields.io/npm/v/uploadcare-widget-tab-effects.svg
[badge-npm-url]: https://www.npmjs.org/package/uploadcare-widget-tab-effects
[badge-stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[badge-stack-url]: https://stackshare.io/uploadcare/stacks/
