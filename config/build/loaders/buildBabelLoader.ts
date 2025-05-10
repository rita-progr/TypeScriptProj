import {BuildOptions} from "../types/config";

interface BuildLoadersOptions extends BuildOptions{
    isTsx: boolean
}


export const buildBabelLoader = ({isDev, isTsx}:BuildLoadersOptions) => {

    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/ ,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        "@babel/plugin-transform-runtime",
                    ],
                    [
                        "@babel/plugin-transform-typescript",
                        {
                            isTsx
                        }
                    ],
                    // @ts-ignore
                    isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}