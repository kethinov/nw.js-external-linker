;(function() {
  var gui = require('nw.gui');

  function externalLinker(e) {
    var link = e.target, rel, target, href = link.href;
    
    if (!link.getAttribute) {
      return;
    }
    
    rel = link.getAttribute('rel');
    target = link.getAttribute('target');
    
    if (target === '_self') {
      return;
    }

    if (rel === 'external' || target === '_blank' || target === '_top' || href.substr(0, 4) === 'http') {
      e.preventDefault();
      gui.Shell.openExternal(href);
    }
  }

  window.removeEventListener('click', externalLinker, false);
  window.addEventListener('click', externalLinker, false);
})();