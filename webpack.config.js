var pathUtil = require('./tasks/utils/path.util');
var pkg = require('./package.json');

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.response$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                include: [
                    pathUtil.resolve('src/main/webapp'),
                    pathUtil.resolve('src/test/js/unit/shared/css')
                ],
                exclude: [
                    /node_modules/
                ],
                loader: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    useRelativePath: true,
                    publicPath: './',
                    name: '[name].[ext]'
                }
            },
            {
                // ignore ext-all and ext-base.js cause it will be serve from karma.conf.js for global level
                test: /[.\w\/\\]*ext-(base|all)\.js$/,
                include: [
                    pathUtil.resolve('src/main/webapp/js/ext'),
                    pathUtil.resolve('src/main/webapp/js/adapter')
                ],
                loader: 'ignore-loader'
            },
            {
                enforce: 'post',
                test: /\.js$/,
                include: [
                    pathUtil.resolve('src/main/webapp')
                ],
                exclude: [
                    /node_modules/,
                    /build/,
                    /ext/,
                    /extended/
                ],
                loader: 'istanbul-instrumenter-loader'
            }
        ]
    }
};
