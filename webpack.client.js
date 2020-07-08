const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    target: "node",
    entry: "./src/client/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css"],
    },
    plugins: [new CleanWebpackPlugin()],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/assets/js"),
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /.ts$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/typescript",
                            "@babel/preset-env",
                        ],
                    },
                },
            },
            {
                test: /.tsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/typescript",
                            "@babel/preset-react",
                            "@babel/preset-env",
                        ],
                    },
                },
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
