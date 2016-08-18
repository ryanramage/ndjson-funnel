var set = require('lodash.set')
var ndjson = require('ndjson')
var concat = require('concat-stream')

module.exports = function (stream, obj, path, cb) {
  stream
    .on('error', cb)
    .pipe(ndjson.parse())
    .on('error', cb)
    .pipe(concat({encoding: 'object'}, function (rows) {
      if (!obj) return cb(null, rows)
      if (!path) {
        obj.rows = rows
        return cb(null, obj)
      }
      set(obj, path, rows)
      cb(null, obj)
    }))
}
