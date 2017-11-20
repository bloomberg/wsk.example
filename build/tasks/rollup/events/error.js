var notify = require('wsk').notify;
var cleanupOutPath = require('../helpers/cleanupOutPath');

module.exports = function (event, fileConfig) {
  notify({
    message: 'Error compiling JS...',
    value: cleanupOutPath(event, fileConfig),
    display: 'error',
    error: event.error || undefined
  });
};
