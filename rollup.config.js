import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';

export default {
  moduleName: 'text_utilities',
  entry: 'index.js',
  format: 'umd',
  plugins: [ json(), buble() ],
  dest: 'distribution/text-utilities.umd-es2015.js'
};