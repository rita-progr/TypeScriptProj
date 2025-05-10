import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildBabelLoader} from "./loaders/buildBabelLoader";


export function BuildLoaders(options:BuildOptions):webpack.RuleSetRule[] {


    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }

    const codeBabelLoader = buildBabelLoader({...options, isTsx : false})
    const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx : true})

    const typesStyles = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath:string)=>Boolean(resPath.includes(".module.")),
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "hash:base64:8",
                    },
                }
            },
            "sass-loader",
        ],
    }

    // const typescriptLoader = {
    //         test: /\.tsx?$/,
    //         use: 'ts-loader',
    //         exclude: /node_modules/,
    //     }
    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        typesStyles,
        svgLoader,
        fileLoader
    ]
}