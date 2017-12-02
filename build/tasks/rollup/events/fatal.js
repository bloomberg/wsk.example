var notify = require('wsk').notify;
var cleanupOutPath = require('../helpers/cleanupOutPath');
var printError = require('../helpers/printError.js');

module.exports = function (event, fileConfig) {
  var filePath = cleanupOutPath(event, fileConfig);
  notify({
    message: 'Fatal error compiling JS...',
    value: filePath,
    display: 'error'
  });
  printError(event.error, function () {
    // process.exit(1);
  });
};
