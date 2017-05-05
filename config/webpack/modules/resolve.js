const base = require('../base/base');
const files = require('../base/files');
const path = require('path');

module.exports = {
    alias: {
        'lib': path.resolve(files.staticPath, 'index.js'),
        'css': path.resolve(files.cssPath, 'index.' + base.cssType),
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
};
