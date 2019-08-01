var Linter = require('standard-engine').linter
var opts = require('./options.js')
module.exports = new Linter(opts)

function do (stuff) {
    console.log("so stuff")
}