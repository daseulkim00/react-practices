const path = require('path');

module.exports = {
    mode:'development',
    entry: path.resolve('src/index.js'),
    output:{
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,
            use:['style-loader' , 'css-loader', 'sass-loader']   // 순서가 중요함
        },{
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,   //jpg 도되고 jpge도되고
            type: 'asset/resource'
        }]
    },
    devtool:"eval-source-map", // 번들링이랑 우리 원래소스랑 연결시켜주는 설정?
    devServer:{
        host:'0.0.0.0',
        port:9999,
        liveReload: true,
        hot: false,
        compress:true,
        historyApiFallback:true

    }
}