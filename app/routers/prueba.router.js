const router = require('express').Router();

const prueba = require('../controllers/prueba.controllers.js');


router.post('/create',prueba.create)
router.get('/findall',prueba.findAll)
module.exports = router;