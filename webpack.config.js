const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV || 'development' 
const devMode = mode === 'development' 
const target = devMode ? 'web' : 'browserslist' 
const devtool = devMode ? 'inline-source-map' : undefined 

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.tsx')], 
    mode,
    target,
    devtool,
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.img', '.jpg', '.svg'],
        alias: {
            '@' : path.resolve(__dirname, 'src'),
            '@UI' : path.resolve(__dirname, 'src/components/UI'),
            '@images' : path.resolve(__dirname, 'src/assets/images'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'public'),   
        clean: true,                              
        filename: '[name].[contenthash].js',        
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html') 
        }),
        new MiniCssExtractPlugin({ 
            filename: '[name].[contenthash].css' 
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader", 
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: { 
                    filename: 'fonts/[name][ext]' 
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                use: 'json-loader',
            },
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            }
        ],
    },
} 