const app = require('./app/app.js');
const db = require('./app/config/db.config.js')

const port = process.env.PORT ||3000;

// Eliminar y re-crear las tablas cuando se ejecuta la app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  }).catch(() => {
    console.error('Error connecting to the database');
  });

  module.exports = app;
  