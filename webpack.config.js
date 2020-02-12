module.exports = {
    entry: './bin/js/index.js',
    devtool: 'source-map',
    mode: 'production',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'FortressOfEvil.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    }
}
