import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es5',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config;
