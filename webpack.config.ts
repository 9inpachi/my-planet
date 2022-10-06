import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const isDevServer = process.env.WEBPACK_SERVE ?? false;

const config: Configuration = {
  mode: isDevServer ? 'development' : 'production',
  context: path.resolve(__dirname, './'),
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: isDevServer ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
        },
      },
      {
        test: /\.(jpe?g|png|gif|gltf|obj|fbx|css)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[file]',
        },
      },
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, './public/index.html'),
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};

export default config;
