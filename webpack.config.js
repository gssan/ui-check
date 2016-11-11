var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './demo/'),
        filename: 'check.dev.js',
        library: 'R',
        libraryTarget: 'umd'
    },
    externals: {
        'regularjs': {
            root: "Regular",
            amd: "Regular",
            commonjs: "regularjs",
            commonjs2: "regularjs"
        }
    },
    module: {
        loaders: [
            { test: /\.rgl$/, loader: 'rgl' },
            { test: /\.js$/, exclude: /node_modules\/(?!rgui-)|dev\.js/,  loader: 'babel' }
        ]
    }
}
