import express from 'express';
import { Liquid } from 'liquidjs';

const app = express();

const engine = new Liquid({
  root: __dirname,
  extname: '.liquid',
});

app.engine('liquid', engine.express()); // register liquid engine
app.set('views', [
  './templates/layouts',
  './templates/partials',
  './templates/views',
]); // specify the views directory
app.set('view engine', 'liquid'); // set to default

app.get('/', (req, res) => {
  res.render('example', {
    title: 'Some title',
    name: 'Victor Tavares',
  });
});

export default app;
