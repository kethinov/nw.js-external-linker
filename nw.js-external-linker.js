;(function() {
  var gui;

  if (typeof process !== 'undefined' && typeof require !== 'undefined') {
    gui = require('nw.gui');
    window.removeEventListener('click', externalLinker, false);
    window.addEventListener('click', externalLinker, false);
  }

  function externalLinker(e) {
    var link = e.target,
        rel, // declared now, defined later
        target = link.target,
        href = link.href;

    // abort link hijack if crucial variables are not defined or if user sets link to target='_self'
    if (!link || !link.getAttribute || !href || target === '_self') {
      return;
    }

    // defined now that we know that link.getAttribute is not undefined
    rel = link.getAttribute('rel');

    // hijack the link and open in a new window under these conditions
    if (rel === 'external' || target === '_blank' || target === '_top' || href.substr(0, 4) === 'http') {
      e.preventDefault();
      gui.Shell.openExternal(href);
    }
  }
})();