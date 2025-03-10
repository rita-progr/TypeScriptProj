import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import buildCssLoader from "../build/loaders/buildCssLoader";

export default ({config}:{config:webpack.Configuration})=>{

    const paths:BuildPaths = {
        html:' ',
        entry: ' ',
        build: ' ',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }


    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules = config.module.rules.map((rule:RuleSetRule)=>{
        if(/svg/.test(rule.test)){
            return {...rule, exclude: /\.svg$/i};
        }
        return rule;
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    config.resolve.alias = {
        ...config.resolve.alias,
        entities: path.resolve(__dirname, '../../src/entities'),
        features: path.resolve(__dirname, '../../src/features'),
        shared: path.resolve(__dirname, '../../src/shared'),
        pages: path.resolve(__dirname, '../../src/pages'),
        widgets: path.resolve(__dirname, '../../src/widgets'),
    };

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true), // Установите значение true для режима разработки
        })
    );

    config.module.rules.push(buildCssLoader(true));

    return config;
};