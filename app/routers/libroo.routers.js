
const router = require('express').Router();

const libroo = require('../controllers/libroos.controller.js');


router.post('/create',libroo.create);

router.get('/findall',libroo.findAll);

router.get('/:id',libroo.findOneById);

router.put('/:id/update',libroo.update);

router.delete('/:id/delete',libroo.delete);

module.exports = router;

