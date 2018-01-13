var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports =  {
    entry:'./src/script.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.less$/,
                use:ExtractTextWebpackPlugin.extract({
                        fallback:'style-loader',
                        use: ['css-loader', 'less-loader'],
                        publicPath: '/dist'
                    })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Custom Template",
            // minify:{collapseWhitespace:true},
            // hash:true,
            template:"./src/index.ejs"
        }),
        new ExtractTextWebpackPlugin({
            filename:"app.css",
            allChunks: true
        })
    ]
}