node-webkit-external-linker [![Gittip](http://img.shields.io/gittip/kethinov.png)](https://www.gittip.com/kethinov/)
===

A plugin for [node-webkit](https://github.com/rogerwang/node-webkit) which forces all external links to open in the user's default browser outside your app.

Installation
===

Either download the file from here or use [bower](http://bower.io/):

```
bower install node-webkit-external-linker.js
```

Initialization
===

Include the file in your node-webkit app:

```html
<script>
  global.window = window; // needed by externally linked scripts
</script>
<script src='bower_components/node-webkit-external-linker.js/node-webkit-external-linker.js'></script>
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

License
===

All original code in this library is licensed under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0)</a>. Commercial and noncommercial use is permitted with attribution.