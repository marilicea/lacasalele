const express = require('express'), db = require('./db'), cors = require('cors');
const app = express();
app.use(cors(), express.json());

app.post('/api/compras', async (req, res) => {
  try {
    const { nombre, direccion, telefono, email, tarjeta, carrito, total } = req.body;
    const productos = JSON.stringify(carrito);
    await db.query(
      'INSERT INTO compras (nombre, direccion, telefono, email, tarjeta, total) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, direccion, telefono, email, tarjeta, total]
    );
    res.json({ ok: true, mensaje: 'Compra exitosa 🎉' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, mensaje: 'Error en el servidor' });
  }
});

app.listen(3000, () => console.log('Server en http://localhost:3000'));
