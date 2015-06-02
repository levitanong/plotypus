var bourbon = require('node-bourbon').includePaths;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var baseConfig = function(options) {
  var plugins = [];
  var styleLoaders = [
    { test: /\.css$/, loader: "css" },
    { test: /\.s(a|c)ss$/, loader: "css!sass?includePaths[]="+bourbon }
  ];
  styleLoaders.forEach(function(item) {
    // if array normalize to string
    if(Array.isArray(item.loader)) {
      item.loader = item.loader.join("!");
    }

    if(options.production || options.docs) {
      item.loader = ExtractTextPlugin.extract('style-loader', item.loader);
    } else {
      item.loader = 'style!'+item.loader;
    }
  });

  plugins.push(new webpack.DefinePlugin({
    "__production": options.production,
  }));

  if(options.production || options.prerender || options.docs) {
    plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
    );
  }

  var cssPlugin = new ExtractTextPlugin("bundle.css");
  if(options.production || options.docs) {
    plugins.push(cssPlugin);
  }

  var entry;
  if (options.production) {
    entry = {
      "lib": "./src/js/Plotypus.jsx"
    }
  } else {
    entry = {
      "docs": "./docs/js/index.jsx"
    }
  }

  return {
    __extra: {
      cssPlugin: cssPlugin
    },
    // entry: "./docs/js/index.jsx",
    // output: {
    //   path: __dirname,
    //   filename: "bundle.js"
    // },
    entry: entry,
    output: {
      path: 'build',
      publicPath: '/build/',
      filename: '[name].js'
    },
    resolve: {
      alias: { lib: __dirname+'/js/lib' },
      extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    module: {
      loaders: styleLoaders.concat([
        { test: /\.html$/, loader: 'html' },
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
        { test: /\.woff($|\?)/,   loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.woff2($|\?)/,  loader: "url?limit=10000&mimetype=application/font-woff2" },
        { test: /\.ttf($|\?)/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot($|\?)/,    loader: "file" },
        { test: /\.svg($|\?)/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
        { test: /\.png($|\?)/,    loader: "url?limit=10000&mimetype=image/png" },
        { test: /\.jpg($|\?)/,    loader: "url?limit=10000&mimetype=image/jpeg" },
        { test: /\.ico($|\?)/,    loader: "url?limit=10000&mimetype=image/x-icon" }
      ])
    }
  }

}

module.exports = baseConfig;