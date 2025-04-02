import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {BuildLoaders} from "./BuildLoaders";
import {BuildResolvers} from "./BuildResolvers";
import {BuildPlugins} from "./BuildPlugins";
import {BuildDevServer} from "./BuildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: BuildLoaders(options)
        },
        devtool: isDev ? 'inline-source-map': undefined,
        resolve: BuildResolvers(options),
        output:{
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
            publicPath: '/'
        },
        plugins: BuildPlugins(options),
        devServer: isDev ? BuildDevServer(options) : undefined
    }
}