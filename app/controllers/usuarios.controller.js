const db = require('../config/db.config.js');

const usuario = db.usuarios;

exports.create = (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        estado: req.body.estado
    };
    usuario.create(usuario)
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

exports.findAll = (req, res) => {
    usuario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error retrieving usuarios."
            });
        });
};

exports.findOneById = (req, res) => {
    usuario.findByPk(req.params.id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: 'No se encontró el usuario con el id ' + req.params.id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: 'Error retrieving usuario with id=' + req.params.id });
        });
};
exports.delete = (req, res) => {
    usuario.findByPk(req.params.id)
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: "No se encontró el usuario con el id " + req.params.id
            });
        }
        data.destroy()
        .then(deletedData => {
            res.send({
                message: "Usuario eliminado con éxito!"
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error eliminando el usuario con el id=" + req.params.id
            });
        });
    })
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los datos del usuario no pueden estar vacíos"
        });
    }
    usuario.findByPk(req.params.id)
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: "No se encontró el usuario con el id " + req.params.id
            });
        }
        data.update(req.body)
        .then(updatedData => {
            res.send(updatedData);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error actualizando el usuario con el id=" + req.params.id
            });
        });
    })
};
    

