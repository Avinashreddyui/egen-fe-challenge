var path = require('path');
var webpack = require('webpack');

module.exports={
    entry:[
        './src/main.jsx'
    ],
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    module:{
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/Assets/pinImage.png"}

        ]
    },
};