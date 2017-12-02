var fs = require('fs');
var notify = require('wsk').notify;
var buf = 3;

module.exports = function ({ code, loc, id, message }, cb) {
  console.error(message);
  fs.readFile(id, 'utf-8', function (err, data) {
    if (err) {
      notify({
        message: 'Error reading file',
        value: id,
        error: err
      });
    } else {
      let lines = data.split('\n').map(d => '\t' + d);
      let peak = lines.slice(min(loc.line, buf), max(loc.line, 0, lines));
      console.error('\n' + peak.join('\n'));
      let arrow = Array.from(Array(loc.column + 1)).join(' ') + '^';
      console.error('\t' + arrow);
    }
    if (cb) {
      cb();
    }
  });
};

function min (val, difference) {
  var min = val - difference;
  return min < 0 ? 0 : min;
}

function max (val, difference, arr) {
  var max = val + difference;
  return max >= arr.length ? arr.length : max;
}
