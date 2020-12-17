# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.7] - 2020-06-05

### Fixed

- call `previewUrlCallback` before rendering crop effect. See [#40].

## [1.4.6] - 2019-03-06

### Fixed

- Fix IE11 support. See [#36].

## [1.4.5] - 2019-04-05

### Fixed

- Fixed crashing of the widget if set `free` crop. See [#35].

## [1.4.4] - 2019-03-29

### Fixed

- Add missing `crop` field to the `fileInfo` object. See [#33].
- Apply resize operation along with the crop if needed
  to achieve behaviour similiar to the original preview tab. See [#34].

## [1.4.3] - 2019-03-27

### Fixed

- Apply auto-crop even in single image mode. See [#32].

## [1.4.2] - 2019-03-19

### Fixed

- Fix auto-crop error when no `crop` option passed to the widget. See [#31].

## [1.4.0] - 2019-03-01

### Added

- New locales:
  * Italian (`it`), see [#26],
  * Dutch (Netherlands) (`nl`), [#27],
  * Belarussian (`be`), [#30].

### Fixed

- Fix locales and add fallback if locale doesn't exists. See [#29].

## [1.3.0] - 2018-09-21

### Added

- New locales: Japanese (`ja`), Vietnamese (`vi`). See [#25].

## [1.2.1] - 2018-06-28

### Fixed

- Not working crop in Safari, see [#24].

## [1.2.0] - 2018-05-23

### Added

- Support for new widget configuration options:
  [`previewProxy`](https://uploadcare.com/docs/uploads/widget/config/#option-preview-proxy),
  [`previewUrlCallback`](https://uploadcare.com/docs/uploads/widget/config/#option-preview-url-callback).
  Learn more [here](https://uploadcare.com/docs/uploads/widget/secure_urls/).
- French (`fr`) locale thanks to [@gpenverne](https://github.com/gpenverne).

### Changed

- Updated README:
  * references,
  * added Feedback section,
  * removed Contributors section.

### Fixed

- Autorotate for image preview, [#21].

## [1.1.0] - 2018-04-20

### Added

- New effect `invert`.
- New option `all` for effects settings.

### Fixed

- Global setting `UPLOADCARE_EFFECTS` works now.
- Fixed ignoring of the `crop` preset in multiple mode.
- Crop is applied automatically if
  the `crop` setting has presets, e.g. `1:1`, and hasn't `free`.
- Show an image without all effects in the crop mode.

## [1.0.3] - 2017-08-23

### Fixed

- Fix links to uploadcare site in README.

## [1.0.2] - 2017-08-21

### Added

- Uploadcare logo into README.

## [1.0.1] - 2017-08-21

Initial public release for npm.

### Added

- README section about install with npm.
- README section about output value.

### Fixed

- Fix info about version in README.

## 1.0.0 - 2017-08-21

Initial public release.

### Added

- The `uploadcareTabEffects` function as default export.
- README with info about requirements, install, usage, etc.

[#21]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/21
[#24]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/24
[#25]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/25
[#26]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/26
[#27]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/27
[#29]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/29
[#30]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/30
[#31]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/31
[#32]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/32
[#33]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/33
[#34]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/34
[#35]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/35
[#36]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/36
[#40]: https://github.com/uploadcare/uploadcare-widget-tab-effects/issues/40

[Unreleased]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.7...HEAD
[1.4.7]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.6...v1.4.7
[1.4.6]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.4.0...v1.4.2
[1.4.0]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.0.3...v1.1.0
[1.0.3]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/uploadcare/uploadcare-widget-tab-effects/compare/v1.0.0...v1.0.1
