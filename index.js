var mercury = require('mercury');
var h = mercury.h;

function Tag (options) {
  options = options || {};
  var config = options.config || {};
  var model = options.model || {};

  if (options.config.responsive) {
    var viewport = {};
    viewport.Name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1';
    model = viewport;
  }

  var state = mercury.struct({
    config: mercury.struct(config),
    model: mercury.struct(model)
  });

  return {state: state}

};

Tag.render = function(state) {
  console.log('state', state)
  return h('meta', {
    name: state.model.Name,
    content: state.model.content,
  });
}

module.exports = Tag;