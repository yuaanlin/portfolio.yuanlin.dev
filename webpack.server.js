const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
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
    externals: [webpackNodeExternals()],
};
