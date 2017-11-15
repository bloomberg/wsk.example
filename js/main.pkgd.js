(function () {
'use strict';

function enable(id) {
  var btn = document.getElementById(id);
  var trg = document.getElementById(id + '-target');

  function toggle() {
    var open = this.nodeName === 'DIV' ? this.getAttribute('data-open') === 'true' : true;
    btn.setAttribute('data-open', !open);
    trg.setAttribute('data-open', !open);
  }

  btn.addEventListener('click', toggle);

  var sects = trg.getElementsByTagName('a');

  for (var i = 0; i < sects.length; i++) {
    sects[i].addEventListener('click', toggle);
  }
}

/* --------------------------------------------
 *
 * Write your JavaScript here.
 *
 * It will get rolled up. On `build`, it gets minified.
 * --------------------------------------------
 */

// Here's an example of loading a module
enable('sidebar-button');

}());
//# sourceMappingURL=main.pkgd.js.map
