/* eslint-disable global-require */
const express = require('express');
const path = require('path');

// In dev mode, use webpack dev + hot reload middleware
const addDevMiddleware = (app) => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config.dev');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));
};

// In production there's no need for webpack itself, just serve the bundled files
const addProdMiddleware = (app) => {
  // express.static middleware is used to serve static files (ie. bundle.js)
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(express.static(path.join(__dirname, 'static')));
};

module.exports = (app) => {
  const isProd = process.env.NODE_ENV === 'production';

  // Apply the right middleware for this context
  if (isProd) {
    addProdMiddleware(app);
  } else {
    addDevMiddleware(app);
  }

  return app;
};
