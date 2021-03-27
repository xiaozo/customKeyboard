import url from "rollup-plugin-url"
const { uglify } = require('rollup-plugin-uglify');
const configList = require('./rollup.config');
const path = require('path');

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

configList.map((config, index) => {

  config.output.sourcemap = false;
  config.output.file = resolveFile('dist/custom-min-keyboard.js'),
  config.plugins = [
    ...config.plugins,
    ...[
      uglify(),
      url()
    ]
  ]

  return config;
})

module.exports = configList;