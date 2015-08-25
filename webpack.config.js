module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/static/build/',
        filename: "index.js",
        publicPath: "static/build/"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "react-hot!babel", exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: "babel", exclude: [/node_modules/, /public/] }
        ]
    }
};