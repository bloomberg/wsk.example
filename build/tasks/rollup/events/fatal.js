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
    // If there's an error on initial build, the watch doesn't initiate
    // Hopefully this is fixed in the future
    // https://github.com/rollup/rollup/issues/1773
    notify({
      message: 'Unfortunately, Rollup has failed. Please ctrl-c and run your build again.',
      display: 'warn'
    });
  });
};
