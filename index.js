const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/greeting/:name', (req, res) => {
  let { name } = req.params;
  let obj = { message: `Hello ${name}`};
  res.json(obj);
});

app.post('/data', function (req, res) {
  let obj = req.body;
  obj.name = 'Ibrahim Abu Nemer';
  res.json(obj);
});

app.listen(port, () => {
  console.log(`Start server at port ${port}`);
});
