'use strict';

// 把 po 文件转换成一个空对象
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process() {
    return 'module.exports = { "": {} };';
  },
  getCacheKey() {
    // The output is always the same.
    return 'poTransform';
  },
};
