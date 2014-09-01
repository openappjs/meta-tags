var mercury = require('mercury');
var h = mercury.h;

var Tag = require('../');

tag = Tag({
  config: {
    responsive: true
  },
});



mercury.app(document.head, tag.state, Tag.render);