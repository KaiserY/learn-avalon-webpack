const base = require('./base/base.js');
const files = require('./base/files');
const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');

let config = require('./webpack.config.js')({
    dev: true,
});

module.exports = merge(config, {
    devtool: 'inline-source-map', // inline-source-map.cheap-source-map
    stats: { // 控制台统计
        minimal: true, // 只有在发生错误或新编译时才输出
    },
    performance: { // 关闭hot更新导致文件过大提示
        hints: false, // 性能提示[warning,error,false]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: base.devHost,
            port: base.devPort,
            server: {
                baseDir: [files.buildName],
            },
            // proxy: 'http://localhost:' + base.devPort,
        }),
        // new DashboardPlugin(new Dashboard({
        //     color: '#fbbc05',
        //     minimal: true,
        //     port: base.devPort,
        // }).setData),
    ],
});
