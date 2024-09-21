
const router = require('express').Router();

const libroo = require('../controllers/libroos.controller.js');


router.post('/create',libroo.create);

router.get('/findall',libroo.findAll);

router.get('/:id',libroo.findOneById);

router.put('/:id',libroo.update);

router.delete('/:id',libroo.delete);

module.exports = router;

