const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

const mongoURI = 'mongodb+srv://davidv2003:monochrome12@cluster0.obk1zi1.mongodb.net/contactus';

mongoose.connect(mongoURI, {});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});