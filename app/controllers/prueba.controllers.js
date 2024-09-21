const db = require('../config/db.config.js');

const pr = db.prueba;


exports.create =(req,res)   => {
    const prueba = {
        nombre: req.body.nombre
    };
    pr.create(prueba)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error creating the prueba."
        });
    });
};

exports.findAll =(req, res) => {
    pr.findAll()
   .then(data => {
     res.send(data);
    })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Error retrieving empleados."
     });
    });
};