// const express = require('express');
import express from 'express';
// const routes = require('./routes');
import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.routes();
  }
  routes(){
    this.app.use(routes)
  }
}

// module.exports = new App().app;
export default new App().app;