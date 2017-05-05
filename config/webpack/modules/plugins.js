const base = require('../base/base');
const files = require('../base/files');
const path = require('path');
const HappyPack = require('happypack');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function cHappypack(id, loaders) {
    return new HappyPack({
        id: id,
        debug: false,
        verbose: false,
        cache: true,
        threads: 4,
        cacheContext: {
            env: process.env.NODE_ENV,
        },
        loaders: loaders,
    });
}

module.exports = [
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{
        from: path.join(files.staticPath, 'patch/ie8'),
        to: 'assets/ie8',
    }]),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
            postcss: base.cssType === 'pcss' ? [
                require('postcss-cssnext')(({
                    features: {
                        customProperties: false,
                    },
                })),
            ] : [require('autoprefixer')({
                browsers: ['> 1%', 'last 5 versions', 'Firefox ESR'],
                cascade: false,
            })],
        },
    }),
    cHappypack('HTML', ['html-loader']),

    cHappypack('ES3', ['es3ify-loader']),

    cHappypack('JSX', [{
        loader: 'babel-loader',
        query: require('./babel'),
    }]),
];
