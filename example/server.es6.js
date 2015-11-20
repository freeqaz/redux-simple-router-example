import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('handlebars', hbs.create().engine);
app.set('view engine', 'handlebars');

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/js', express.static(path.join(__dirname, '../dist')));

app.use('/', (req, res) => {
  res.render('../example/views/index', {
    devTools: req.query.devTools
  });
});

app.listen(9001, function onListen() {
  console.log('Listening at localhost:9001');
});
