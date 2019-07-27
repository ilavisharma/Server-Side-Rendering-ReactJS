import express from 'express';
import 'babel-polyfill';
import renderer from './Helpers/renderer';
import createStore from './Helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  // initilise and load data into the store
  res.send(renderer(req, store));
});

app.listen(3000, () => console.log('Listening on port 3000'));
