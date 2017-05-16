const base = require('../base/base');
const files = require('../base/files');
const path = require('path');

module.exports = {
    alias: {
        'lib': path.resolve(files.staticPath, 'index.js'),
        'css': path.resolve(files.cssPath, 'index.' + base.cssType),
        'jquery': path.resolve(files.staticPath, 'tools', 'jquery.min.js'),
        'bootstrap': 'bootstrap-sass',
    },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
};
