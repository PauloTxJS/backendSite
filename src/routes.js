// const { Router } = require('express');
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Paulo');
});

// module.exports = routes;
export default routes;