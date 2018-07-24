const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob=require('glob');
const PurifyCSSPlugin= require('purifycss-webpack');
const webpack=require('webpack');
const entry=require('./webpack_config/entry_webpack.js');
var CopyWebpackPlugin=require('copy-webpack-plugin');
module.exports = {
    mode:"development",
    entry:entry,  //入口文件    js文件
    output:{//出口文件
        path:path.resolve(__dirname,'dist'),  //必须用绝对路径
        filename:'[name].js',
        publicPath:'http://localhost:8080/' //图片
    },
    module:{ //模板  为了解决各种css解读  图片转换  压缩等
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },"postcss-loader"]
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'5000',
                            outputPath:'images/'
                        }
                    }
                ]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                    fallback: "style-loader",
                })
            },
            {
                test:/\.js$/,
                use:[
                      {
                        loader:'babel-loader',
                        options:{
                            presets:["env"]
                                }
                      }  
                   ],
                   exclude:/node_modules/
            }
        ]
    },
    plugins:[  //插件 用于生产模板和各项功能
        new HtmlPlugin({
            template:'./src/aa.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename:'a.html',
            // title:'title1',
            chunks:['index']
        }),
        // new ExtractTextPlugin("css/styles.css"),
        new ExtractTextPlugin("css/index.css"),
        new PurifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('翻版必究'),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),

        new CopyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
    ],
    devServer:{//热更新
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        // compress:true,
        open:true

    },
    watchOptions:{ //实时监测
        poll:1000,
        aggregeateTimeout:500,
        ignored:/node_modules/,
    }
}