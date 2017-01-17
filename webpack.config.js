let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');

let plugins = [
    new webpack.ProvidePlugin({   
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
];

if(!debug) {
    plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]);
}

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./scripts/main.js",
  output: {
    path: __dirname + "/scripts",
    filename: "bundle.min.js"
  },
  plugins: plugins
};