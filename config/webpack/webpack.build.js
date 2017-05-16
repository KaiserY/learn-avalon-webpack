const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
    );
}

module.exports = merge(config, {
    plugins: [
        new WebpackMd5Hash(),
        new UglifyJSPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module'],
                screw_ie8: false,
            },
            mangleProperties: {
                screw_ie8: false,
            },
            compress: {
                warnings: false,
                screw_ie8: false,
            },
            output: {
                comments: true,
                screw_ie8: false,
            },
        }),
    ],
});
