var express = require('express');
const { routes } = require('../app');
var router = express.Router();

router.use('/ranking', require('./ranking'));
router.use('/society', require('./society'));
router.use('/members', require('./members'));

module.exports = router;
