const router = require('express').Router();

const usuarios = require('../controllers/usuarios.controller.js');


router.post('/create', usuarios.create);

router.get('/findall', usuarios.findAll);

router.get('/:id', usuarios.findOneById);

router.put('/:id/update', usuarios.update);

router.delete('/:id/delete', usuarios.delete);

module.exports = router;
