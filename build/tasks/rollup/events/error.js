var writeErrorToJs = require('../helpers/writeErrorToJs');
var printError = require('../helpers/printError.js');

module.exports = function (event, fileConfig) {
  writeErrorToJs(fileConfig.output.file, event.error);
  printError(event.error);
};
