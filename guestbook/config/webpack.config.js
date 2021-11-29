const path = require('path');

module.exports = (env) => {

    const entry = path.resolve(`src/index.js`);
    
    return{
        mode:'development',
        entry: path.resolve(`src/index.js`),   // 환경변수로 셋팅함 환경변수로 설정할려면 패키지.json에 --env를 적어줘야한다.
        output:{
            path: path.resolve('public'),
            filename: 'bundle.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',   // 순서가 중요함
                options: {
                    configFile: path.resolve('config/babel.config.json')
                } 
            },{
                test: /\.(sa|sc|c)ss$/i,
                use:[
                    'style-loader', 
                    {loader: 'css-loader', options: {modules: false} }, 
                    'sass-loader'
                ]
            },{
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
}