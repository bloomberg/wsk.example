var fs = require('fs');
var notify = require('wsk').notify;

module.exports = function (outPath, error) {
  fs.writeFile(outPath, 'console.error("' + error + '")', function (err) {
    if (err) {
      notify({
        message: 'Error writing file',
        value: outPath,
        display: 'error',
        error: err
      });
    } else {
      notify({
        message: 'Error rolling up JS...',
        value: outPath,
        display: 'error',
        error: err
      });
    }
  });
};
