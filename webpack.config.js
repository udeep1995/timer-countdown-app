var webpack = require('webpack');
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
],
externals:{
  jquery:'jQuery'
},
plugins:[
  new webpack.ProvidePlugin({
    '$':'jquery',
    'jQuery':'jquery'
  })
],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules:[
      __dirname,
      __dirname +'/node_modules',
      __dirname + '/app/components',
      __dirname + '/app/styles',
      __dirname + '/app/api',
      __dirname + '/app/styles/components'
    ],
    alias: {
      Main:'Main.jsx',
      Nav: 'Nav.jsx',
      Countdown: 'Countdown.jsx',
      Timer: 'Timer.jsx',
      Clock: 'Clock.jsx',
      CountdownForm: 'CountdownForm.jsx',
      Controls: 'Controls.jsx',
      applicationStyles:'app.css',
      navcss:'nav.css',
      clockcss:'clock.css',
      controlscss:'controls.css'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015','stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  }
}
