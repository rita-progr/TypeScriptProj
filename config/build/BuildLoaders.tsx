import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

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

    const typescriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    return [
        typescriptLoader,
        typesStyles,
        svgLoader,
        fileLoader
    ]
}