const HtmlWebPackPlugin = require('html-webpack-plugin');

// Rules
const JSRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        'babel-loader',
        'eslint-loader',
    ],
};

const SASSRule = {
    test: /\.scss$/,
    use: [
        { loader: 'style-loader' },
        {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64:5]',
                sourceMap: true,
                minimize: true,
            },
        },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
    ],
};

const ImagesRule = {
    test: /\.(png|jpg)$/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 25000,
        },
    },
};

const LESSRule = {
    test: /\.less$/,
    use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader' },
    ],
};

// Plugins
const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            'react-dev-utils/webpackHotDevClient',
            './src/index.js',
        ],
    },
    module: { rules: [JSRule, SASSRule, LESSRule, ImagesRule] },
    plugins: [htmlPlugin],
    devServer: {
        historyApiFallback: true,
    },
};
