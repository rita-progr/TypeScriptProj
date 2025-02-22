import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import buildCssLoader from "./loaders/buildCssLoader";

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
                presets: ['@babel/preset-env']
            }
        }
    }

    const typesStyles = buildCssLoader(options.isDev)

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