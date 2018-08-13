const path = require('path');
const {
  addPlugins,
  babel,
  createConfig,
  css,
  defineConstants,
  devServer,
  entryPoint,
  env,
  file,
  match,
  performance,
  setOutput,
  sourceMaps,
  uglify,
  url,
} = require('webpack-blocks');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const sourceDir = process.env.SOURCE || 'src';
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/');
const sourcePath = path.join(process.cwd(), sourceDir);
const outputPath = path.join(process.cwd(), 'dist');

const resolveModules = modules => () => (prevConfig = {}) => ({
  ...prevConfig,
  resolve: {
    modules: [].concat(modules, ['node_modules']),
  },
});

const mode = givenMode => (context, { merge }) => merge({
  mode: givenMode,
});

const optimization = () => (context, { merge }) => merge({
  optimization: {
    splitChunks: {
      chunks: 'all', // Automatically split vendor and commons
    },
    runtimeChunk: true, // Keep the runtime chunk separated to enable long term caching
  },
});

const config = createConfig([
  entryPoint({
    app: sourcePath,
  }),
  setOutput({
    filename: '[name].js',
    path: outputPath,
    publicPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
    'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
  }),
  match(['*.js', '!*node_modules*'], [babel(/* options */)]),
  addPlugins([
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(process.cwd(), 'public/index.html'),
      chunksSortMode: 'none',
    }),
  ]),
  css(), // or use `match()` to apply it to other files than *.css
  match(['*.eot', '*.ttf', '*.woff', '*.woff2'], [file()]), // will copy font files to build directory and link to them
  match(
    ['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp'], // will load images up to 10KB as data URL
    [url({ limit: 10000 })]
  ),
  optimization(),
  resolveModules(sourceDir),

  env('development', [
    mode('development'),
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      historyApiFallback: { index: publicPath },
      headers: { 'Access-Control-Allow-Origin': '*' },
      host,
      port,
    }),
    sourceMaps(),
    // addPlugins([
    //   new webpack.NamedModulesPlugin(),
    // ]),
    performance({
      maxAssetSize: 1500000, // Increase performance budget thresholds for development mode
      maxEntrypointSize: 1500000,
    }),
  ]),

  env('production', [
    mode('production'),
    uglify({
      parallel: true,
    }),
    addPlugins([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
    ]),
    // splitVendor(),
    // addPlugins([
    //   new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    // ]),
  ]),
]);

module.exports = config;
