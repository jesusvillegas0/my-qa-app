const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

// Configurar conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'myapp',
  password: process.env.PGPASSWORD || 'password',
  port: process.env.PGPORT || 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Endpoint para verificar el estado del servidor
app.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint para almacenar datos en PostgreSQL
app.post('/submit', async (req, res) => {
  const { name, lastname, cedula, phone } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (name, lastname, cedula, phone) VALUES ($1, $2, $3, $4)',
      [name, lastname, cedula, phone]
    );
    res.json({ status: 'success', message: 'Data saved!' });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Iniciar servidor
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };
