const db = require('../config/db.config.js');

const libroo = db.libroos;


exports.create =(req,res) => {
    const libroo = {
        titulo: req.body.nombre,
        id_autor: req.body.id_autor,
        editorial: req.body.editorial,
        anio_pl: req.body.anio_pl,
        isbn: req.body.isbn,
        categoria: req.body.categoria,
        cantidad_disponible: req.body.cantidad_disponible,
        ubicacion: req.body.ubicacion
    };
    libroo.create(libroo)
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
    libroo.findAll()
       .then(data => {
            res.send(data);
        })
       .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al obtener los libroos."
            });
        });
};

exports.findOneById = (req, res) => {
    libroo.findByPk(req.params.id)
       .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "No se encontró el libroo con el id " + req.params.id
                });
            }
            res.send(data);
        })
       .catch(err => {
            if (err.kind === 'not_found') {
                return res.status(404).send({
                    message: "No se encontró el libroo con el id " + req.params.id
                });
            }
            res.status(500).send({
                message: "Error al buscar el libroo con el id " + req.params.id
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Debe proporcionar los datos del libroo."
        });
    }
    libroo.findByPk(req.params.id)
    .then(data => {
        if (!data) {
            return res.status(404).send({
                message: "No se encontró el libroo con el id " + req.params.id
            });
        }
        data.update(req.body)
           .then(data => {
                res.send(data);
            })
           .catch(err => {
                if (err.kind === 'not_found') {
                    return res.status(404).send({
                        message: "No se encontró el libroo con el id " + req.params.id
                    });
                }
                return res.status(500).send({
                    message: "Error al actualizar el libroo con el id " + req.params.id
                });
            });
    })
}

exports.delete = (req, res) => {
    libroo.findByPk(req.params.id)
       .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: "No se encontró el libroo con el id " + req.params.id
                });
            }
            data.destroy()
               .then(data => {
                    res.send({
                        message: "Libroo eliminado correctamente."
                    });
                })
               .catch(err => {
                    if (err.kind === 'not_found') {
                        return res.status(404).send({
                            message: "No se encontró el libroo con el id " + req.params.id
                        });
                    }
                    return res.status(500).send({
                        message: "No se pudo eliminar el libroo con el id " + req.params.id
                    });
                });
        })
       .catch
        (err => {
            if (err.kind === 'not_found') {
                return res.status(404).send({
                    message: "No se encontró el libroo con el id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error al buscar el libroo con el id " + req.params.id
            });
        });
};
