const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});