#!/usr/bin/env node

var path = require('path')
var funnel = require('../lib')
var template = process.argv[2]
var object_path = process.argv[3]
if (template) {
  template = require(path.resolve('.', template))
}
var spacing = process.argv[4]

funnel(process.stdin, template, object_path, function (err, result) {
  if (err) {
    console.log('Error: ', err)
    process.exit(1)
  }
  if (spacing) console.log(JSON.stringify(result, null, Number(spacing)))
  else console.log(JSON.stringify(result))
})
