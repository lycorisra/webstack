module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        // library: "index",
        // libraryTarget: 'amd'
    },
    resolveLoader: {
        alias: { 
            'text': 'raw-loader',  
            'css':  'raw-loader'
        }
    },
    devtool: 'source-map',
};