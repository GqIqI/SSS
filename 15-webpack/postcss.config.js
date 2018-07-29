module.exports = {
    plugins:[
        require('autoprefixer')
    ],
    module:{
            rules:[
                     {   //c3前缀
                        
                        test:/\.css$/,
                        use:ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [{loader:"css-loader",
                            options:{importLoader:1 }
                        },'postcss-loader']
                         })
                     }
                  ]
  
  
             }
}


