nw.js-external-linker [![Gittip](http://img.shields.io/gittip/kethinov.png)](https://www.gittip.com/kethinov/)
===

A plugin for [nw.js](https://github.com/nwjs/nw.js) which forces all external links to open in the user's default browser outside your app.

Installation
===

Either download the file from here or use [bower](http://bower.io/):

```
bower install nw.js-external-linker.js
```

Initialization
===

Include the file in your nw.js app:

```html
<script>
  global.window = window; // needed by externally linked scripts
</script>
<script src='bower_components/nw.js-external-linker.js/nw.js-external-linker.js'></script>
```

Usage
===

Once the script is loaded, all external links will automatically be opened in the user's default browser.

The script scans for:

- `rel='external'`
- `target='_blank'`
- `target='_top'`
- Links beginning with `http`

Links not meeting that criteria are assumed to not be external links.

Override
---

You can override this behavior by specifying `target='_self'` in your links.