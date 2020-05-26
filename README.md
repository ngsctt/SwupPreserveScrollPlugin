# Swup Preserve Scroll Plugin

This is a plugin for [swup][] — complete, flexible, extensible and easy to use page transition library for your web.

Using this plugin, when swup replaces page content, any elements matching a selector (`.swup-preserve-scroll` by default) will have their current scroll position preserved, and reimposed on their replacement element.

## Installation

This plugin can be installed with npm

```bash
npm install @ngsctt/swup-preserve-scroll-plugin
```

and included with import

```javascript
import SwupPreserveScrollPlugin from '@ngsctt/swup-preserve-scroll-plugin';
```

or included from the dist folder

```html
<script src="./dist/SwupPreserveScrollPlugin.js"></script>
```

## Usage

To run this plugin, include an instance in the swup options:

```javascript
const swup = new Swup({
  plugins: [new SwupPreserveScrollPlugin()]
});
```

To customise the options, pass an object to the plugin:

```javascript
const options = {
  selector: '.swup-preserve-scroll',
  quiet: false
};
const swup = new Swup({
  plugins: [new SwupPreserveScrollPlugin(options)]
});
```

### Options

`options.selector`: The query selector used to get the elements on the page which the plugin will replace. Defaults to `'.swup-preserve-scroll'`.

`options.quiet`: If set to `true`, suppresses warnings about missing `id` attributes, or about no elements on the page matching `options.selector`. Defaults to `false`.

### Important note
Each element that matches `options.selector` ***MUST*** have an [`id` attribute][mdn id] set in order for the plugin to work on that element. If it doesn't, the plugin will throw a warning (unless `options.quiet` is set to `true`).


[swup]:   https://swup.js.org/
[mdn id]: https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id