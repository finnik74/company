const HtmlWebpackPlugin = require("html-webpack-plugin")
const {resolve} = require("path");

module.exports = {
    entry: "./src/main.js",
    output:{
        filename:"bundle.js",
        path: resolve(__dirname,"dist")
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    // 配置插件
    plugins:[
        // 配置 处理html插件
        new HtmlWebpackPlugin()
    ],
    mode:"development"
}
