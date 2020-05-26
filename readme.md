# Swup Preserve Scroll Plugin

This is a plugin for [swup](https://swup.js.org/) - complete, flexible, extensible and easy to use page transition library for your web.

## Installation

This plugin can be installed with npm

```bash
npm install swup-preserve-scroll-plugin
```

and included with import

```javascript
import SwupPreserveScrollPlugin from 'swup-preserve-scroll-plugin';
```

or included from the dist folder

```html
<script src="./dist/SwupPreserveScrollPlugin.js"></script>
```

## Usage

To run this plugin, include an instance in the swup options.

```javascript
const swup = new Swup({
  plugins: [new SwupPreserveScrollPlugin()]
});
```
