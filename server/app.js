import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';

import webpackConfig from '../webpack.config.dev';

// Express Init
const app = express();

// Server Init
const PORT = process.env.PORT || 5000;

// Middleware
app.use(webpackMiddleware(webpack(webpackConfig)));

// Index Route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`Server Started on Port: ${PORT}`);
});
