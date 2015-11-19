import express from 'express';
import path from 'path';

const app = express();

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/js', express.static(path.join(__dirname, '../dist')));

app.use('/', (req, res) => {
  if (req.url !== '/') {
    return res.status(404).send('Page not found');
  }

  res.status(200).sendFile(path.join(__dirname, './index.html'));
});

app.listen(9001, function onListen() {
  console.log('Listening at localhost:9001');
});
