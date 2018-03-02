let pizzaDb = [
  {id: 0, recipe: 'Palacsinta'},
  {id: 1, recipe: 'Rétes'},
  {id: 2, recipe: 'Briós'}
];
let idCounter = 0;

const getAll = () => {
  return pizzaDb;
};

const get = (id) => {
  return pizzaDb.find((piz) => {
    return piz.id === id;
  });
};

const create = (params) => {
  let newPizza = {id: idCounter, pizzaname: params.pizzaname};
  pizzaDb.push(newPizza);
  idCounter++;
  return newPizza;
};

const update = (params) => {

};

const destroy = (id) => {
  let piz = get(id);
  let index = pizzaDb.indexOf(piz);
  pizzaDb.splice(index, 1);
  return piz;
};

module.exports = {
  getAll: getAll,
  get: get,
  create: create,
  destroy: destroy
};
