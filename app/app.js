const express = require('express');
const router = require('./routers/prueba.router.js');

const usuariosrouter = require('./routers/usuarios.routers.js');

const libroos = require('./routers/libroo.routers.js');

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.use(express.json());

app.use('/api/v1',router);
app.use('/api/usuarios', usuariosrouter);
app.use('/api/libroos', libroos);

module.exports = app
