'use strict'

var repeat = require('repeat-string')
var is = require('hast-util-is-element')
var findAfter = require('unist-util-find-after')

module.exports = toText

// Methods.
var min = Math.min
var max = Math.max

// White space codes.
var tab = 0x9
var space = 0x20
var zeroWidthSpace = 0x200b

// Bidi control characters codes.
var alm = 0x61c
var ltr = 0x200e
var rtl = 0x200f
var lre = 0x202a
var rle = 0x202b
var pdf = 0x202c
var lro = 0x202d
var rlo = 0x202e
var lri = 0x2066
var rli = 0x2067
var fsi = 0x2068
var pdi = 0x2069

// Characters.
var tabChar = '\t'
var lineFeedChar = '\n'
var spaceChar = ' '

// Implementation of the `innerText` getter:
// <https://html.spec.whatwg.org/#the-innertext-idl-attribute>
// Note that we act as if `node` is being rendered, and as if we’re a
// CSS-supporting user agent.
function toText(node) {
  var children = node.children || []
  var length = children.length
  var block = blockOrCaption(node)
  var whiteSpace = inferWhiteSpace(node, {})
  var index = -1
  var results
  var current
  var result
  var value
  var count

  // Treat `text` and `comment` as having normal white-space.
  // This deviates from the spec as in the DOM the node’s `.data` has to be
  // returned.
  // If you want that behavior use `hast-util-to-string`.
  // All other nodes are later handled as if they are `element`s (so the
  // algorithm also works on a `root`).
  // Nodes without children are treated as a void element, so `doctype` is thus
  // ignored.
  if (node.type === 'text' || node.type === 'comment') {
    return collectText(node, {
      whiteSpace: whiteSpace,
      breakBefore: true,
      breakAfter: true
    })
  }

  // 1.  If this element is not being rendered, or if the user agent is a
  //     non-CSS user agent, then return the same value as the textContent IDL
  //     attribute on this element.
  //
  //     Note: we’re not supporting stylesheets so we’re acting as if the node
  //     is rendered.
  //
  //     If you want that behavior use `hast-util-to-string`.
  //     Important: we’ll have to account for this later though.

  // 2.  Let results be a new empty list.
  results = []

  // 3.  For each child node node of this element:
  while (++index < length) {
    // 3.1. Let current be the list resulting in running the inner text
    //      collection steps with node.
    //      Each item in results will either be a JavaScript string or a
    //      positive integer (a required line break count).
    current = innerTextCollection(children[index], index, node, {
      whiteSpace: whiteSpace,
      breakBefore: index === 0 ? block : false,
      breakAfter: index === length - 1 ? block : is(children[index + 1], 'br')
    })

    // 3.2. For each item item in current, append item to results.
    results = results.concat(current)
  }

  // 4.  Remove any items from results that are the empty string.
  // 5.  Remove any runs of consecutive required line break count items at the
  //     start or end of results.
  // 6.  Replace each remaining run of consecutive required line break count
  //     items with a string consisting of as many U+000A LINE FEED (LF)
  //     characters as the maximum of the values in the required line break
  //     count items.
  index = -1
  length = results.length
  result = []

  while (++index < length) {
    value = results[index]

    if (typeof value === 'number') {
      if (count !== undefined && value > count) {
        count = value
      }
    } else if (value !== '') {
      if (count) {
        result.push(repeat(lineFeedChar, count))
      }

      count = 0
      result.push(value)
    }
  }

  // 7.  Return the concatenation of the string items in results.
  return result.join('')
}

// <https://html.spec.whatwg.org/#inner-text-collection-steps>
function innerTextCollection(node, index, parent, options) {
  if (node.type === 'element') {
    return collectElement(node, index, parent, options)
  }

  if (node.type === 'text') {
    return [
      options.whiteSpace === 'normal'
        ? collectText(node, options)
        : collectPreText(node, options)
    ]
  }

  return []
}

// Collect an element.
function collectElement(node, index, parent, options) {
  // First we infer the `white-space` property.
  var whiteSpace = inferWhiteSpace(node, options)
  var children = node.children || []
  var length = children.length
  var offset = -1
  var items = []
  var current
  var prefix
  var suffix

  // We’re ignoring point 3, and exiting without any content here, because we
  // deviated from the spec in `toText` at step 3.
  if (notRendered(node)) {
    return items
  }

  // Note: we first detect if there is going to be a break before or after the
  // contents, as that changes the white-space handling.

  // 2.  If node’s computed value of `visibility` is not `visible`, then return
  //     items.
  //
  //     Note: Ignored, as everything is visible by default user agent styles.

  // 3.  If node is not being rendered, then return items. [...]
  //
  //     Note: We already did this above.

  // See `collectText` for step 4.

  // 5.  If node is a `<br>` element, then append a string containing a single
  //     U+000A LINE FEED (LF) character to items.
  if (is(node, 'br')) {
    suffix = lineFeedChar
  }

  // 7.  If node’s computed value of `display` is `table-row`, and node’s CSS
  //     box is not the last `table-row` box of the nearest ancestor `table`
  //     box, then append a string containing a single U+000A LINE FEED (LF)
  //     character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  //     Note: needs further investigation as this does not account for implicit
  //     rows.
  else if (row(node) && findAfter(parent, node, row)) {
    suffix = lineFeedChar
  }

  // 8.  If node is a `<p>` element, then append 2 (a required line break count)
  //     at the beginning and end of items.
  else if (is(node, 'p')) {
    prefix = 2
    suffix = 2
  }

  // 9.  If node’s used value of `display` is block-level or `table-caption`,
  //     then append 1 (a required line break count) at the beginning and end of
  //     items.
  else if (blockOrCaption(node)) {
    prefix = 1
    suffix = 1
  }

  // 1.  Let items be the result of running the inner text collection steps with
  //     each child node of node in tree order, and then concatenating the
  //     results to a single list.
  while (++offset < length) {
    current = innerTextCollection(children[offset], offset, node, {
      whiteSpace: whiteSpace,
      breakBefore: offset === 0 ? prefix : false,
      breakAfter:
        offset === length - 1 ? suffix : is(children[offset + 1], 'br')
    })

    items = items.concat(current)
  }

  // 6.  If node’s computed value of `display` is `table-cell`, and node’s CSS
  //     box is not the last `table-cell` box of its enclosing `table-row` box,
  //     then append a string containing a single U+0009 CHARACTER TABULATION
  //     (tab) character to items.
  //
  //     See: <https://html.spec.whatwg.org/#tables-2>
  if (cell(node) && findAfter(parent, node, cell)) {
    items.push(tabChar)
  }

  // Add the pre- and suffix.
  if (prefix) {
    items.unshift(prefix)
  }

  if (suffix) {
    items.push(suffix)
  }

  return items
}

// 4.  If node is a Text node, then for each CSS text box produced by node,
//     in content order, compute the text of the box after application of the
//     CSS `white-space` processing rules and `text-transform` rules, set
//     items to the list of the resulting strings, and return items.
//     The CSS `white-space` processing rules are slightly modified:
//     collapsible spaces at the end of lines are always collapsed, but they
//     are only removed if the line is the last line of the block, or it ends
//     with a br element.
//     Soft hyphens should be preserved.
//
//     Note: See `collectText` and `collectPreText`.
//     Note: we don’t deal with `text-transform`, no element has that by
//     default.
//
// See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
function collectText(node, options) {
  var breakBefore = options.breakBefore
  var breakAfter = options.breakAfter
  var value = String(node.value)
  var index = -1
  var length = value.length
  var lines = []
  var result = []
  var lineStart
  var lineEnd
  var line
  var nextLine
  var queue

  lineStart = 0
  lineEnd = value.indexOf(lineFeedChar)
  lineEnd = lineEnd === -1 ? value.length : lineEnd

  while (lineEnd !== -1) {
    line = value.slice(lineStart, lineEnd)

    // [...] ignoring bidi formatting characters (characters with the
    // Bidi_Control property [UAX9]) as if they were not there.
    line = removeBidiControlCharacters(line)

    // Any sequence of collapsible spaces and tabs immediately preceding or
    // following a segment break is removed.
    line = trimAndcollapseSpacesAndTabs(line, breakBefore, breakAfter)

    // Add the line.
    lines.push(line)

    // Stop.
    if (lineEnd === value.length) {
      break
    }

    lineStart = lineEnd + 1
    lineEnd = value.indexOf(lineFeedChar, lineStart)
    lineEnd = lineEnd === -1 ? value.length : lineEnd
  }

  index = -1
  length = lines.length
  queue = ''

  // Collapsible segment breaks are transformed for rendering according to the
  // segment break transformation rules.
  // So here we jump to 4.1.2 of [CSSTEXT]:
  // Any collapsible segment break immediately following another collapsible
  // segment break is removed
  while (++index < length) {
    line = lines[index]
    nextLine = lines[index + 1] || ''

    // *   If the character immediately before or immediately after the segment
    //     break is the zero-width space character (U+200B), then the break is
    //     removed, leaving behind the zero-width space.
    if (
      line.charCodeAt(line.length - 1) === zeroWidthSpace ||
      nextLine.charCodeAt(0) === zeroWidthSpace
    ) {
      result.push(line)
      queue = ''
      continue
    }

    // *   Otherwise, if the East Asian Width property [UAX11] of both the
    //     character before and after the segment break is Fullwidth, Wide, or
    //     Halfwidth (not Ambiguous), and neither side is Hangul, then the
    //     segment break is removed.
    //
    //     Note: ignored.

    // *   Otherwise, if the writing system of the segment break is Chinese,
    //     Japanese, or Yi, and the character before or after the segment break
    //     is punctuation or a symbol (Unicode general category P* or S*) and
    //     has an East Asian Width property of Ambiguous, and the character on
    //     the other side of the segment break is Fullwidth, Wide, or Halfwidth,
    //     and not Hangul, then the segment break is removed.
    //
    //     Note: ignored.

    // *   Otherwise, the segment break is converted to a space (U+0020).
    if (line) {
      if (queue) {
        result.push(queue)
      }

      result.push(line)
      queue = spaceChar
    }
  }

  return result.join('')
}

function collectPreText(node) {
  return String(node.value)
}

function removeBidiControlCharacters(value) {
  var index = -1
  var length = value.length
  var result = ''

  while (++index < length) {
    if (isBidiControlCharacter(value.charCodeAt(index))) {
      continue
    }

    result += value.charAt(index)
  }

  return result
}

// 3.  Every collapsible tab is converted to a collapsible space (U+0020).
// 4.  Any collapsible space immediately following another collapsible
//     space—even one outside the boundary of the inline containing that
//     space, provided both spaces are within the same inline formatting
//     context—is collapsed to have zero advance width. (It is invisible,
//     but retains its soft wrap opportunity, if any.)
function trimAndcollapseSpacesAndTabs(value, breakBefore, breakAfter) {
  var start = 0
  var end
  var length = value.length
  var result = []
  var char

  // Move forward past initial white space.
  while (start <= length) {
    char = value.charCodeAt(start)

    if (char !== space && char !== tab) {
      break
    }

    start++
  }

  // If we’re not directly after a segment break, but there was white space,
  // add an empty value that will be turned into a space.
  if (start !== 0 && !breakBefore) {
    result.push('')
  }

  end = next(start - 1)

  while (start < length) {
    end = end === -1 ? length : end
    result.push(value.slice(start, end))
    start = end

    while (start <= length) {
      char = value.charCodeAt(start)

      if (char !== space && char !== tab) {
        break
      }

      start++
    }

    // If we reached the end, there was trailing white space, and there’s no
    // segment break after this node, add an empty value that will be turned
    // into a space.
    if (start === length && start !== end && !breakAfter) {
      result.push('')
    }

    end = next(start)
  }

  return result.join(' ')

  function next(index) {
    var spaceIndex = value.indexOf(spaceChar, index + 1)
    var tabIndex = value.indexOf(tabChar, index + 1)
    var fn = spaceIndex === -1 || tabIndex === -1 ? max : min
    return fn(spaceIndex, tabIndex)
  }
}

// We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
function inferWhiteSpace(node, options) {
  var props = node.properties || {}
  var inherit = options.whiteSpace || 'normal'

  switch (node.tagName) {
    case 'listing':
    case 'plaintext':
    case 'xmp':
      return 'pre'
    case 'nobr':
      return 'nowrap'
    case 'pre':
      return props.wrap ? 'pre-wrap' : 'pre'
    case 'td':
    case 'th':
      return props.noWrap ? 'nowrap' : inherit
    case 'textarea':
      return 'pre-wrap'
    default:
      return inherit
  }
}

function isBidiControlCharacter(char) {
  switch (char) {
    case alm:
    case ltr:
    case rtl:
    case lre:
    case rle:
    case pdf:
    case lro:
    case rlo:
    case lri:
    case rli:
    case fsi:
    case pdi:
      return true
    default:
      return false
  }
}

function cell(node) {
  return is(node, ['th', 'td'])
}

function row(node) {
  return is(node, ['tr'])
}

// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
function blockOrCaption(node) {
  return is(node, [
    'caption', // `table-caption`
    // Page
    'html',
    'body',
    // Flow content
    'address',
    'blockquote',
    'center', // Legacy
    'dialog',
    'div',
    'figure',
    'figcaption',
    'footer',
    'form,',
    'header',
    'hr',
    'legend',
    'listing', // Legacy
    'main',
    'p',
    'plaintext', // Legacy
    'pre',
    'xmp', // Legacy
    // Sections and headings
    'article',
    'aside',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hgroup',
    'nav',
    'section',
    // Lists
    'dir', // Legacy
    'dd',
    'dl',
    'dt',
    'menu',
    'ol',
    'ul'
  ])
}

// Note that we don’t need to include void elements here as they don’t have text.
//
// See: <https://github.com/wooorm/html-void-elements>
function notRendered(node) {
  var properties = node.properties || {}

  return (
    // List from: <https://html.spec.whatwg.org/#hidden-elements>
    is(node, [
      'datalist',
      'head',
      'noembed',
      'noframes',
      'rp',
      'script',
      'style',
      'template',
      'title',
      // Act as if we support scripting.
      'noscript'
    ]) ||
    // Hidden attribute.
    properties.hidden ||
    // From: <https://html.spec.whatwg.org/#flow-content-3>
    (is(node, 'dialog') && !properties.open)
  )
}
