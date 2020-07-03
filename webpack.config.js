const path = require('path');

module.exports = {

    entry: {
        app: path.resolve(__dirname, 'src/index.ts')
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.s[ac]ss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}