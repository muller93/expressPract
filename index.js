const express = require('express');
const pizManager = express();
const pizza = require('./controllers/pizza');
const expressHandlebars = require('express-handlebars');

const handlebarsOption = {defaultLayout: 'main'};
const handlebarsConfig = expressHandlebars(handlebarsOption);
pizManager.engine('handlebars', handlebarsConfig);
pizManager.set('view engine', 'handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main}));  same
pizManager.get('/pelda', (req, res) => {
  res.render('geza');
});
pizManager.get('/juli', (req, res) => {
  res.render('juli');
});

const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

pizManager.use(logger);
pizManager.use('/pizza', pizza);

// listener
pizManager.listen(4040);
