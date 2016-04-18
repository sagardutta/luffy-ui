var webpack = require("webpack");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
                test: /\.css$/,
                loader: "style!css"
            }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },

  resolve: {
         alias: {
             "ag-grid-root" : __dirname + "/node_modules/ag-grid"
         }
     },
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
}),
  ]
};
