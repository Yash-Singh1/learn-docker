const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
