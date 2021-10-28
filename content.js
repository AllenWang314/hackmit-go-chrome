(function() {
  'use strict';

  findAndReplaceDOMText(document.body, {
    preset: 'prose',
    find: /\bp\/([0-9a-z-]+)\b/,
    filterElements: function(elt) {
      // don't mess with existing links
      if (elt.tagName === 'A') {
        return false;
      } else {
        return true;
      }
    },
    replace: function(portion, match) {
      var a = document.createElement('a');
      a.href = 'https://mitpokerclub.herokuapp.com/' + match[1];
      a.innerText = 'p/' + match[1];
      return a;
    },
  });

}());
