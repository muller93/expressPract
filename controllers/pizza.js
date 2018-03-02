const express = require('express');
const pizModel = require('../models/piz');
const pizza = express();
// index
pizza.get('/', (req, res) => {
  let allPizza = pizModel.getAll();
  res.locals.allPizza = allPizza;
  res.render('pizza/index');
});

pizza.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let piz = pizModel.get(id);
  res.json(piz);
});

pizza.post('/', (req, res) => {
  let pizzaname = req.query.pizzaname;
  let pizza = pizModel.create({pizzaname: pizzaname});
  res.json({action: 'created', success: true, data: pizza});
});

pizza.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update'});
});

pizza.put('/:id', (req, res) => {
  let id = req.params.id;
  res.json({id: id, action: 'update', data: pizza});
});

pizza.delete('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let piz = pizModel.destroy(id);
  res.json(piz);
});

module.exports = pizza;