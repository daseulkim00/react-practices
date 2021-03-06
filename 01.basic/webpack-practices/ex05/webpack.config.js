const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetsModuleFileName: 'assets/images/[hash][ext]'
    },
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader' , 'css-loader', 'sass-loader']   // 순서가 중요함
        }
    
    ]
    },
    devServer:{
        // contentBase: path.resolve('public'),
        host:'0.0.0.0',
        port:9999,
        // inline:true,
        liveReload: true,
        hot: false,
        compress:true

    }
}