// const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const Visualizer = require('webpack-visualizer-plugin');

let config = require('./webpack.config.js')({
    dev: false,
});

/** --------------------
 * 打包资源，性能分析
 * */
if (process.env.NODE_TEST === 'production') {
    config.plugins.push(
        new Visualizer({
            filename: './statistics.html',
        })
    )
}

module.exports = merge(config, {
    plugins: [
        new WebpackMd5Hash(),
    ],
});
