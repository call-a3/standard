const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  // homepage, version and bugs pulled from package.json
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint, // pass any version of eslint >= 7.0.0
  cmd: 'standard', // should match the "bin" key in your package.json
  tagline: "Code by Adriaan Callaerts' standards!", // displayed in output --help
  eslintConfig: {
    overrideConfigFile: path.join(__dirname, 'eslintrc.json')
  },
}
