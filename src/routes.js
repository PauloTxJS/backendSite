// const { Router } = require('express');
import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  await User.create({
    name: 'Romi Rain',
    email: 'contato@romirain.com',
    password: '123'
  }, (error, small) => {
    if (error) return res.status(400).json({ error: "Usuário não cadastrado" });
    
    return res.status(200).json({ error: "Usuário cadastrado com sucesso" });
  })
});

// module.exports = routes;
export default routes;