import path from 'path';
import webpack from 'webpack';


const WebpackConfig: webpack.Configuration = {
  entry: './src/main.ts',
  mode: 'production',
  target:'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  watchOptions: {
    ignored: '/node_modules/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, '/node_modules')]
      },
      { test: /\.ts$/, exclude: path.join(__dirname, '/node_modules'), loader: 'ts-loader' }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname)
    }
  }
}


export default WebpackConfig;