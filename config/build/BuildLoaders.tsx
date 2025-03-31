import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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


    const BabelLoader = {
        test: /\.m?(ts|js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                // @ts-ignore
                plugins: [options.isDev && require.resolve('react-refresh/babel')].filter(Boolean)
            }
        }
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
        BabelLoader,
        typescriptLoader,
        typesStyles,
        svgLoader,
        fileLoader
    ]
}