const path = require('path');
const buble = require('rollup-plugin-buble');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const less = require('less');
const string = require('rollup-plugin-string');
const autoprefixer = require('autoprefixer');
const json = require('rollup-plugin-json');
const {cssUrl } = require('@sixian/css-url')  

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}
const isProductionEnv = process.env.NODE_ENV === 'production';

const processLess = function (context, payload) {
  return new Promise((resolve, reject) => {
    less.render({
      file: context
    }, function (err, result) {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });

    less.render(context, {})
      .then(function (output) {
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
        if (output && output.css) {
          resolve(output.css);
        } else {
          reject({})
        }
      },
        function (err) {
          reject(err)
        });

  })
}

const babelOptions = {
  "presets": [
    ["env", {
      "modules": false
    }],
  ],
  "plugins": [
    "transform-object-rest-spread",
  ],
  exclude: 'node_modules/**' // 只编译我们的源代码
}

module.exports = [
  {
    input: resolveFile('src/index.js'),
    output: {
      file: resolveFile('dist/customkeyboard.js'),
      format: 'umd',
      name: 'CustomKeyboard',
    },
    plugins: [
      json(),
      postcss({
        extract: true,
        minimize: isProductionEnv,
        process: processLess,
        plugins: [
          autoprefixer({
          // browsers: [
          //   'last 10 Chrome versions',
          //   'last 5 Firefox versions',
          //   'Safari >= 6', 
          //   'ie> 8'
          // ] 
        }),
        cssUrl({
          imgOutput: 'dist/imgs',
          fontOutput: 'dist/font',
          cssOutput: 'dist/style',
        }),
      ]
      }),
      string({
        include: 'src/**/*.art'
      }),
      nodeResolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      babel(babelOptions),
      buble(),

    ],
    external: ['jquery','mathquill-jquery','mathjs'],
    globals: {
      'jquery' : '$',
      'mathjs' : 'math',
      'mathquill-jquery' : 'MathQuill'
    }
  },
]