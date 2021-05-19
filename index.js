require('dotenv').config()
const express = require('express');
const {readAll, readById} = require('./readFiles')();

const app = express();
const port = process.env.PORT;

app.get('/curriculum', (req, res) => {
  const result = readAll();
  res.send(result);
})

app.get('/curriculum/:id', (req, res) => {
  const result = readById(req.params.id);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})