const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  const result = a + b;
  res.json({ result });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server }; // Exportamos tanto la app como el servidor
