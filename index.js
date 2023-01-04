const { retrieve, read_contract, contractEvents } = require('./methods/main');

const express = require('express');
const app = express();
const port = 3001;

let TEST_CONTRACT_ADDRESS = '0x74e6850ba484d6a6c45a0da88082aabf4bd69654';
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/retrieve', (req, res) => {
  const address = req.query.address;
  retrieve(address).then((balance) => {
    res.send(balance);
  });
});

app.get('/read_contract', (req, res) => {
  const address = req.query.address;
  read_contract(address).then((balance) => {
    res.send(balance);
  });
});

app.get('/contractEvents', (req, res) => {
  const address = req.query.address;
  contractEvents(address).then((balance) => {
    res.send(balance);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
